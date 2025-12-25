document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 모바일 메뉴 토글 (Mobile Menu Toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. 모바일에서 드롭다운 클릭 시 펼치기 (Mobile Dropdown)
    const dropdowns = document.querySelectorAll('.dropdown > .nav-link');
    
    dropdowns.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // 링크 이동 방지
                // 다른 드롭다운 닫기 (선택사항)
                // this.parentElement.classList.toggle('active'); // CSS에서 .active 스타일링 필요 시
                const submenu = this.nextElementSibling;
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });

    // 3. Library 페이지 필터링 시스템 (Filtering System)
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const contentCards = document.querySelectorAll('.content-card'); // Library 페이지의 카드 클래스명

    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // 체크된 필터들의 value를 배열로 수집
                const activeFilters = Array.from(filterCheckboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                
                contentCards.forEach(card => {
                    const cardCategory = card.dataset.category; // HTML에 data-category="foundations" 형식 필요
                    
                    // 필터가 없거나(전체보기), 해당 카테고리가 활성 필터에 포함되어 있으면 표시
                    if (activeFilters.length === 0 || activeFilters.includes(cardCategory)) {
                        card.style.display = 'block';
                        // 애니메이션 효과 추가 가능 (fadeIn)
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }
});

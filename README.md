# 🎨 Design Theory Hub

> 3D 아티스트와 디자이너를 위한 완전한 디자인 이론 가이드

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://your-username.github.io/design-theory-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 프로젝트 소개

**Design Theory Hub**는 3D 아티스트, 모션 그래픽 디자이너, 그리고 AI 크리에이터를 위한 실무 중심 디자인 이론 웹사이트입니다.

### ✨ 주요 특징

- 🎨 **15개 카테고리** - 색상, 조명, 구도부터 AI 프롬프트까지
- 🌓 **다크모드 지원** - 라이트/다크 테마 전환
- 📱 **완전한 반응형** - 모바일, 태블릿, 데스크톱 최적화
- ⚡ **빠른 로딩** - 정적 HTML/CSS/JS만 사용
- 🎯 **실무 중심** - Cinema 4D, Unreal Engine 등 실전 활용법
- 🤖 **AI 시대 대응** - AI 프롬프트 엔지니어링 가이드

## 📂 프로젝트 구조

```
design-theory-hub/
├── index.html              # 메인 홈페이지
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── responsive.css     # 반응형 디자인
├── js/
│   ├── main.js            # 메인 JavaScript
│   └── theme-toggle.js    # 다크모드 토글
├── pages/
│   ├── color-theory.html  # 색상 이론
│   ├── lighting.html      # 조명 이론
│   ├── composition.html   # 구도와 레이아웃
│   ├── typography.html    # 타이포그래피
│   ├── ai-prompts.html    # AI 프롬프트
│   └── about.html         # About
├── assets/
│   └── images/            # 이미지 리소스
└── README.md
```

## 🚀 GitHub Pages 배포 방법

### 1. 저장소 생성

GitHub에서 새 저장소를 생성합니다:
- 저장소 이름: `design-theory-hub` (또는 원하는 이름)
- Public 또는 Private 선택
- README 추가하지 않음 (이미 있음)

### 2. 로컬에서 Git 초기화 및 업로드

```bash
# 프로젝트 폴더로 이동
cd design-theory-hub

# Git 초기화
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Design Theory Hub"

# 원격 저장소 연결 (your-username을 본인 GitHub 계정으로 변경)
git remote add origin https://github.com/your-username/design-theory-hub.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 3. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 클릭

### 4. 배포 확인

약 1-2분 후, 다음 주소에서 사이트 확인 가능:
```
https://your-username.github.io/design-theory-hub/
```

## 🛠️ 커스터마이징

### 색상 테마 변경

`css/style.css` 파일의 `:root` 섹션에서 색상 변경:

```css
:root {
    --accent-primary: #4f46e5;    /* 메인 색상 */
    --accent-secondary: #7c3aed;  /* 보조 색상 */
    /* 원하는 색상으로 변경 */
}
```

### 사이트 제목 변경

각 HTML 파일의 `<title>` 태그와 네비게이션의 브랜드명 수정:

```html
<div class="nav-brand">
    <h1>🎨 Your Site Name</h1>
</div>
```

### 콘텐츠 추가

1. `pages/` 폴더에 새 HTML 파일 생성
2. 기존 페이지를 템플릿으로 복사
3. 네비게이션 메뉴에 링크 추가

## 📝 콘텐츠 작성 가이드

### 새 페이지 만들기

1. `pages/` 폴더에서 기존 페이지 복사 (예: `color-theory.html`)
2. 파일명 변경 (예: `new-topic.html`)
3. 내용 수정:
   - `<title>` 태그
   - `.page-header` 섹션
   - `.content-section` 내용
4. 모든 페이지의 네비게이션에 링크 추가

### 이미지 추가

```html
<!-- assets/images/ 폴더에 이미지 업로드 후 -->
<img src="../assets/images/your-image.jpg" alt="설명">
```

## 🎯 주요 기능

### 다크모드

- **토글 버튼**: 네비게이션 우측 상단
- **키보드 단축키**: `Ctrl/Cmd + Shift + D`
- **자동 저장**: localStorage에 선호도 저장

### 반응형 디자인

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

### Back to Top 버튼

- 500px 이상 스크롤 시 자동 표시
- 부드러운 스크롤 애니메이션

## 📦 의존성

**없음!** 순수 HTML, CSS, JavaScript만 사용합니다.

- ✅ 외부 라이브러리 불필요
- ✅ npm/yarn 설치 불필요
- ✅ 빌드 과정 불필요
- ✅ GitHub Pages에 바로 배포 가능

## 🌐 브라우저 지원

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ⚠️ IE11 미지원

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 👤 제작자

**Panda Universe** (이덕준)

- 🎨 [Behance](https://www.behance.net/pandauniverse)
- 📺 [YouTube](https://www.youtube.com/@PandaUniverse)
- 💼 3D Motion Graphics Artist & Media Art Creator

## 🤝 기여하기

이슈나 Pull Request를 통해 기여해주세요!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트 관련 문의나 제안사항이 있으시면 GitHub Issues를 이용해주세요.

---

⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

**Made with ❤️ by Panda Universe**
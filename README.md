# 개발자 포트폴리오 웹사이트

**전문적이고 모던한 개발자 포트폴리오/이력서 웹사이트**

## 🎯 프로젝트 개요

이 프로젝트는 개발자가 자신의 경력, 기술, 프로젝트를 효과적으로 소개할 수 있는 반응형 웹 포트폴리오입니다.

### 특징
- ✨ 모던하고 전문적인 디자인
- 📱 완전한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ⚡ 빠른 로딩 속도 (가벼운 구조)
- 🎨 부드러운 스크롤 애니메이션
- ♿ WCAG 접근성 기준 준수
- 🔍 SEO 최적화

---

## 📁 프로젝트 구조

```
resume-website/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css          # 커스텀 CSS (Tailwind CSS 확장)
├── js/
│   └── script.js           # 자바스크립트 로직
├── assets/
│   ├── images/             # 프로필 이미지, 프로젝트 썸네일
│   └── icons/              # SVG 아이콘
├── ROADMAP.md              # 개발 로드맵
├── CLAUDE.md               # Claude Code 가이드
└── README.md               # 이 파일
```

---

## 🛠️ 기술 스택

| 분류 | 기술 | 설명 |
|------|------|------|
| 마크업 | **HTML5** | 시맨틱 구조 |
| 스타일 | **CSS3** + **Tailwind CSS** | 빠른 개발, 반응형 디자인 |
| 인터랙션 | **Vanilla JavaScript** | 라이브러리 없음, 경량 |
| 배포 | **GitHub Pages** / **Netlify** | 무료 호스팅 |

### Tailwind CSS 버전
- **CDN 방식** (개발 단계)
- **빌드 프로세스** (배포 단계, 파일 크기 최적화)

---

## 📋 포함된 섹션

### 1. 네비게이션 (Navigation)
- 고정 헤더
- 데스크톱 메뉴
- 모바일 햄버거 메뉴
- 스크롤 기반 활성 링크 표시

### 2. 히어로 섹션 (Hero)
- 프로필 이미지
- 한 줄 소개
- CTA 버튼

### 3. 소개 섹션 (About)
- 경력 요약
- 핵심 역량 소개

### 4. 기술 스택 섹션 (Skills)
- 프로그래밍 언어
- 프레임워크 & 라이브러리
- 도구 & 기술

### 5. 경력 섹션 (Experience)
- 근무 경력 타임라인
- 직책, 회사명, 기간
- 주요 업무 및 성과

### 6. 프로젝트 섹션 (Projects)
- 대표 프로젝트 카드
- 프로젝트 설명
- 기술 태그
- 링크 (GitHub, Live Demo)

### 7. 연락처 섹션 (Contact)
- 연락처 정보 (이메일, 전화)
- 소셜 미디어 링크
- 연락처 폼
- 폼 검증

### 8. 푸터 (Footer)
- 저작권 정보
- 추가 링크

---

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/resume-website.git
cd resume-website
```

### 2. 로컬 서버 실행

#### Python 3 사용
```bash
python -m http.server 8000
```

#### Node.js 사용
```bash
npx http-server
```

#### Live Server (VSCode)
- VSCode에서 Live Server 확장 설치
- `index.html` 우클릭 → "Open with Live Server"

### 3. 브라우저에서 확인
```
http://localhost:8000
```

---

## ✏️ 커스터마이징

### 1. 개인 정보 수정

**index.html**에서 다음 부분을 수정하세요:

```html
<!-- 개인 정보 -->
<h1>안녕하세요, 저는 개발자입니다</h1>
<p>웹 개발과 소프트웨어 설계에 열정적인 개발자입니다</p>

<!-- 연락처 -->
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+821012345678">+82 10-1234-5678</a>

<!-- 소셜 미디어 -->
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
```

### 2. 색상 팔레트 변경

**css/styles.css**의 CSS 변수 수정:

```css
:root {
    --color-primary: #3B82F6;      /* 주색 변경 */
    --color-secondary: #10B981;    /* 보조색 변경 */
    --color-accent: #F59E0B;       /* 강조색 변경 */
}
```

또는 **index.html**에서 Tailwind CSS 클래스 수정:

```html
<!-- bg-blue-600 → bg-purple-600 등 -->
<a href="#contact" class="bg-purple-600 text-white px-8 py-3">
```

### 3. 프로필 이미지 추가

1. `assets/images/` 폴더에 프로필 이미지 추가
2. **index.html**에서 이미지 경로 수정:

```html
<img src="assets/images/profile.jpg" alt="프로필 사진" class="w-24 h-24 rounded-full">
```

### 4. 프로젝트 추가

**index.html**의 프로젝트 섹션에 새 카드 추가:

```html
<div class="bg-white rounded-lg shadow overflow-hidden">
    <img src="assets/images/project.jpg" alt="프로젝트" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-bold">프로젝트명</h3>
        <p class="text-gray-600">프로젝트 설명</p>
        <a href="https://github.com/..." class="text-blue-600">프로젝트 보기</a>
    </div>
</div>
```

---

## 🎨 디자인 시스템

### 색상
- **주색 (Primary)**: `#3B82F6` - 파란색
- **보조색 (Secondary)**: `#10B981` - 초록색
- **강조색 (Accent)**: `#F59E0B` - 주황색
- **배경색**: `#FFFFFF`, `#F9FAFB`
- **텍스트**: `#1F2937`, `#6B7280`

### 타이포그래피
- **폰트**: Inter, sans-serif
- **제목 굵기**: 600-700
- **본문 굵기**: 400-500

### 간격 (8px 기준)
- 섹션 간: `py-16` / `py-20` (64px / 80px)
- 컴포넌트 간: `gap-4` / `gap-6` (16px / 24px)

---

## 📱 반응형 브레이크포인트

| 디바이스 | 너비 | Tailwind 클래스 |
|---------|------|-----------------|
| 모바일 | < 640px | (기본) |
| 테블릿 | 640px - 1024px | `md:` |
| 데스크톱 | 1024px + | `lg:` |

---

## 🔍 SEO 최적화

### 메타 태그
- `<title>`: 페이지 제목
- `<meta name="description">`: 페이지 설명
- `<meta name="author">`: 작성자
- `<meta property="og:*">`: Open Graph 태그

### 구조화된 데이터
- 시맨틱 HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- 올바른 제목 계층 구조 (h1, h2, h3)

### 성능
- 이미지 최적화
- CSS/JS 최소화
- 빠른 로딩 속도

---

## ♿ 접근성

### WCAG 2.1 준수
- ✅ 색상 대비도 (AA 이상)
- ✅ 키보드 네비게이션 지원
- ✅ 스크린 리더 호환성
- ✅ 모든 이미지에 alt 텍스트
- ✅ 명확한 포커스 표시

---

## 📊 성능 최적화

### Lighthouse 목표
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 최적화 방법
1. **이미지**: TinyPNG, ImageOptim으로 압축
2. **CSS**: Tailwind CSS 빌드로 최소화
3. **JavaScript**: Vanilla JS로 경량 유지
4. **폰트**: 필요한 폰트만 로드

---

## 🧪 테스트 및 검증

### 크로스 브라우저 테스트
- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

### 모바일 테스트
- iOS Safari
- Chrome Mobile
- Samsung Internet

### 검증 도구
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/) - 접근성
- [Can I Use](https://caniuse.com/) - 호환성

---

## 🚢 배포

### GitHub Pages
```bash
# gh-pages 브랜치 생성 및 배포
git checkout -b gh-pages
git push origin gh-pages
```

### Netlify
1. [Netlify](https://netlify.com)에 로그인
2. "New site from Git" 선택
3. GitHub 저장소 연결
4. 배포 설정
   - Build command: (없음)
   - Publish directory: `/`

### 커스텀 도메인 설정
1. 도메인 구매 (GoDaddy, Namecheap 등)
2. GitHub Pages 또는 Netlify에서 도메인 설정
3. DNS 레코드 업데이트

---

## 📚 추가 자료

### 공식 문서
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)

### 디자인 리소스
- [Font Awesome](https://fontawesome.com/) - 아이콘
- [Unsplash](https://unsplash.com/) - 무료 이미지
- [Pexels](https://www.pexels.com/) - 무료 이미지

### 배포 도구
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

---

## 🐛 문제 해결

### 문제: 이미지가 표시되지 않음
```html
<!-- 이미지 경로 확인 -->
<img src="assets/images/profile.jpg" alt="프로필 사진">
```

### 문제: Tailwind CSS 스타일이 적용되지 않음
```html
<!-- CDN 링크 확인 -->
<script src="https://cdn.tailwindcss.com"></script>
```

### 문제: 모바일 메뉴가 작동하지 않음
- JavaScript 파일 로드 확인: `<script src="js/script.js"></script>`
- 브라우저 콘솔 에러 확인 (F12)

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 👥 기여

개선 제안이나 버그 리포트는 Issue를 통해 제출해주세요.

---

## 📧 연락처

질문이나 피드백은 아래로 연락주세요:
- 이메일: your@email.com
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

---

**마지막 업데이트**: 2026-02-24

Happy coding! 🚀

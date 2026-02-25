# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🌐 언어 및 커뮤니케이션 규칙

### 기본 설정
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

### 예시
```javascript
// ✅ 올바른 사용 예시
// 사용자의 활동 상태를 확인하는 함수
function isUserActive(userId) {
  // 데이터베이스에서 사용자 정보 조회
  return userData.active === true;
}

// ❌ 피해야 할 예시
// 한글 변수명 사용
let 사용자활동상태 = true;

// 영어 주석
// Check if user is active
```

---

## 📋 프로젝트 개요

**개발자 웹 이력서(포트폴리오) 웹사이트**

### 기술 스택
- **마크업**: HTML5
- **스타일**: CSS3 + Tailwind CSS
- **인터랙션**: Vanilla JavaScript
- **배포**: GitHub Pages / Netlify (예정)

### 주요 기능
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 자기소개, 기술 스택, 경력, 프로젝트 포트폴리오
- 스크롤 애니메이션 및 상호작용
- 연락처 폼

---

## 📁 프로젝트 구조

```
resume-website/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css          # 커스텀 CSS (Tailwind 확장)
├── js/
│   └── script.js           # 자바스크립트 로직
├── assets/
│   ├── images/             # 프로필 이미지, 프로젝트 썸네일
│   └── icons/              # SVG 아이콘
├── ROADMAP.md              # 개발 로드맵
├── CLAUDE.md               # 이 파일
└── README.md               # 프로젝트 설명
```

### 디렉토리 설명
- **index.html**: 단일 페이지 애플리케이션. 모든 섹션이 포함됨
- **css/**: Tailwind CSS CDN + 커스텀 스타일
- **js/**: 스크롤 이벤트, 폼 처리, 애니메이션 등 클라이언트 측 로직
- **assets/**: 이미지, 아이콘 등 정적 리소스

---

## 🔧 개발 명령어 및 설정

### 개발 환경 실행
```bash
# 간단한 로컬 서버로 테스트 (Python 3 사용 시)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 또는 Live Server 사용 (VSCode 확장)
# VSCode에서 Live Server 확장 설치 후 마우스 우클릭 > "Open with Live Server"
```

### 빌드 및 배포 준비
```bash
# Tailwind CSS 빌드 (나중에 필요 시)
npm run build

# 배포 전 최적화 체크
# 1. 이미지 압축 (TinyPNG, ImageOptim 등)
# 2. CSS/JS 최소화
# 3. Lighthouse 성능 검사
```

### 테스트 및 검증
```bash
# 반응형 테스트
# 1. 모바일: 375px, 768px, 1024px 에서 테스트
# 2. 브라우저: Chrome, Firefox, Safari, Edge 테스트

# 접근성 검사
# 1. WCAG 기준 확인
# 2. 키보드 네비게이션 (Tab, Shift+Tab, Enter)
# 3. 스크린 리더 호환성
```

---

## 🏗️ 아키텍처 및 설계 원칙

### 파일 구성 철학
1. **단일 페이지 구조**: 모든 콘텐츠가 index.html에 포함
2. **Vanilla JavaScript**: 외부 라이브러리 최소화 → 빠른 로딩
3. **Tailwind CSS**: 클래스 기반 스타일링 → 빠른 개발 속도
4. **접근성 우선**: WCAG 기준 준수

### CSS 구조
```css
/* styles.css 구성 */
1. 리셋 및 기본 스타일 (Tailwind 제공)
2. 커스텀 색상, 폰트 정의
3. 공통 컴포넌트 (카드, 버튼 등)
4. 섹션별 고급 스타일
5. 애니메이션 및 트랜지션
6. 반응형 미디어 쿼리 (필요 시)
```

### JavaScript 구조
```javascript
// script.js 구성
1. DOM 요소 선택
2. 유틸리티 함수 (스크롤, 애니메이션 등)
3. 이벤트 리스너 등록
4. 폼 처리 및 유효성 검증
5. 초기화 함수 호출
```

---

## 📝 개발 가이드라인

### HTML 작성 시
- Semantic HTML 사용 (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- 올바른 제목 계층 구조 (h1 한 번, h2/h3 적절히)
- 모든 이미지에 alt 텍스트 추가
- 폼 요소에 명시적 label 사용

### CSS/Tailwind 작성 시
- Tailwind의 유틸리티 클래스 우선 사용
- 반복되는 패턴은 `@apply`로 커스텀 클래스 생성
- 반응형 클래스 사용: `md:`, `lg:`, `xl:` 프리픽스
- 모든 색상은 색상 변수 사용

### JavaScript 작성 시
- 간단한 DOM 조작 (jQuery 미사용)
- 이벤트 위임 사용으로 성능 최적화
- 폼 검증은 클라이언트 측 + 서버 측 (필요 시)
- 콘솔 에러 없음 (배포 전 확인)

---

## 🎨 디자인 시스템

### 색상 팔레트
```
주색 (Primary): #3B82F6 (파란색)
보조색 (Secondary): #10B981 (초록색)
강조색 (Accent): #F59E0B (주황색)
배경색 (Background): #FFFFFF / #F9FAFB
텍스트 (Text): #1F2937 / #6B7280
```

### 타이포그래피
```
제목: Inter, sans-serif (font-weight: 600-700)
본문: Inter, sans-serif (font-weight: 400-500)
코드: Fira Code, monospace
```

### 간격 (Spacing)
- Tailwind 기본 8px 배수 사용
- 섹션 간 간격: `py-16` / `py-20`
- 컴포넌트 간 간격: `gap-4` / `gap-6`

---

## ✅ 배포 전 체크리스트

### 기능 검증
- [ ] 모든 링크 작동 확인
- [ ] 폼 제출 정상 작동
- [ ] 모바일에서 메뉴 토글 작동
- [ ] 스크롤 애니메이션 부드러움

### 성능 최적화
- [ ] 이미지 최적화 완료 (< 100KB)
- [ ] Lighthouse 점수 90점 이상
- [ ] 로딩 시간 3초 이내
- [ ] 필요한 폰트만 로드

### 접근성 검증
- [ ] 모든 이미지에 alt 텍스트
- [ ] 색상 대비도 WCAG AA 이상
- [ ] 키보드 네비게이션 가능
- [ ] 포커스 표시 명확함

### 크로스 브라우저 테스트
- [ ] Chrome 최신 버전
- [ ] Firefox 최신 버전
- [ ] Safari 최신 버전
- [ ] Edge 최신 버전
- [ ] iOS Safari 최신 버전
- [ ] Chrome Mobile 최신 버전

---

## 📚 참고 자료

### 공식 문서
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML 스펙](https://html.spec.whatwg.org/)
- [Web.dev](https://web.dev/) - 웹 성능 및 접근성

### 도구
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - 성능 & 접근성 분석
- [WAVE](https://wave.webaim.org/) - 접근성 검사
- [TinyPNG](https://tinypng.com/) - 이미지 압축
- [Can I Use](https://caniuse.com/) - 브라우저 호환성

---

## 💡 일반적인 작업 흐름

### 새 기능 추가 시
1. ROADMAP.md에서 해당 작업 확인
2. 필요한 HTML 마크업 추가
3. Tailwind CSS로 스타일 적용
4. JavaScript 로직 추가 (필요 시)
5. 로컬 서버에서 테스트
6. 커밋 메시지는 한국어로 작성

### 버그 수정 시
1. 문제 재현 확인
2. 브라우저 개발자 도구에서 디버깅
3. 수정 후 테스트
4. 다른 브라우저에서도 확인

### 배포 전
1. 모든 파일 최적화
2. 모든 테스트 케이스 검증
3. 성능 및 접근성 최종 확인
4. 배포 명령어 실행

---

**최종 수정 날짜**: 2026-02-24

/**
 * 개발자 포트폴리오 - 메인 JavaScript 파일
 * 스크롤 이벤트, 폼 처리, 모바일 메뉴, 카운트업 애니메이션 등을 관리합니다
 */

// ========================================
// DOM 요소 선택
// ========================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// ========================================
// 모바일 메뉴 토글
// ========================================

/**
 * 모바일 메뉴 토글 함수
 */
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

/**
 * 모바일 메뉴 닫기
 */
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// 모바일 메뉴 버튼 클릭 이벤트
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// 모바일 메뉴 링크 클릭 시 닫기
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// 이벤트 위임: 모바일 메뉴 내 링크 클릭 시 닫기 보장
if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMobileMenu();
        }
    });
}

// ========================================
// 스크롤 네비게이션 효과
// ========================================

/**
 * 스크롤 위치에 따라 현재 섹션 강조
 * 활성 클래스: active-nav (다크 테마 기반)
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active-nav');
        }
    });
}

/**
 * 스크롤 시 네비게이션 배경 처리 (.scrolled 클래스 토글)
 */
function updateNavOnScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// 스크롤 이벤트 리스너 (throttling 적용)
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            updateActiveNavLink();
            updateNavOnScroll();
            updateScrollProgress();
            isScrolling = false;
        });
    }
});

// ========================================
// 스크롤 애니메이션 (Intersection Observer)
// ========================================

/**
 * Intersection Observer를 사용한 요소 애니메이션
 * 요소가 뷰포트에 진입할 때 fade-in 효과 적용
 */
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // rounded-lg 클래스 요소에 스크롤 애니메이션 적용
    const animatedElements = document.querySelectorAll('[class*="rounded-lg"]');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * 기술 숙련도 진행바 애니메이션
 * .skill-card가 뷰포트에 진입할 때 .skill-bar를 data-width까지 채움
 */
function setupSkillBars() {
    const skillBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-bar');
                bars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    if (targetWidth) {
                        requestAnimationFrame(() => {
                            bar.style.width = targetWidth;
                        });
                    }
                });
                skillBarObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => skillBarObserver.observe(card));
}

// ========================================
// 카운트업 애니메이션
// ========================================

/**
 * easeOutQuart 이징 함수
 * @param {number} t - 0~1 사이의 진행도
 * @returns {number} - 이징 적용된 값
 */
function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

/**
 * 카운트업 애니메이션 설정
 * Intersection Observer로 .stats-container 감지 후
 * .count-up 요소들을 0 → target 값까지 2초 동안 애니메이션
 */
function setupCountUpAnimation() {
    const statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) return;

    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countEls = entry.target.querySelectorAll('.count-up');
                countEls.forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    const duration = 2000; // 2초
                    const startTime = performance.now();

                    function animate(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easedProgress = easeOutQuart(progress);
                        const current = Math.round(target * easedProgress);

                        el.textContent = current + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }

                    requestAnimationFrame(animate);
                });

                countUpObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    countUpObserver.observe(statsContainer);
}

// 페이지 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
    setupSkillBars();
    setupCountUpAnimation();
});

// ========================================
// 폼 유효성 검증 및 처리
// ========================================

/**
 * 이메일 형식 검증
 * @param {string} email - 검증할 이메일
 * @returns {boolean} - 유효 여부
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 폼 필드 검증
 * @returns {boolean} - 모든 필드가 유효한지 여부
 */
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // 이름 검증 (2자 이상)
    if (nameInput.value.trim().length < 2) {
        showFieldError(nameInput, '이름은 2자 이상이어야 합니다');
        isValid = false;
    } else {
        clearFieldError(nameInput);
    }

    // 이메일 검증
    if (!isValidEmail(emailInput.value.trim())) {
        showFieldError(emailInput, '올바른 이메일 형식을 입력하세요');
        isValid = false;
    } else {
        clearFieldError(emailInput);
    }

    // 메시지 검증 (10자 이상)
    if (messageInput.value.trim().length < 10) {
        showFieldError(messageInput, '메시지는 10자 이상이어야 합니다');
        isValid = false;
    } else {
        clearFieldError(messageInput);
    }

    return isValid;
}

/**
 * 필드 에러 표시
 * @param {HTMLElement} field - 에러를 표시할 필드
 * @param {string} message - 에러 메시지
 */
function showFieldError(field, message) {
    field.classList.add('border-red-500');

    const existingError = field.nextElementSibling;
    if (existingError && existingError.classList.contains('error-message')) {
        existingError.remove();
    }

    const errorEl = document.createElement('p');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    field.parentNode.insertBefore(errorEl, field.nextSibling);
}

/**
 * 필드 에러 제거
 * @param {HTMLElement} field - 에러를 제거할 필드
 */
function clearFieldError(field) {
    field.classList.remove('border-red-500');
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('error-message')) {
        errorEl.remove();
    }
}

/**
 * 폼 제출 처리
 * @param {Event} e - 폼 제출 이벤트
 */
function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
        console.warn('폼 검증 실패');
        return;
    }

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    console.log('폼 데이터:', formData);
    showSuccessMessage('메시지가 전송되었습니다!');

    contactForm.reset();
}

/**
 * 성공 메시지 표시 (다크 테마)
 * @param {string} message - 표시할 메시지
 */
function showSuccessMessage(message) {
    const successEl = document.createElement('div');
    successEl.className = 'success-message-dark';
    successEl.textContent = message;

    contactForm.insertBefore(successEl, contactForm.firstChild);

    setTimeout(() => {
        successEl.remove();
    }, 3000);
}

// 폼 제출 이벤트 리스너
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ========================================
// 스크롤 진행도 표시
// ========================================

/**
 * 스크롤 진행도 업데이트
 */
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
}

// ========================================
// 페이지 로드 완료 이벤트
// ========================================

window.addEventListener('load', () => {
    console.log('포트폴리오 페이지 로드 완료');
    updateActiveNavLink();
    updateNavOnScroll();
});

// ========================================
// 전역 에러 핸들링
// ========================================

window.addEventListener('error', (event) => {
    console.error('에러 발생:', event.error);
});

// ========================================
// 유틸리티 함수
// ========================================

/**
 * 요소를 부드럽게 스크롤
 * @param {HTMLElement} element - 스크롤할 요소
 */
function smoothScrollTo(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * 디바운스 함수
 * @param {Function} func - 실행할 함수
 * @param {number} delay - 지연 시간 (ms)
 * @returns {Function} - 디바운스된 함수
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 스로틀 함수
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 시간 제한 (ms)
 * @returns {Function} - 스로틀된 함수
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

console.log('%c포트폴리오 페이지 로드', 'color: #E84545; font-size: 16px; font-weight: bold;');

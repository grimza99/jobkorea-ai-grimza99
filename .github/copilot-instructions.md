# Copilot 지침

## 프로젝트 소개

- 해당 프로젝트는 "검색조건설정" 단일 페이지입니다.
- 지역별 알바, 업직종별 알바 등 다양한 경로에서 공통적으로 사용되며, 사용자가 일관되고 효율적으로 검색 조건을 설정할 수 있도록 도와주는 핵심 필터링 화면입니다.

## 작업 환경

- 패키지 매니저: pnpm
- 컴파일러 도구: vite, swc
- CI/CD: vercel
- 작업 도구: tailwind, typescript, React(19v), zustand

## 기본 지침

- 모든 답변은 **한국어**로 작성합니다.
- 모든 코드는 **TypeScript**로 작성합니다.
- 들여 쓰기와 줄바꿈을 적절히 활용해서 가독성 좋게 챗 답장을 작성해줘

## 코딩 컨벤션

- 파일/폴더 네이밍: kebab-case 사용
- 컴포넌트/스토어/hook 파일은 기능별로 폴더 분리
- import 순서: 외부 라이브러리 → 내부 컴포넌트/유틸 → 스타일

## PR 및 커밋 규칙

- 커밋 메시지: [feat], [fix], [refactor], [docs], [chore] 등 태그 사용
- 태그 : 커밋 타이틀
  body : 내용이 필요할시 아래 내용

## PR 생성시 규칙

- pr 제목
  [feat], [fix], [refactor], [docs], [chore] 등 태그 사용
- e.g.) feat : pr 타이틀

## 디자인 시스템

- tailwind 커스텀 설정 및 디자인 토큰은 `src/styles` 폴더에 관리
- UI/UX 일관성 준수, 디자인 시안 참고

## 상태 관리

- zustand store는 도메인별로 분리
- persist 사용 시 별도 설명 주석 첨부

## 환경변수

- 환경변수는 `.env.local`에 작성, 민감 정보 노출 금지

## 외부 API 연동

- 통신은 기본적으로 fetch 사용, 필요시 axios
- 에러 핸들링 및 공통 response 가공 규칙 준수

---

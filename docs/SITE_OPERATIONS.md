# 사이트 운영 안내

## 구성

정적 HTML/CSS/JavaScript 기반 GitHub Pages 사이트다. npm/Flutter 빌드가 필요하지 않다. 현재 페이지·에셋은 이 Git 저장소에 포함되어 있으며 새 작업자는 이 저장소를 직접 작업공간으로 열면 된다.

| 경로 | 역할 |
| --- | --- |
| `/` / `index.html` | 여러 프로젝트를 소개하는 루트 |
| `/apps/framediary/` | FrameDiary 소개 |
| `/apps/framediary/guide/` | 사용 가이드 |
| `/apps/framediary/design/` | 화면과 디자인 |
| `/apps/framediary/design/preview/` | 18개 정적 디자인 시안 |
| `/apps/framediary/credits/` | 이미지·폰트 출처 |
| `/assets/` | 공통 및 개별 스타일/스크립트/이미지/폰트 |
| `/app-ads.txt` | AdMob 인증 레코드: 일반 사이트 작업에서 보존 |

개인정보처리방침 링크:
- https://dong0902hee.github.io/privacy-policy/
- https://dong0902hee.github.io/privacy-policy/framediary.html

Google Play 링크:
https://play.google.com/store/apps/details?id=io.github.dong0902hee.framediary

## 승인된 테마와 자산

- White/Mist, Blue `#2A6DF4`, Ink `#10203A`, Night `#0B1420`.
- Plus Jakarta Sans / Noto Sans KR: self-hosted WOFF2와 OFL 안내 보존.
- `assets/site-theme-48ea6243ad61.css`: 공통 테마.
- `assets/site-ui-f37cfd10e09d.js`: 비교 slider와 이미지 dialog.
- `assets/root-project-brand.css`: 루트 브랜드.
- `assets/root-project-preview-d6ba22da4890.css`: 루트 카드 촬영/비교 이미지 구성.
- `assets/intro-footer-card.css`, `assets/privacy-card.css`: FrameDiary 소개 하단 scoped 보정.
- `site-design/screens` 이미지는 제공된 디자인 예시다. 앱 실행 화면 갤러리의 synthetic-data 스크린샷과 혼동하지 않는다.
- 상세 provenance는 README와 credits 페이지를 따른다. 과거 원본 standalone HTML은 공개하지 않는다.

## 로컬 확인

저장소 루트에서 다음을 실행할 수 있다. 별도 dependency 설치가 필요하지 않다.

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

http://127.0.0.1:8765/ 를 연다. sandbox에서 실행한 서버가 호스트 브라우저와 통신되지 않으면 승인된 실행 경로를 사용하고, 거절 시 우회하지 않는다. 직접 시작한 서버만 작업 후 종료한다.

확인 항목:
- 루트와 각 프로젝트 링크/asset/anchor, 이미지 로딩, 접근성 alt/unique ID/페이지 H1.
- 모바일/데스크톱 줄바꿈, 이미지 clip, 가로 overflow.
- 가이드, design gallery, 비교 slider의 키보드 조작, dialog Escape/닫기.
- 허용되지 않은 개인정보/secret/빌드 파일이 diff에 없는지.
- `git diff --check`; `app-ads.txt`가 baseline과 동일한지.

기존 사이트 자동 검사 도구는 이전 앱 작업공간의 보조 도구였으며 이 저장소에 포함되지 않는다. 새 환경에서 그 절대 경로를 가정하지 않는다. 이관 시점 결과는 handoff에 기록되어 있다.

## 게시

최신 main에서 branch → 검증 → commit/push → PR → 게시 승인 범위에서 정상 merge → Pages workflow 성공 → 공개 URL reload와 화면 확인 순서다.

HTML이 바뀌어도 기존 CSS가 캐시될 수 있다. CSS 변경 시 content hash 주소 갱신을 검토한다. 과거 루트 카드가 작게 표시된 문제는 구 CSS 캐시였으며 hash 파일명으로 해결했다.

## 새 프로젝트 추가

1. 실제 공개할 프로젝트 이름, URL, 기능, 이미지 권리, 개인정보처리방침을 확인한다.
2. `apps/<slug>/`에 소개를 만들고 루트 카드·sitemap·필요한 navigation을 갱신한다.
3. 각 앱의 저장소/Play 배포와 사이트 배포를 분리한다.
4. 아직 없는 프로젝트를 작동하는 링크처럼 노출하지 않는다.
5. 개별 프로젝트 세션은 자료를 준비하고, 이 사이트 전용 세션에서 통합·게시한다.

장기적으로 이 저장소를 등록한 별도 사이트 관리 세션을 권장한다. 세션 생성/등록은 명시적 요청에 따라 수행한다.

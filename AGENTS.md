# Donghee Projects 사이트 작업 지침

## 저장소와 경계

- 이 저장소는 `dong0902hee/dong0902hee.github.io`이며 FrameDiary 앱 저장소와 독립적이다.
- 공개 주소는 https://dong0902hee.github.io/ 이다. `main`에 반영되면 GitHub Pages가 게시한다.
- 앱 코드, Android 빌드, SDK, signing, Play Console 작업은 여기서 수행하지 않는다.
- 먼저 이 파일, `README.md`, `docs/SITE_OPERATIONS.md`, `docs/SITE_HANDOFF.md`, 관련 변경 diff를 읽는다.

## Git 절차

1. 실제 working directory, remote, branch, HEAD, `git status --short --branch`를 확인한다.
2. `git fetch origin --prune` 후 실제 `origin/main` SHA를 확인한다.
3. freshly fetched `origin/main`에서 목적이 드러나는 작업 branch를 생성한다. `codex/...`는 작업 명명 관례이며 앱 branch를 뜻하지 않는다.
4. 다른 작업자의 미커밋 파일을 삭제하거나 섞어 commit하지 않는다. 예상치 못한 divergence는 보고하고 멈춘다.
5. 요청 범위만 수정하고 검증 후 commit/push, PR 생성, 생성한 PR을 현재 작업에 연결한다.
6. 사용자가 게시를 요청한 범위에서만 PR을 정상 merge한다. force push, 임의 rebase, 보호 우회는 금지한다.
7. merge만으로 게시 완료라 하지 않는다. Pages workflow 성공과 실제 공개 페이지를 확인한다.
- 소유권 경고가 있으면 ACL/소유자나 전역 Git 설정을 바꾸지 말고 필요 시 명령 한정 `-c safe.directory=<확인된 저장소>`를 사용한다.

## 디자인과 문구

- 공통 테마와 페이지별 scoped CSS를 보존한다. 모든 페이지를 오래된 generator로 재생성하지 않는다.
- 브랜드 표시는 `DH.W`, `Donghee`, `PROJECTS`이다. 사이트는 앱 외 프로젝트도 수용한다.
- 과장, 번역투, 제작자 강조, 추상적인 슬로건을 피하고 짧고 구체적인 한국어를 쓴다.
- 사용자가 승인한 카드 문구/배치와 FrameDiary 소개 페이지는 별도 요청 없이 재작성하지 않는다.
- 루트 FrameDiary 카드의 오른쪽은 소개 hero의 촬영/비교 디자인 이미지 두 장을 카드 영역에 clip한 구성이다. 큰 앱 아이콘으로 되돌리지 않는다.
- 이미지는 실제 앱 화면, 디자인 시안, 예시 자료를 정확히 구분한다. 시안을 실제 실행 화면으로 주장하지 않는다.
- 데스크톱과 모바일에서 줄바꿈, 가로 overflow, 이미지 로딩, 메뉴/버튼과 대비를 확인한다.
- 변경한 CSS/JS가 기존 주소의 캐시에 가리지 않도록 content hash 파일명을 쓰고 관련 참조를 함께 갱신한다.

## 공개 정보와 보안

- 사용자 사진/기록, 기기 식별정보, 인증 토큰, signing secret, keystore, key.properties, 빌드 artifact, raw private standalone HTML은 commit하지 않는다.
- `app-ads.txt`는 광고 인증 파일이다. 일반 디자인/문구 작업으로 수정하지 않는다.
- 개인정보처리방침은 별도 privacy-policy 프로젝트의 기존 URL을 유지한다. 마케팅 변경에 섞어 법적 본문을 수정하지 않는다.
- 사진/폰트의 라이선스와 credits를 보존한다. 출처를 추정하거나 예시 사진을 실제 사용자 데이터로 설명하지 않는다.
- 외부 tracker, analytics, remote font/runtime 의존성을 임의 추가하지 않는다.

## 검증과 보고

- diff 및 `git diff --check`, 로컬 링크/asset/anchor, H1/ID/alt, 공개 제외 파일, app-ads 보존을 확인한다.
- 브라우저는 승인된 UI 도구로 확인한다. 승인 실패를 다른 도구로 우회하지 않는다.
- `Automatic approval review failed ... capacity`는 검토 불가이며 실제 안전성 거절 또는 Git 오류로 단정하지 않는다. 서버 통신 시작/응답은 로그 근거 없이 확정하지 않는다.
- 로컬 서버/브라우저 조작/네트워크 등 필요한 권한은 지원되는 승인 절차를 쓴다. 권한 설명은 한국어로 작성한다. Full Access나 보안 설정을 임의 변경하지 않는다.
- 수동 승인 모드에서 명령이 성공한 이력은 있으나 자동 검토 서비스 복구의 증거로 삼지 않는다.
- 완료 보고: 변경 내용, 실제 검증, branch/commit/PR, Pages 배포 결과, 공개 URL, 남은 제한. 마지막에 한국 시간 `YYMMDDHHmmss`를 적는다.
- 작업 범위 완료 후 멈춘다. 다음 프로젝트 추가는 별도 요청으로 진행한다.

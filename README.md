# STAND UP 사이트 배포 안내

## 필수 파일

- `index.html` : 메인 페이지
- `artists.html` : 작가 소개 페이지 (`?admin` 관리자 모드 포함)
- `firebase-config.js` : Firebase 설정
- `standup_logo.png` : 로고 이미지

## 선택 파일

- `artists-admin.html` : 예전 관리자 페이지 (현재는 `artists.html?admin` 사용 권장)
- `artists-data.json` : Firebase 미연결 시 fallback 데이터

## 접속 주소

- 고객 페이지: `https://standupp1.github.io/standu3/artists.html`
- 관리자 페이지: `https://standupp1.github.io/standu3/artists.html?admin`
- 메인 페이지: `https://standupp1.github.io/standu3/`

## 배포 순서

1. 위 필수 파일 4개를 GitHub `standu3` 레포에 업로드/커밋
2. GitHub Pages 배포 완료 대기
3. 브라우저에서 `Ctrl+F5` 강력 새로고침

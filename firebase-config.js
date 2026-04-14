import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';

// TODO: 사용 중인 Firebase 프로젝트 설정값으로 교체하세요.
const firebaseConfig = {
  apiKey: "AIzaSyDd85t65S0F5sZSsiYCwQMSnmw0Jt3HlEg",
  authDomain: "standupp-7cfeb.firebaseapp.com",
  projectId: "standupp-7cfeb",
  storageBucket: "standupp-7cfeb.firebasestorage.app",
  messagingSenderId: "390358747706",
  appId: "1:390358747706:web:aaec773c9d95397ea78303",
};

const hasConfig = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

export const firebaseReady = hasConfig;
export const firebaseApp = hasConfig ? initializeApp(firebaseConfig) : null;

// 기존 프로젝트와 데이터 충돌을 피하기 위한 standupp3 전용 경로
export const artistsDocPath = {
  collection: 'standup_sites',
  document: 'standupp3_artists',
};

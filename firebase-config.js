import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';

// TODO: 사용 중인 Firebase 프로젝트 설정값으로 교체하세요.
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const hasConfig = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

export const firebaseReady = hasConfig;
export const firebaseApp = hasConfig ? initializeApp(firebaseConfig) : null;

// 기존 프로젝트와 데이터 충돌을 피하기 위한 standu3 전용 경로
export const artistsDocPath = {
  collection: 'standup_sites',
  document: 'standu3_artists',
};

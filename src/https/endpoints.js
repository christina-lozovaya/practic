const FIREBASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'YOUR_API_KEY';

export const SIGN_UP = `${FIREBASE_URL}/signupNewUser?key=${API_KEY}`;
export const LOG_IN = `${FIREBASE_URL}/verifyPassword?key=${API_KEY}`;

import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/security';

export const encrypt = data => {
	return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decrypt = ciphertext => {
	const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

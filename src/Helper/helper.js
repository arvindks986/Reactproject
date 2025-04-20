
import {jwtDecode} from 'jwt-decode';
//import Crypto from 'crypto';

//import cryptobrowserify from 'crypto-browserify'
 const isTokenExpired = (token) => {
    
    if (!token) return true;
    try {
        //alert(token);
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
       // alert(decodedToken.exp);    alert(currentTime);
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
  };
  const refreshTokenExpired = (token) => {
    
    if (!token) return true;
    try {
       // alert(token);
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
       // alert(decodedToken.exp);    alert(currentTime);
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
  };

  const encryptdata = async(data,secretkey) => {
    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt(data, secretkey).toString();

    // // Decrypt
    // var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    return ciphertext;
}

  export { isTokenExpired,
   refreshTokenExpired,encryptdata
  }
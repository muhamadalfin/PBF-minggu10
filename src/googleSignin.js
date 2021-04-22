import firebase from "firebase";
import { App } from "./index";

const googleSignin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // Ini memberi Anda Token Akses Google. Anda dapat menggunakannya untuk mengakses Google API.
      var token = credential.accessToken;
      // Info pengguna masuk.
      var user = result.user;

      console.log(user);
      App.setLoggedIn(true);
    })
    .catch((error) => {
      // Menangani Error di sini.
      var errorCode = error.code;
      var errorMessage = error.message;
      // Email akun pengguna yang digunakan.
      var email = error.email;
      // Tipe firebase.auth.AuthCredential yang digunakan.
      var credential = error.credential;
      
    });
};

export default googleSignin;
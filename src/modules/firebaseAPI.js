import * as firebase from 'firebase';


// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });

export const createUser = (email, password) => {
    console.log('createUser has been called');
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => console.log('createUser error: ', error));
}

export const signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => console.log('createUser error: ', error));
}

export const logoutUser = () => {
    firebase.auth().signOut();
}

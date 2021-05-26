import firebase from 'gatsby-plugin-firebase';

//**  signin with Google **//
const singInWithGoogleProvider = new firebase.auth.GoogleAuthProvider();

export const pSingInWithGoogle = _ => new Promise((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then( _ => {
            firebase.auth().signInWithPopup(singInWithGoogleProvider)
                    .then( res => resolve(res) )
                    .catch( err => reject(err) );
        })
});

export const singInWithGoogle = _ => new Promise((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then( _ => {
            firebase.auth().signInWithPopup(singInWithGoogleProvider)
                    .then( res => resolve(res) )
                    .catch( err => reject(err) );
        });
});

//**  signin **//
export const pSignIn = ( email, password ) => new Promise((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then( _ => {
            firebase.auth().signInWithEmailAndPassword( email, password )
                .then( res => resolve(res))
                .catch( err =>  reject(err));
        })
});

export const signIn = ( email, password ) => new Promise((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then( _ => {
            firebase.auth().signInWithEmailAndPassword( email, password )
                .then( res => resolve(res))
                .catch( err =>  reject(err));
            });
});

//**  signup **//
export const pSignUp = ( email, password ) => new Promise(( resolve, reject ) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then( _ => {            
            firebase.auth().createUserWithEmailAndPassword( email, password )
                .then( user => resolve(user))
                .catch( err => reject(err));
        })
});

export const signUp = ( email, password ) => new Promise(( resolve, reject ) => {        
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then( _ => {
            firebase.auth().createUserWithEmailAndPassword( email, password )
                .then( user => resolve(user))
                .catch( err => reject(err));
            });
});


//**  sign out **//
export const signOut = _ => new Promise(( resolve, reject ) => {
    firebase.auth().signOut()
        .then( _ => resolve(null))
        .catch( err => reject(err));
});

export const getUserPromise = _ => new Promise(( resolve ) => {
    firebase.auth().onAuthStateChanged(
        user => resolve(user)
    )
});

export const getUser = _ => firebase.auth().currentUser;
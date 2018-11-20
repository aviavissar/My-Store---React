
import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login=(uid)=>({
    type:'LOGIN',
    uid
});

export const startLogin=()=>{
    return()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout=()=>({
    type:'LOGUOT'
})

export const startLogout=()=>{
    return()=>{
        return firebase.auth().signOut();
    };
};
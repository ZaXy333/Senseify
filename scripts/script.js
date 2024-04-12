
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCtfDjjztcg1lusLaB2epzNtGNrNS9EK0Q",
  authDomain: "hackemotion-8d681.firebaseapp.com",
  projectId: "hackemotion-8d681",
  storageBucket: "hackemotion-8d681.appspot.com",
  messagingSenderId: "654577062219",
  appId: "1:654577062219:web:9fdd0a8aa0ba7a879ed8ce",
  measurementId: "G-VR0HN91DDZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export function register(app,email,password){
    const auth = getAuth(app);
    var uid;
    // const analytics = getAnalytics();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        uid = user.uid;
        console.log(user.uid);
        insert(db,"User",uid,"birthYear","sex","placeOfResidance");
        // setUserId(analytics,id);
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
        // ..
    });
    
}

// function new_user(app,email,password,birthYear,sex,placeOfResidance){
//     const dbRef = ref(db);
    
//     get(child(dbRef, "UserList/"+ ))
// }
export function insert(db,cl,uid,...fields){ // usunalem email i password
    const records = {};
    
    for (let i = 0; i < fields.length; i++) {
        console.log(fields[i]);
        records[fields[i]] = document.querySelector(`.${fields[i]}`).value;
    }
    console.log(uid);
    records["uid"] = uid;

    console.log(records);
    addDoc(collection(db,cl),{
        records
    })
    .then(docRef => {
    console.log(docRef.id);
    // register(app, email.value,password.value,docRef.id);
})
    .catch(error => {
    console.log(error);
})
}
export function fun(){
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const rpassword = document.querySelector(".rpassword");
    const error = document.querySelector(".error1");
    
    if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        error.innerHTML = "Prosze podać prawidłowy email";
    }
    if(password.value != rpassword.value){
        error.innerHTML="Hasła nie są takie same prosze wprowadzic je ponownie";
    }
    else{
        register(app, email.value,password.value);      
    }
}
export function log_val(){
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const error = document.querySelector(".error1");
    
    log_in(email,password,error);
}
export function log_in(email,password,error){
    const auth = getAuth(app);
    

        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          window.location = "../index.html"
          console.log(user);
        })
    
    .catch((error) => {

        console.log(error.code);
        console.log(error.message);
    });
}

export async function checkAuthState(){
    const auth = getAuth(app);
    const a = await onAuthStateChanged(auth, user => {
        if(user){
            document.querySelector(".buttonSign").style.display ="none"
            document.querySelector(".buttonSign_out").style.display ="block"
            document.querySelector(".quiz").style.display = "block"
        }else{
            document.querySelector(".buttonSign").style.display ="block"
            document.querySelector(".buttonSign_out").style.display = "none"
            document.querySelector(".quiz").style.display = "none"
        }
        
    })

}

export function checkUser(){
    const auth = getAuth(app);
    return auth.currentUser;
}

export function log_out(){
    const auth = getAuth(app);
    signOut(auth);
}
function local_insert(db,cl,...fields){ 
    const records = {};
    
    for (let i = 0; i <2; i++) {
        
        records["emotions"] = "Angry"
        records["filename"] = "emocje2/3/" + i
        records["imageCategory"] = "Face"
        records["Type"] = "image"
    
    

    console.log(records);
    addDoc(collection(db,cl),{
        records
    })
    .then(docRef => {
    console.log(docRef.id);S
})
    .catch(error => {
    console.log(error);
})
}
}
export function add_to_database(){
    
        local_insert(db,"resource","emotions","filename","imageCategory","Type")
    
}
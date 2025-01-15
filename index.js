/* === Imports === */

/* === Firebase Setup === */
const firebaseConfig = {

    apiKey: "AIzaSyBi8FVXfqJ5GqQ058HQ8gwVjhf35BQjXx0",

    authDomain: "tech-ticketing-app-d0014.firebaseapp.com",

    databaseURL: "https://tech-ticketing-app-d0014-default-rtdb.firebaseio.com",

    projectId: "tech-ticketing-app-d0014",

    storageBucket: "tech-ticketing-app-d0014.firebasestorage.app",

    messagingSenderId: "603043214296",

    appId: "1:603043214296:web:79b5a4aa1e2de615d9b8ad"
};

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}
function showElement(element) {
    element.style.display = "flex"
}
function hideElement(element) {
    element.style.display = "none"
}
async function addPostToDB(postBody, user) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            body: postBody,
            uid: user.uid
        })
        console.log("Document written with ID: ", docRef.id)
    } catch (error) {
        console.error(error.message)
    }
 
 
 }
 
//credit: coursera
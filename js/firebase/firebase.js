// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    query,
    where,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm7tKa_SYSCBcrxz9MtRxNRjnvp7BJmkg",
    authDomain: "cit4nd.firebaseapp.com",
    projectId: "cit4nd",
    storageBucket: "cit4nd.appspot.com",
    messagingSenderId: "1001089744577",
    appId: "1:1001089744577:web:6700c2df94c6a69d98de40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export async function checkGmail(gmail) {
    try {
        const q = query(
            collection(db, "allowed-users"),
            where("gmail", "==", gmail)
            );

        const querySnapshot = await getDocs(q);

        return querySnapshot.size > 0;
    }
    catch (error) {
        console.log("Error al verificar el correo electrónico en la colección:", error);
        return false;
    }
}
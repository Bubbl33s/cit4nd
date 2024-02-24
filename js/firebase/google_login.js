import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    auth,
    checkGmail
} from "./firebase.js";

const googleButton = document.getElementById("google-login");

googleButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();

    // Forzar la selección de cuenta
    provider.setCustomParameters({
        prompt: 'select_account',
    });

    try {
        const credentials = await signInWithPopup(auth, provider);
        const user = credentials.user;

        const validGmail = await checkGmail(user.email);

        if (validGmail) {
            console.log("Gmail autorizado");
        }
        else {
            await auth.signOut();
            // console.log("Gmail no autorizado");
            await user.delete();
            // console.log("Usuario eliminado");
        }
    }
    catch (error) {
        console.log(error);
    }
});

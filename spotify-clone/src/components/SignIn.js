import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("Attempting to sign in with:", email, password);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Sign-in successful:", userCredential);
        alert("Successfully signed in!");
    } catch (err) {
        console.error("Error during sign-in:", err.message);
        setError(err.message); // Display the error to the user
    }
};
console.log("Email:", email);
console.log("Password:", password);

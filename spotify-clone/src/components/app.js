import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import SignIn from "./components/SignIn";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed:", currentUser);
            setUser(currentUser); // Update user state
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    return (
        <div>
            {user ? <h1>Welcome, {user.email}</h1> : <SignIn />}
        </div>
    );
};

export default App;

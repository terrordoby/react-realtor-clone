import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import {FcGoogle} from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();

  async function handleGoogleClick() {
    try {

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Verificar usuário
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");

    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="flex items-center justify-center uppercase text-sm py-3 px-7
        w-full text-white font-medium gap-1 bg-red-600 hover:bg-red-800
        transition duration-200 shadow-md active:bg-red-900
        rounded active:shadow-lg">
        <FcGoogle className="text-2xl bg-white rounded-full" />
        Continue with google
      </button>
    </div>
  );
};

export default OAuth;

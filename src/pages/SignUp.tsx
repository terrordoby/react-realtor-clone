/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent, useState } from "react";
import {AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase.config";
import { doc, FieldValue, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormDataSignUp {
  name: string;
  email: string;
  password?: string;
  timestamp?: FieldValue
}

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();


  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {

      // Criar credenciais do firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Salvar nome de usuário
      updateProfile(auth.currentUser!, {
        displayName: name,
      });

      // Obter dados do usuário
      const user =  userCredential.user;
      const formDataCopy: FormDataSignUp = {name, email, password};

      // Remover Senha do usuário
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();


      // Salvar dados do usuário no Banco
      await setDoc(doc(db, "users",user.uid),formDataCopy);
      toast.success("Sign up was successful");
      navigate("/");

    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-5 font-bold">Sign Up</h1>
      <div className="flex max-w-6xl mx-auto flex-wrap justify-center
      items-center px-6 py-12">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" alt="" />
        </div>
        <div className="md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit} action="">
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 text-xl rounded text-gray-700 bg-white
              border-gray-300 transition ease-in-out"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 text-xl rounded text-gray-700 bg-white
              border-gray-300 transition ease-in-out"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email adress"
              />
            </div>
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl rounded text-gray-700 bg-white
              border-gray-300 transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {showPassword ?
                <AiFillEyeInvisible
                  className="absolute top-3 right-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
                : <AiFillEye
                  className="absolute top-3 right-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                /> }
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">Have account ?
                <Link
                  className="text-red-500 hover:text-red-700 ml-1"
                  to="/sign-in">Sign In</Link>
              </p>
              <Link
                className="text-blue-500 hover:text-blue-700 ml-1"
                to="/forgot-password">Forgot password ?</Link>
            </div>
            <button
              className="bg-blue-600 w-full text-white uppercase py-3 px-7 rounded text-sm
              hover:bg-blue-700 transition duration-200 shadow-sm font-medium
               active:bg-blue-800"
              type="submit">
                Sign Up
            </button>
            <div
              className="flex items-center justify-center my-4 before:border-t
              before:flex-1 before:border-gray-300 after:border-t
              after:flex-1 after:border-gray-300">
              <p
                className="text-sm font-semibold mx-4">
                  OR
              </p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

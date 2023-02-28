import { getAuth, updateProfile, User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

const Profile = () => {
  const auth =  getAuth();
  const [name, setName] = useState<string | undefined >(auth.currentUser?.displayName as string | undefined);
  const [email, setEmail] = useState<string | undefined>(auth.currentUser?.email as string | undefined);
  const [changeDetails, setChangeDetails] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleLogout() {
    auth.signOut();
    navigate("/");
  }

  async function handleSubmit() {
    try {
      if (auth.currentUser?.displayName !== name) {
        await updateProfile(auth.currentUser as User, {
          displayName: name
        });

        const docRef = doc(db,"users", auth.currentUser?.uid as string);
        await updateDoc(docRef, {
          name
        });

        toast.success("Profile datails updated");
      }
      toast.info("Profile datails is not updated");

    } catch {
      toast.error("Could not update profile details");
    }
  }


  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>
          {/* input Nome */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!changeDetails}
            className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition ease-in-out $${changeDetails && "bg-red-600 text-red-400"}`}
          />
          <input
            type="text"
            id="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            className="w-full mb-6 px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded
            transition ease-in-out"
          />
          <div
            className="flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg">
            <p className="flex items-center">Do you want to change your name ?
              <span
                className="text-red-600 hover:text-red-700 transition ease-in-out duration-150
                ml-1 cursor-pointer"
                onClick={() => {
                  changeDetails && handleSubmit();
                  setChangeDetails((prevState) => !prevState);}
                }
              >
                {changeDetails ? "Apply change" : "Edit"}
              </span>
            </p>
            <p
              className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-150"
              onClick={handleLogout}>
                Sign Out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;

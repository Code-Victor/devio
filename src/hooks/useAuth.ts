import * as React from "react";
import { account, client, databases } from "../../appwrite.config";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import type { Models } from "appwrite";

function useAuth() {
  const [user, setUser] =
    React.useState<null | Models.Account<Models.Preferences>>(null);
  const navigate = useNavigate();

  const signup = async (email: string, password: string, name: string) => {
    try {
      const promise = await account.create(uuidv4(), email, password, name);
      const response = await promise;
      console.log(response);
      navigate("/login"); //success
    } catch (error) {
      console.log(error); //failure
    }
  };
  const login =  (email: string, password: string) => {
    const promise = account.createEmailSession(email, password);
    promise.then(
      function (response) {
        navigate("/home"); //success
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  const getCurrentUser = async () => {
    try {
      const promise = await account.get();
      const response = await promise;
      console.log(response);
      return response; //success
    } catch (error) {
      console.log(error); //failure
    }
  };
  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      user ? setUser(user) : null; //set user if user is logged in
    };
    fetchUser();
  }, []);
  const logOut = async () => {
    try {
      const promise = await account.deleteSession("current");
      const response = await promise;
      console.log(response);
      navigate("/login"); //success
    } catch (error) {
      console.log(error); //failure
    }
  };
  return {
    signup,
    login,
    logOut,
    user,
  };
}

export default useAuth;

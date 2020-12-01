import { FirebaseContext } from "../services";
import React from "react";
import { navigate } from "gatsby";

const Login: React.FC = () => {
  const { firebase, authToken, setAuthToken } = React.useContext(
    FirebaseContext
  );
  console.log(authToken, "auth");
  console.log(firebase, "firebase");
  // console.log(isInitialized, "initialized");

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSignupAndLogin = React.useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      let authError: any | undefined;

      try {
        event.preventDefault();
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (user) {
          console.log(user, "user");
          const { refreshToken } = user;
          setAuthToken(refreshToken);
          window.sessionStorage.setItem("user", JSON.stringify(authToken));
          console.log("now");
        }
        // If there is an error set the authError to the new error
      } catch (error) {
        authError = error;
      } finally {
        // If there is an authError and the code is that the email is already in user try to sign the user
        //  in with the email and password instead.
        if (authError?.code === "auth/email-already-in-use") {
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          // We've been here before… set the authToken if there is a user.
          if (user) {
            const { refreshToken } = user;
            setAuthToken(refreshToken);
          }
        }
      }
    },
    [email, password, firebase, setAuthToken]
  );
  // Effect that will reroute the user to the index.tsx file if there is an authToken
  React.useEffect(() => {
    if (authToken) {
      navigate("/");
    }
  }, [authToken]);
  return (
    <>
      <div className="login-page-main">
        <div className="login-page-primary">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Email"
              id="email"
              aria-describedby="email-helper"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <input
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            login
            <button
              type="submit"
              style={{ marginTop: "10px" }}
              onClick={handleSignupAndLogin}
            >
              Login / Sign Up
            </button>
            {/* <button style={{ marginTop: "10px" }} onClick={handleGoogleAuth}>
          Login With Google
        </button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
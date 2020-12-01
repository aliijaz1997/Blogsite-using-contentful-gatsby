import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="login-page-div">
      <Layout>
      <Link to = "/blog">Return back to blog page</Link>
        <Login />
      </Layout>
    </div>
  );
};
export default LoginPage;
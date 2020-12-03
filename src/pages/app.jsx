import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"
import MainContainer from "../components/mainandcombinedcomponents"
const App  = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/profile" component={MainContainer} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
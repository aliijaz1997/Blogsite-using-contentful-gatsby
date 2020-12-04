import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
const App  = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
import React from "react"
import Layout from "../components/layout"
import InstructionOnHome from "../components/instructiononhome"
import MainContainer from "../components/mainandcombinedcomponents"
import Characteristic from "../components/characteristic"
const IndexPage = () => (
  <Layout>
      <InstructionOnHome />
      <MainContainer/>
      <Characteristic/>
  </Layout>
)

export default IndexPage

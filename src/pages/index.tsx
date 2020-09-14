import React from "react"

import { Hover } from "../components"
import { MainLayout } from "../layouts"

const Page: React.FC = () => (
  <MainLayout>
    <h1>
      <Hover mode="rightLeft">Hallo zusammen</Hover>
    </h1>
  </MainLayout>
)

export default Page

import React from "react"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Ausbildung">
      <Heading>Ausbildung</Heading>
    </MainLayout>
  )
}

export default Page

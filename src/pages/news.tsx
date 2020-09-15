import React from "react"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Neuigkeiten">
      <Heading>Neuigkeiten</Heading>
    </MainLayout>
  )
}

export default Page

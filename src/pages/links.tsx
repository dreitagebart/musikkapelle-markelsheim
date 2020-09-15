import React from "react"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Links">
      <Heading>Links</Heading>
    </MainLayout>
  )
}

export default Page

import React from "react"

import { Heading } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Bilder">
      <Heading>Bilder</Heading>
    </MainLayout>
  )
}

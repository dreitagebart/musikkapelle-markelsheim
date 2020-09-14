import React from "react"

import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Neuigkeiten">
      <h1>Neuigkeiten</h1>
    </MainLayout>
  )
}

export default Page

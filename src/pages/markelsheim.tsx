import React from "react"

import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Markelsheim">
      <h1>Markelsheim</h1>
    </MainLayout>
  )
}

export default Page

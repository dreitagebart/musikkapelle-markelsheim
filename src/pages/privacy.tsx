import React from "react"

import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Datenschutz">
      <h1>Datenschutz</h1>
    </MainLayout>
  )
}

export default Page

import React from "react"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Mitglied werden">
      <h1>Mitglieder</h1>
    </MainLayout>
  )
}

export default Page

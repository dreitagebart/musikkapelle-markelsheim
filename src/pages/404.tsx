import React from "react"

import { Heading, Paragraph } from "../components"
import { MainLayout } from "../layouts"

const NotFoundPage: React.FC = () => (
  <MainLayout title="Seite wurde nicht gefunden">
    <Heading>NOT FOUND</Heading>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </MainLayout>
)

export default NotFoundPage

import React from "react"

import { MainLayout } from "../layouts"
import { SEO } from "../components"

const NotFoundPage: React.FC = () => (
  <MainLayout title="Seite wurde nicht gefunden">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage

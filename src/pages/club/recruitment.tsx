import React from "react"
import { Link } from "gatsby"

import { Heading, Paragraph } from "../../components"
import { ClubLayout } from "../../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <ClubLayout title="Ausbildung">
      <Heading>Ausbildung</Heading>
      <Paragraph>
        Der Nachwuchs ist unsere Zukunft und deswegen bilden wir auch gerne
        verschiedene Instrumente über unsere Musikkapelle aus. Die Ausbildung
        erfolgt über Musikerinnen und Musiker aus dem Verein. Ziel ist die
        Integration in die Kapelle. Außerdem bieten wir dir ein Leihinstrument
        von unserem Verein für die Ausbildung, soweit dies vorhanden ist, an.
      </Paragraph>
      <Paragraph>
        Bereits während der Ausbildung ist es möglich im Jugendorchester
        mitzuspielen. Dort absolvieren die Kinder und Jugendlichen bereits erste
        Auftritte und werden in das Vereinsleben integriert.
      </Paragraph>
      <Paragraph>
        Solltest du Interesse an einer Ausbildung haben, so wende dich bitte an{" "}
        <Link to="/contact">Verena Hüttl</Link>.
      </Paragraph>
    </ClubLayout>
  )
}

export default Page

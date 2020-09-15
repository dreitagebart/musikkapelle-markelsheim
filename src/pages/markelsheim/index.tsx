import React from "react"

import { Blockquote, Heading, Paragraph } from "../../components"
import { MarkelsheimLayout } from "../../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MarkelsheimLayout title="Region">
      <Heading>Region</Heading>
      <Paragraph>
        An der "Romantischen Straße", im Herzen des lieblichen Taubertals, liegt
        unsere schöne Ortschaft Markelsheim. Idyllisch gelegen zwischen
        ausgedehnten Weinbergen, Feldern und Wiesen, am Zusammenfluß von
        Lochbach und Tauber. Markelsheim ist mit ca. 2000 Einwohnern größter
        Stadtteil vom weltbekannten Kur- und Badeort Bad Mergentheim. Brunnen am
        Marktplatz Der Charakter und Idylle eines fränkischen Weindorfes ist
        trotz der Ortssanierung geblieben. Zentraler Punkt ist der Marktplatz.
        Umrahmt von dem hübschen Rathaus, den Gasthäusern, der alten
        Dorfschmiede bietet sich dem Gast ein malerisches Bild.
      </Paragraph>
      <Paragraph>
        Stolz ragt auf dem nahen Engelsberg der alte Wehrturm mit seinen Resten
        der Befestigung und der Giebelfassade des Schulhauses ins Tal und weist
        auf die geschichtliche Vergangenheit von Markelsheim hin.
      </Paragraph>
      <Paragraph>
        Bereits 1054 fand Markelsheim eine erste urkundliche Erwähnung. Vom
        15.Jahrhundert an zählte der Ort fast 400 Jahre lang zum Besitz des
        Deutschen Ordens, anschließend zur Krone Württembergs. Seit 1972 sind
        wir Ortsteil der großen Kreisstadt Bad Mergentheim.
      </Paragraph>
      <Paragraph>
        Dominierend ist der Weinbau. Schon zur Zeit Karls des Großen wurden im
        Taubertal Reben angepflanzt Ein Dokument aus dem Jahre 1096 weist auch
        auf den Weinbau in Markelsheim hin.
      </Paragraph>
      <Paragraph>
        Wirtschaftlicher und geselliger Mittelpunkt der Gemeinde ist die 1898
        gegründete Weingärtnergenossenschaft. Typisch für die Gegend ist ein
        herzhafter, fränkischer Weißwein, der sich großer Beliebtheit erfreut.
      </Paragraph>
      <Paragraph>
        Mit seiner gepflegten Gastlichkeit, seinen freundlichen Menschen und
        malerischen Häusern bietet der Wein- und Erholungsort Markelsheim seinen
        Gästen wirkliche Erholung und erlebnisreiche Stunden in unverbrauchter
        Natur.
      </Paragraph>
      <Blockquote>
        Mehr über Markelsheim erfahren Sie unter{" "}
        <a href="http://www.markelsheim.de" target="_blank">
          www.markelsheim.de
        </a>
      </Blockquote>
    </MarkelsheimLayout>
  )
}

export default Page

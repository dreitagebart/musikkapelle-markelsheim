import React from "react"

import { Blockquote, Heading, Paragraph, Text } from "../../components"
import { ClubLayout } from "../../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <ClubLayout title="Über uns">
      <Heading>Über uns</Heading>
      <Blockquote>
        Unsere Musikkapelle zählt stolze 200 Mitglieder mit 40 aktiven Musikern.
      </Blockquote>
      <Paragraph>
        Bei durchschnittlich <Text bold>50 Auftritten im Jahr</Text> findet
        unsere harte Probenarbeit große Anerkennung und dies nicht nur in
        unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne unsere
        Musik stattfindet.
      </Paragraph>
      <Paragraph>
        Die Proben finden jeden Mittwoch im Haus der Vereine in Markelsheim
        statt. Von jeweils <b>20:00</b> bis <b>22:00 Uhr</b> bereiten wir uns
        dort zum Beispiel auf die anstehenden Ständchen , Feste und Konzerte
        vor. Uns ist es wichtig neben den Noten aus dem Repertoire auch immer
        wieder neue Stücke mit aufzunehmen und diese einzustudieren
      </Paragraph>
      <Paragraph>
        <Text bold>
          Typisch für unsere Musikkapelle ist die konzertante Blasmusik
        </Text>
        . Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen auf
        unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{" "}
        <Text bold>das Weihnachtskonzert in Markelsheim</Text>.
      </Paragraph>
    </ClubLayout>
  )
}

export default Page

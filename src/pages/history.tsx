import React from "react"

import { Blockquote, Heading, Paragraph, Text } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Geschichte">
      <Heading>Geschichte</Heading>
      <h2>Die Geschichte der Musikkapelle Markelsheim</h2>
      <Paragraph>
        Im Januar 1964 fanden sich 10 musikbegeisterte junge Männer aus
        Markelsheim zusammen, um gemeinsam zu musizieren. Zunächst probten diese
        abwechselnd in den Häusern, später fand die Kapelle im Zehntkeller ein
        Zuhause. Geleitet wurde die Kapelle zu dieser Zeit von Rudolf Zuber. Die
        Musikkapelle Markelsheim wurde im Dezember 1968 gegründet und 1972 ins
        Vereinsregister eingetragen. Seit 1969 signalisieren wir Musikanten
        durch unsere Uniform auch nach außen unsere Zusammengehörigkeit. Der
        erste Aufschwung unserer Kapelle führte dazu, dass immer mehr
        Jugendliche ihre Liebe zur Blasmusik entdeckten.
      </Paragraph>
      <Blockquote>
        Heute zählt unsere Musikkapelle stolze 200 Mitglieder mit rund 40
        aktiven Musikern.
      </Blockquote>
      <Paragraph>
        1975 übernahm <Text bold>Gerhard Landkammer</Text> den Dirigentenstab.
        Intensive Probenarbeit brachte unserer Kapelle von Anfang an einen
        steilen musikalischen Aufstieg. Inzwischen erreichen wir bereits
        Oberstufenniveau.
      </Paragraph>
      <Paragraph>
        Bei durchschnittlich <Text bold>50 Auftritten im Jahr</Text> findet
        unsere harte Probenarbeit große Anerkennung und dies nicht nur in
        unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne unsere
        Musik stattfindet.
      </Paragraph>
      <Paragraph>
        <Text bold>
          Typisch für unsere Musikkapelle ist die konzertante Blasmusik
        </Text>
        . Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen auf
        unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{" "}
        <Text bold>das Weihnachtskonzert in Markelsheim</Text>.
      </Paragraph>
      <Paragraph>
        Auftritte in{" "}
        <Text bold>
          Berlin, im kurhessischen Bergland, im Stuttgarter Neckarstadion, in
          Digne (Südfrankreich) und Prag
        </Text>{" "}
        sind Glanzpunkte unseres Vereinslebens.
      </Paragraph>
      <Paragraph>
        Selbst im Süddeutschen Rundfunk sowie anderen Radioanstalten und sogar
        im Fernsehen durften wir bereits unser Können unter Beweis stellen. Ein
        Meilenstein für unseren Verein war die Teilnahme am 8. Internationalen
        Wettbewerb der Blaskapellen in Brünn, in der Tschechoslowakei.{" "}
        <Text bold>Dort wurden wir mit einem Sonderpokal ausgezeichnet</Text>.
      </Paragraph>
      <Paragraph>
        Nach fast 44 Jahren übergibt{" "}
        <Text bold>Dirigent Gerhard Landkammer</Text> seinen Dirigentenstab an{" "}
        <Text bold>Stephan Deppisch</Text>.
      </Paragraph>
    </MainLayout>
  )
}

export default Page

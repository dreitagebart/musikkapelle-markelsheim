import React from "react"

import { Blockquote, Heading, Paragraph } from "../components"
import { MainLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <MainLayout title="Impressum">
      <Heading>Impressum</Heading>
      <h2>Haftung für Inhalte</h2>
      <Paragraph>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </Paragraph>
      <h2>Haftung für Links</h2>
      <Paragraph>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        Urheberrecht Die durch die Seitenbetreiber erstellten Inhalte und Werke
        auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </Paragraph>
      <h2>Datenschutz</h2>
      <Paragraph>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
        der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und
        Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </Paragraph>
      <h2>Kontaktanfragen / Kontaktmöglichkeit</h2>
      <Paragraph>
        Sofern Sie per Kontaktformular oder e-Mail mit uns in Kontakt treten,
        werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
        Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
        Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung
        können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
      </Paragraph>
      <Paragraph>
        <Blockquote>
          Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b)
          DSGVO.
        </Blockquote>
      </Paragraph>
      <Paragraph>
        Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
        worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
        Vertragsabwicklung.
      </Paragraph>
    </MainLayout>
  )
}

export default Page

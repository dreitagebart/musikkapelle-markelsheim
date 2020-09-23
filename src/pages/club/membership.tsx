import React from "react"
import { Link } from "gatsby"

import { Blockquote, Heading, Paragraph } from "../../components"
import { ClubLayout } from "../../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <ClubLayout title="Mitgliedschaft">
      <Heading>Mitgliedschaft</Heading>
      <h2>Aktive Mitgliedschaft</h2>
      <Paragraph>
        Du spielst bereits ein Blas- bzw. Schlaginstrument? Du bist auf der
        Suche nach einer guten Musikkapelle und guten Gemeinschaft?
      </Paragraph>
      <Paragraph>
        Die Musikkapelle Markelsheim freut sich jederzeit über neue aktive
        Mitglieder - egal welches Instrument. Natürlich kannst du auch jederzeit
        mal unverbindlich in den Proben reinschnuppern.
      </Paragraph>
      <Paragraph>
        Du spielst noch kein Instrument, aber du möchtest gerne eines erlernen?
        Hier gibt es in unserem Verein auch viele Möglichkeiten. Sprich uns
        einfach an!
      </Paragraph>
      <Paragraph>
        Wende dich am besten an unsere Vorsitzende{" "}
        <Link to="/contact">Verena Hüttl</Link>.
      </Paragraph>
      <Paragraph>Wir freuen uns auf dich!</Paragraph>
      <br />
      <h2>Passive Mitgliedschaft</h2>
      <Paragraph>
        Sie sind Musikliebhaber spielen aber selbst kein Instrument? Freuen auch
        Sie sich über den Beitrag der Musikkapelle zum kulturellen Leben in
        Markelsheim? Ihnen gefällt unsere Musik, Sie finden unseren Verein
        sympathisch oder fühlen sich unserer Kapelle verbunden? Sie sind der
        Meinung, dass es die Blasmusik verdient hat, gefördert zu werden? Wollen
        auch Sie die Musikkapelle Markelsheim in seinem Wirken, sowie seiner
        Jugendarbeit unterstützen?
      </Paragraph>
      <Paragraph>
        Dann freuen wir uns sehr, Sie als passives Mitglied in der Musikkapelle
        Markelsheim begrüßen zu dürfen.
      </Paragraph>
      <Blockquote>
        Musik lebt durch den Menschen...
        <br />
        ... jeder Mensch braucht Musik...
        <br />
        ... und wir brauchen Sie!
      </Blockquote>
      <Paragraph>
        Für eine passive Mitgliedschaft wende dich einfach an{" "}
        <Link to="/contact">unsere Ansprechpartner</Link> oder nutze das
        untenstehende Beitrittsformular zum Herunterladen.
      </Paragraph>
      <div className="u-center">
        <div className="u-text-center">
          <a href="http://mindreport.com/mkm/wp-content/uploads/2019/02/MKM_beitritt.pdf">
            <div className="card" style={{ padding: 14, width: 400 }}>
              <div className="tile">
                <div className="tile-icon">
                  <i className="far fa-file-pdf fa-4x fa-fw" />
                </div>
                <div className="tile-container">
                  <p className="tile-title no-margin">
                    <b>MKM_beitritt.pdf</b>
                  </p>
                  <p className="tile-subtitle no-margin">
                    Beitritterklärung für die Musikkapelle Markelsheim
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </ClubLayout>
  )
}

export default Page

import { Box } from "@dreitagebart/box"
import React, { useState } from "react"

import {
  Form,
  Submit,
  Label,
  TextArea,
  TextInput,
  Field,
  Paragraph,
  Text,
  Heading
} from "../components"
import { MainLayout } from "../layouts"

interface Props {}

interface ContactForm {
  name: string
  mail: string
  phone: string
  message: string
}

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Page: React.FC<Props> = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    mail: "",
    phone: "",
    message: ""
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    event.preventDefault()
  }

  return (
    <MainLayout title="Kontakt">
      <Heading>Kontakt</Heading>
      <Paragraph>
        <Text bold>Musikkapelle Markelsheim</Text>&nbsp;e.&nbsp;V.<br></br>
        Frau Verena Hüttl<br></br>
        Schwarzrieslingstraße 3<br></br>
        97980&nbsp;Markelsheim
      </Paragraph>
      <Paragraph>
        <Text bold>
          Wenn du mit uns Kontakt aufnehmen möchtest, dann verwende doch bitte
          untenstehendes Kontaktformular
        </Text>
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>
            <Box>Vor- und Zuname</Box>
            <Box>
              <TextInput
                name="name"
                value={form.name}
                onChange={handleChange}
              ></TextInput>
            </Box>
          </Label>
        </Field>
        <Field>
          <Label>
            <Box>eMail Adresse</Box>
            <TextInput
              name="mail"
              value={form.mail}
              onChange={handleChange}
            ></TextInput>
          </Label>
        </Field>
        <Field>
          <Label>
            <Box>Telefon</Box>
            <TextInput
              name="phone"
              value={form.phone}
              onChange={handleChange}
            ></TextInput>
          </Label>
        </Field>
        <Field>
          <Label>
            <Box>Nachricht</Box>
            <TextArea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></TextArea>
          </Label>
        </Field>
        <Field>
          <Submit>Senden</Submit>
        </Field>
      </Form>
    </MainLayout>
  )
}

export default Page

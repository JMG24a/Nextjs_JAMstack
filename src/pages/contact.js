import { useRef, useState } from "react";
import { H2, Form, Label, Input, Textarea, Button } from "../styles/components/contact"
import { Alert } from "../components/Alert";

export default function Contact() {
  const formRef = useRef(null)
  const [alert, setAlert ] = useState({
    value: false,
    text: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      subject: formRef.current.subject.value.toLowerCase(),
      email: formRef.current.email.value,
      body: formRef.current.body.value,
    }

    fetch(`${process.env.NEXT_API}/email`,{
    method: 'POST',
    headers: {
      'content' : 'application/json'
    },
    body: JSON.stringify(data)
   })
    .then((res)=> res.json())
    .then(res => {
      if(res.status === true){
        setAlert({
          value: true,
          text: 'Mensaje Enviado Correctamente'
        })
      }else{
        setAlert({
          value: true,
          text: 'El Mensaje No Pudo ser Enviado'
        })
      }
    })
    .catch(e => {
      setAlert({
        value: true,
        text: 'Error de conexión'
      })
    })
  }

  return (
    <>
      <div>
        <H2>Enviame un Mensaje:</H2>
        <Form ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
          <Label htmlFor="subject">Asunto:</Label>
          <Input type="text" name="subject" id="subject"/>

          <Label htmlFor="email">Correo:</Label>
          <Input type="email" name="email" id="email"/>

          <Label htmlFor="body">Message:</Label>
          <Textarea type="text" name="body" id="body"/>

          <Button type="submit">Enviar</Button>
        </Form>
        {!!alert.value && <Alert text={alert.text} setAlert={setAlert} />}
      </div>

    </>
  )
}

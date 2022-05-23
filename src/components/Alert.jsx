import { useEffect } from "react";
import { Alert as ALERT, Message } from '../styles/components/utils'

function Alert({text, setAlert}) {
  useEffect(()=>{
    setTimeout(()=>{
      setAlert({
        value: false,
        text: ''
      })
    },8000)
  })

  return (
    <>
      {text.length > 0 ?
        <ALERT>
          <Message>{text}</Message>
        </ALERT>
        :
        <></>
      }
    </>

  )
}

export {Alert}

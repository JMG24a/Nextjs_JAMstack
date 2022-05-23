import { useRef, useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { ActiveAdmin, AdminDashboard, Input, Select , Button } from "../styles/components/admin";
import { Alert } from "./Alert";

function AdminActive({setIsAdmin}) {
  const formRef = useRef(null)
  const [alert, setAlert ] = useState({
    value: false,
    text: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      slug: formRef.current.name.value.toLowerCase(),
      type: formRef.current.type.value.toLowerCase(),
      id: formRef.current.id.value,
      password: formRef.current.password.value,
    }

    fetch('http://localhost:3000/api/notion',{
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
            text: 'Blog Sincronizado Correctamente'
          })
        }else{
          setAlert({
            value: true,
            text: 'El Blog No pudo ser sincronizado'
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
      <ActiveAdmin>
        <AiFillFolderOpen
          size={'30px'}
          cursor={'pointer'}
          onClick={()=>setIsAdmin(false)}
        />
        <p style={{fontSize: '1.4rem', marginTop: '-5px'}}>Admin</p>
        <AdminDashboard>
          <form ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="name">NamePage</label>
            <Input type="text" name="name" id="name"/>

            <label htmlFor="name">Type</label>
            <Select type="text" name="type" id="type">
              <option value={'posts'}>Post</option>
              <option value={'projects'}>Project</option>
            </Select>

            <label htmlFor="id">NotionId</label>
            <Input type="text" name="id" id="id"/>

            <label htmlFor="password">Password</label>
            <Input type="password" name="password" id="password"/>

            <Button type="submit" style={{marginTop: '15px', width: '100%'}}>Enviar</Button>
          </form>
        </AdminDashboard>
      </ActiveAdmin>
      {!!alert.value && <Alert text={alert.text} setAlert={setAlert} />}
    </>
  )
}

export {AdminActive}

import { useState } from "react";
import {  Admin as Container, FolderIcon } from "../styles/components/layout";
import { AdminActive } from "./AdminActive";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);

  return(
    <>
      {!isAdmin ?
          <Container>
            <FolderIcon
              size={'30px'}
              cursor={'pointer'}
              onClick={()=>setIsAdmin(true)}
            />
        </Container>
      :
        <></>
      }

      {!!isAdmin ?
          <AdminActive setIsAdmin={setIsAdmin}/>
        :
        <></>
      }
    </>
  )
}

export {Admin}

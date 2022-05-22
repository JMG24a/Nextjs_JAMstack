import { Aside, Card,CardTitle, CardLogo } from "../styles/components/layout";
import { Admin } from "./Admin";
import { RedSocials } from "./RedSocials";
import { Menu } from './Menu';

function Dashboard() {
  return(
    <Aside>
      <Admin />
      <Card>
        <CardLogo />
        <CardTitle>Desarrollador Full-Stack</CardTitle>
        <Menu/>
        <RedSocials />
      </Card>
    </Aside>
  )
}

export { Dashboard }

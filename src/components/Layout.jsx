import { Page, Section } from "../styles/components/layout"
import { Dashboard } from "./Dashboard"

function Layout({children}) {
  return (
    <Page>
      <Dashboard />
      <Section>
        {children}
      </Section>
    </Page>
  )
}

export { Layout }

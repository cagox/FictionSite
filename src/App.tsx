import PageFooter from "./components/PageFooter"
import PageHeader from "./components/PageHeader"

function App() {

  return (
    <div className="container mx-auto rounded-lg" id="appContainer">
      <div className="grid">
        <PageHeader />
        <div className="min-h-96" id="contentArea">Content goes here.</div>
        <PageFooter />
      </div>
    </div>
  )
}

export default App

import { useState } from "react"
import UrlForm from "./components/UrlForm"
import UrlList from "./components/UrlList"
import Navbar from "./components/Navbar"

const App = () => {
  const [view, setView] = useState<"shorten" | "list">("shorten")

  return (
    <div className="min-h-screen bg-[#0b2341]">
      <Navbar view={view} setView={setView} />
      <main>
        {view === "shorten" && <UrlForm />}
        {view === "list" && <UrlList />}
      </main>
    </div>
  )
}

export default App

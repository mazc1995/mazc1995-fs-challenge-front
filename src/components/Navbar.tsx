interface NavbarProps {
  view: "shorten" | "list"
  setView: (view: "shorten" | "list") => void
}

const Navbar = ({ view, setView }: NavbarProps) => {
  return (
    <nav className="flex justify-center gap-4 py-6 bg-white shadow">
      <button
        className={`px-4 py-2 rounded font-bold ${view === "shorten" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        onClick={() => setView("shorten")}
      >
        Shorten URL
      </button>
      <button
        className={`px-4 py-2 rounded font-bold ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        onClick={() => setView("list")}
      >
        Top URLs
      </button>
    </nav>
  )
}

export default Navbar
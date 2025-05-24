interface NavbarProps {
  view: "shorten" | "list"
  setView: (view: "shorten" | "list") => void
}

const Navbar = ({ view, setView }: NavbarProps) => {
  return (
    <nav className="flex justify-center gap-4 py-6 bg-[#0b2341] shadow">
      <button
        className={`px-4 py-2 rounded font-bold ${view === "shorten" ? "bg-[#ff914d] text-white" : "bg-[#f5f6fa] text-gray-700"}`}
        onClick={() => setView("shorten")}
      >
        Shorten URL
      </button>
      <button
        className={`px-4 py-2 rounded font-bold ${view === "list" ? "bg-[#ff914d] text-white" : "bg-[#f5f6fa] text-gray-700"}`}
        onClick={() => setView("list")}
      >
        Top URLs
      </button>
    </nav>
  )
}

export default Navbar
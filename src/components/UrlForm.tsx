import { useState } from "react"

const UrlForm = () => {
  const [url, setUrl] = useState<string>("")
  const [status, setStatus] = useState<"" | "success" | "error">("")
  const [shortCode, setShortCode] = useState<string>("")
  const [copied, setCopied] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCopied(false)
    try {
      const response = await fetch('http://localhost:3000/short_urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_url: url
        })
      })
      if (response.ok) {
        const data = await response.json()
        setShortCode(data.short_code)
        setStatus("success")
      } else {
        setShortCode("")
        setStatus("error")
      }
    } catch (error) {
      setShortCode("")
      setStatus("error")
      console.error('Error:', error)
    }
  }

  const handleCopy = async () => {
    if (shortCode) {
      await navigator.clipboard.writeText(`http://localhost:5173/${shortCode}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-lg mx-auto bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mt-10"
      onSubmit={handleSubmit}
    >
      <label className="text-2xl font-extrabold text-center text-gray-800 mb-2">
        Shorten your URL
      </label>
      <input
        className="border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-lg transition-all outline-none text-lg"
        type="text"
        placeholder="Paste your long URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="bg-gradient-to-r bg-[#ff914d] hover:bg-[#ff914d]/85 text-white font-bold py-3 rounded-lg shadow-md transition-all text-lg"
        type="submit"
      >
        Shorten URL
      </button>
      {status === "success" && (
        <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-2">
          <span>✅</span> Short URL created successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600 font-semibold flex items-center justify-center gap-2">
          <span>❌</span> Failed to create short URL
        </p>
      )}
      {shortCode && (
        <div className="flex flex-col items-center my-6">
          <div className="text-xl font-extrabold text-blue-700 text-center tracking-widest mb-2">
            <span className="bg-blue-100 px-6 py-2 rounded-lg shadow-inner">
              http://localhost:5173/{shortCode}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {copied ? (
              <>
                <span>✔️</span> Copied!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7.5 2.25V6.75A2.25 2.25 0 014.75 4.5h7.5A2.25 2.25 0 0114.5 6.75v12.5a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 013 19.25zm16.5-2.25v-7.5A2.25 2.25 0 0017.25 7.5h-7.5A2.25 2.25 0 007.5 9.75v12.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0021 19.25z" />
                </svg>
                Copy code
              </>
            )}
          </button>
          <div className="text-base font-normal text-gray-500 mt-2">
            Copy and share your code!
          </div>
        </div>
      )}
    </form>
  )
}

export default UrlForm
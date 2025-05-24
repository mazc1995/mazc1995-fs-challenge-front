import { useEffect, useState } from "react"

interface ShortUrl {
  short_code: string
  full_url: string
  title: string | null
  click_count: number
}

const UrlListItem = ({ url }: { url: ShortUrl }) => {
  const [clickCount, setClickCount] = useState<number>(url.click_count)
  const handleClick = async (shortCode: string) => {
    setClickCount(clickCount + 1)
    window.open(`http://localhost:3000/${shortCode}`, '_blank')
  }

  useEffect(() => {
  }, [url.click_count])

  return <>
    <li key={url.short_code} className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between" onClick={() => {
      handleClick(url.short_code)
    }} >
      <div>
        <div className="text-xl font-bold text-blue-700">{url.short_code}</div>
        <div className="text-gray-600 break-all">{url.full_url}</div>
        {url.title && <div className="text-gray-400 text-sm">{url.title}</div>}
      </div>
      <div className="mt-2 md:mt-0 text-right">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
          {clickCount} clicks
        </span>
      </div>
    </li>
  </>
}

export default UrlListItem
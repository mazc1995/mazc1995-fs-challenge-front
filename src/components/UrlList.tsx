import { useEffect, useState } from "react"
import UrlListItem from "./UrlListItem"

interface ShortUrl {
  short_code: string
  full_url: string
  title: string | null
  click_count: number
}

const UrlList = () => {
  const [urls, setUrls] = useState<ShortUrl[]>([])

  useEffect(() => {
    const fetchUrls = async () => {
      const res = await fetch("http://localhost:3000/short_urls")
      const data = await res.json()
      setUrls(data.urls)
    }
    fetchUrls()
  }, [])

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Top URLs</h2>
      <ul className="space-y-4">
        {urls.map((url) => (
          <UrlListItem url={url} key={url.short_code} />
        ))}
      </ul>
    </div>
  )
}

export default UrlList
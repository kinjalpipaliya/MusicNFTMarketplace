import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <center><div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Music NFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Explore
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-500">
              Create
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-500">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
    <Component {...pageProps} />
    </div></center>
  )
}

export default MyApp

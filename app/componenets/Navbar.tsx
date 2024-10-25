import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="sticky top-0">
        
        <div className="flex w-full justify-between bg-gray-900 text-white px-6">
            <div className="h-8 text-xs hover:underline hover:cursor-pointer">
&#128241;Download/App via SMS
            </div>
            <div className="flex justify-end text-xs">
                <Link href="/" className="hover:underline px-3 py-2 rounded-md">Sign Up</Link>
                <p className="p-2">|</p>
                <Link href="/" className="hover:underline px-3 py-2 rounded-md">Sign In</Link>
                </div>                   
                </div>

<hr />

{/* logo */}
        <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <Image
                    src="/img/logo1.svg"
                    alt="logo"
                    width={200}
                    height={200} />
                </div>
                <div className="hidden sm:flex sm:items-center sm:space-x-8 w-4/5 text-sm">
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">Listed Cars</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700  px-3 py-2">New Cars</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">Bikes</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700  px-3 py-2">Auto Store</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">Videos</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">Forums</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">Blog</Link>
                <Link href="/" className="hover:border-b-2 hover:border-red-700 px-3 py-2">More</Link>
                <Link href="/" className="bg-red-600 hover:bg-red-400 text-white px-3 py-2 rounded-md">Post an Ad</Link>
                </div>

            </div>

        </div>
        </nav>
        </div>
    )
}
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center"> {/* Updated */}
            <div className="flex items-center"> {/* Updated */}
              <div className="flex-shrink-0 flex items-center">
                {/* Your Logo or Site Name */}
                <Link href="/">
                  <span className="text-white text-2xl font-bold cursor-pointer">UrbanEagle Books</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center"> {/* Updated */}
              {/* Navigation Links */}
              <div className="hidden md:flex md:ml-10 md:space-x-4">
                <Link href="/BooksPage">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Books</span>
                </Link>
                <Link href="/AddBookPage">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Add Book</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/book-store.jpg')" }}>
        {/* Content here */}
      </div>
    </div>
  );
}

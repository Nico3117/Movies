import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-poppins">
            <Link href="/">
                <span>Movies</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
import Link from "next/link"
import Image from "next/image"

import SearchFilters from "./search_filters"
import UserNav from "./user_nav"
import AddPropertyButton from "./add_property_btn"

const Navbar = () => {
    return (
        <nav className="text-black w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/airbnb_logo.svg"
                            alt="Airbnb logo"
                            width={120}
                            height={20}
                        />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters/> 
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton/>
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 

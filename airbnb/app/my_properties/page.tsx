import Image from "next/image"
import PropertyListing from "../components/properties/property_listing";
const MyPropertiesPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 text-black border">
            <h1 className="my-6 text-2xl">My Properties</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertyListing/>
            </div>
        </main>
    )
}

export default MyPropertiesPage; 

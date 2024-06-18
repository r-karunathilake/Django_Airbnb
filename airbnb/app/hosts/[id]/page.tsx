import Image from "next/image"
import ContactBtn from "@/app/components/properties/contact_btn";
import PropertyListing from "@/app/components/properties/property_listing";
const HostDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 text-black pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl 
                                    border border-grey-300 shawdow-xl">
                        <Image 
                            src="/profiles/host1.jpeg"
                            width={200}
                            height={200}
                            alt="Host Name"
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">Host Name</h1>
                        <ContactBtn />
                    </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6 md:px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyListing/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HostDetailPage;

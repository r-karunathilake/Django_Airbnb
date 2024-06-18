import Image from "next/image"
import ReservationSideBar from "@/app/components/properties/reservation_sidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 text-black pb-6">
            <div className="relative mb-4 w-3/4 h-[64vh] mx-auto overflow-hidden rounded-xl">
                <Image
                    fill
                    src="/properties/national_parks.jpeg"
                    alt="National Park Cabin"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-3 py-6 pr-6">
                    <h1 className="mb-4 text-4xl">Property Name</h1>
                    <span className="mb-6 block text-lg text-grey-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profiles/host1.jpeg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The Host Profile Image"
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                    <hr />

                    <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent dapibus cursus odio, ac 
                    finibus risus tempus convallis. Ut vel aliquam urna, 
                    et euismod elit. Nam vulputate dui ac pellentesque 
                    vulputate. Aliquam odio lacus, varius in massa sit amet, 
                    congue interdum mauris. Duis porta, enim ac molestie 
                    vehicula, nisl massa malesuada tortor, at feugiat 
                    ante sem ut ex. Praesent purus leo, molestie id 
                    semper eu, tempus id mauris. Donec sed quam leo. Cras 
                    bibendum vulputate sem, id consectetur libero gravida 
                    id. Nullam in tincidunt ex. Vestibulum sed tortor at 
                    erat rutrum volutpat. Integer ligula dui, pretium sit 
                    amet nisi sed, interdum dictum augue. Curabitur sit 
                    amet tellus et diam ornare ullamcorper. 
                    </p>
                </div>

                <ReservationSideBar/>
            </div>
        </main>
    )
}

export default PropertyDetailPage;

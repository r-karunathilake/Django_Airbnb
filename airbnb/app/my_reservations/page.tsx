import Image from "next/image"
const ReservationPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 text-black border">
            <h1 className="my-6 text-2xl">My Reservations</h1>
            
            <div className="space-y-4">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src="/properties/national_parks.jpeg"
                                className="hover:scale-110 object-cover transition
                                           h-full w-full"
                                alt="National Park Cabin"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p><strong>Check In Date:</strong>2024/06/25</p>
                        <p><strong>Check Out Date:</strong>2024/06/29</p>
                        <p><strong>Number of Nights:</strong>3</p>
                        <p><strong>Total Price:</strong>$200</p>

                        <div className="cursor-pointer py-4 mt-6 px-6 
                                        inline-block bg-airbnb text-white 
                                        rounded-xl hover:bg-airbnb-dark">
                            Go To Property
                        </div>
                    </div>
                </div>

                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src="/properties/national_parks.jpeg"
                                className="hover:scale-110 object-cover transition
                                           h-full w-full"
                                alt="National Park Cabin"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 ">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p><strong>Check In Date:</strong>2024/06/25</p>
                        <p><strong>Check Out Date:</strong>2024/06/29</p>
                        <p><strong>Number of Nights:</strong>3</p>
                        <p><strong>Total Price:</strong>$200</p>

                        <div className="cursor-pointer py-4 mt-6 px-6 
                                        inline-block bg-airbnb text-white 
                                        rounded-xl hover:bg-airbnb-dark">
                            Go To Property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ReservationPage;

import Image from "next/image"

const SearchFilters = () =>{
    return (
        <div className="h-[48px] lg:h-[64px] flex flex-row 
                        items-center justify-between 
                        border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col 
                                    rounded-full hover:bg-gray-100
                                    justify-center">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted Location</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col 
                                    rounded-full hover:bg-gray-100
                                    justify-center">
                        <p className="text-xs font-semibold">Check In</p>
                        <p className="text-sm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col 
                                    rounded-full hover:bg-gray-100
                                    justify-center">
                        <p className="text-xs font-semibold">Check Out</p>
                        <p className="text-sm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col 
                                    rounded-full hover:bg-gray-100
                                    justify-center">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add Guests</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb rounded-full text-white
                                hover:bg-airbnb-dark trasition">
                    <Image 
                        src="/search_icon.svg"
                        alt="Search button"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;

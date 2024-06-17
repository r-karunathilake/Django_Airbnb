import Image from "next/image"

const Categories = () => {
    return (
        <div className="cursor_pointer pt-3 pb-6 flex items-center 
                        space-x-12">
            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/national_parks.png"
                    alt="Category - National Parks"
                    width={20}
                    height={20}
                />
                <span className="text-xs">National Parks</span>
            </div>

            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/beach.png"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Beach</span>
            </div>

            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/camping.png"
                    alt="Category - Camping"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Camping</span>
            </div>

            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/lakefront.png"
                    alt="Category - Lake Front"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Lake Front</span>
            </div>

            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/rooms.png"
                    alt="Category - Rooms"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Rooms</span>
            </div>

            <div className="text-black pb-2 flex flex-col items-center 
                            space-y-2 border-b-2 border-white opacity-60 
                            hover:opacity-100 hover:border-black">
                <Image 
                    src="/categories/tree_houses.png"
                    alt="Category - Tree Houses"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tree Houses</span>
            </div>
        </div>
    )
}

export default Categories;

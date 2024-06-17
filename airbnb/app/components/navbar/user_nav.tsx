import Image from "next/image"

const UserNav = () => {
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center">
                <Image 
                    src="/menu.svg"
                    alt="Menu Button"
                    width={20}
                    height={20}
                />
                <Image 
                    src="/user.svg"
                    alt="User Login Button"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    )
}

export default UserNav;

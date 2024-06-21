"use client";

import Image from "next/image";
import {useState } from "react";
import MenuLink from "./menu_link";
import useLoginModal from "@/app/hooks/use_login_modal";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const UserNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const loginModal = useLoginModal(); 

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center">
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
            {isOpen && (
                <div className="w-[220px] absolute top-[65px] right-0 
                              bg-white border rounded-xl shadow-md
                                flex flex-col cursor-pointer">
                    <MenuLink 
                        label="Log In"
                        onClick={() => 
                            {
                                console.log("Clicked Button!");
                                loginModal.open();
                                setIsOpen(false); // Close the login window
                            }
                        }
                    />
                    <MenuLink 
                        label="Sign Up"
                        onClick={() => console.log("Clicked Button!")}
                    />
                </div>
            )}
        </div>
    )
}

export default UserNav;

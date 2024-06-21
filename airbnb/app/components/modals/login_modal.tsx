"use client";

import Modal from "./modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/use_login_modal";
import CustomBtn from "../forms/custom_btn";
import { Console } from "console";

const LoginModal = () => {
    const loginModal = useLoginModal(); 
    const content = (
    <>
        <form className="space-y-4">
            <input placeholder="Your email address" type="email" 
                   className="pl-4 h-[54px] w-full border border-gray-300 rounded-xl"/>
            <input placeholder="Your password" type="password" 
                   className="pl-4 h-[54px] w-full border border-gray-300 rounded-xl"/>
            
            {/* Show errors */}
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-70">
                An error occured!
            </div>

            <CustomBtn 
                label="Submit"
                onClick={() => console.log('Account Login Submitted')}
            />
        </form>
        </>
    )

    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;

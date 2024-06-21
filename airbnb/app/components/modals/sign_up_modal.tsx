"use client";

import Modal from "./modal";
import useSignUpModal from "@/app/hooks/use_sign_up_modal";
import CustomBtn from "../forms/custom_btn";

const SignUpModal = () => {
    const signUpModal = useSignUpModal(); 
    const content = (
    <>
        <form className="space-y-4">
            <input placeholder="Your email address" type="email" 
                   className="pl-4 h-[54px] w-full border border-gray-300 rounded-xl"/>
            <input placeholder="Your password" type="password" 
                   className="pl-4 h-[54px] w-full border border-gray-300 rounded-xl"/>
            
            <input placeholder="Repeat password" type="password" 
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
            isOpen={signUpModal.isOpen}
            close={signUpModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignUpModal;

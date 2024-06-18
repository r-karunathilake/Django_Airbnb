"use client";

import CustomBtn from "../forms/custom_btn";
import Image from "next/image"

const ConversationDetail = () => {
    return(
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[60%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-grey-500">John Doe</p>
                    <p>This is an example conversation message.</p>
                </div>
                <div className="ml-[40%] w-[60%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-grey-500">John Doe</p>
                    <p>This is an example conversation message.</p>
                </div>
            </div> 

            <div className="mt-4 py-4 flex border border-gray-300 gap-2">
                <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="ml-2 w-full p-2 bg-gray-200 rounded-xl"
                />
                <CustomBtn
                    label={"Send"}
                    onClick={() => console.log("Send Btn Clicked!")}
                    className="w-[100px] mr-2"
                /> 
                
            </div>
        </>

    )
}

export default ConversationDetail; 

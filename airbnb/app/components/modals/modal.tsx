"use client"; 

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    label: string;
    close: () => void;
    content: React.ReactElement; 
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({label, close, content, isOpen}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
            setShowModal(isOpen)
        }, [isOpen])

    const handleClose = useCallback(()=> {
        setShowModal(false);
        setTimeout(() => {
            close();
        }, 150); // in ms 
    }, [close])

    if(!isOpen){
        return null;
    }   

    return (
            <div className="flex items-center justify-center fixed inset-0 
                            z-50 bg-black/60">
                <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 
                               mx-auto h-auto">
                    <div className={`translate duration-600 h-full 
                                    ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
                        <div className="w-full h-auto rounded-xl relative flex 
                                        flex-col bg-white">
                            <header className="h-[60px] flex items-center p-6 rounded-full justify-center 
                                               relative border-b">
                                <h2 className="text-lg font-bold">{label}</h2>
                                <div onClick={handleClose} className="p-3 absolute right-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </header>

                            <section className="p-6">
                                    {content}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal; 

import Image from "next/image"

interface CustomBtnProps{
    label: string; 
    onClick: () => void; 
    className?: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({label, onClick, className}) => {
    return (
        <div onClick={onClick}
             className={`cursor-pointer w-full py-4 bg-airbnb 
                       hover:bg-airbnb-dark text-white transition 
                         rounded-xl text-center ${className}`}>
             {label}
        </div>
    )
}

export default CustomBtn;

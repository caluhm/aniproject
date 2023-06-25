import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode;
}
  
  export default function GridWrapper({ children }: ChildrenProps) {
    return (
        <div 
            className="relative min-h-full flex justify-center items-center mx-[5vw]
            m-grid-2xl:mx-[1vw]
            m-grid-xl:mx-[10vw]
            m-grid-lg:mx-[5vw]
            m-grid-md:mx-[15vw]
            m-grid-sm:mx-[10px]"
        >
            {children}
        </div>
    )
}
import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode;
}

export default function StudioPageGridWrapper({ children }: ChildrenProps) {
    return (
        <div
            className="w-min grid grid-cols-[repeat(5,_185px)] gap-x-5 gap-y-5 min-w-0
            grid-lg:grid-cols-[repeat(4,_1fr)]
            grid-md:grid-cols-[repeat(3,_1fr)]
            m-grid-sm:grid-cols-[repeat(2,_1fr)]
            sm-max:grid-cols-[repeat(1,_1fr)]"
        >
            {children}
        </div>
    )
}
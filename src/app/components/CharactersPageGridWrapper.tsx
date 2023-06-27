import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode;
}

export default function CharactersPageGridWrapper({ children }: ChildrenProps) {
    return (
        <div
            className="w-full grid grid-cols-[repeat(5,_185px)] gap-x-5 gap-y-5 min-w-0 content-center justify-center
            grid-lg:grid-cols-[repeat(4,_1fr)]
            grid-md:grid-cols-[repeat(2,_1fr)]
            rg:grid-cols-[repeat(1,_1fr)]"
        >
            {children}
        </div>
    )
}
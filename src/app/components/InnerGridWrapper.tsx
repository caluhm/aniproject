import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode;
}

export default function InnerGridWrapper({ children }: ChildrenProps) {
    return (
        <div
            className="
                grid grid-cols-[repeat(3,_minmax(390px,_460px))] grid-rows-[repeat(auto-fill,_265px)] gap-x-[50px] gap-y-[40px] w-full min-w-0 content-center justify-center
                grid-xl:gap-x-[20px] grid-xl:gap-y-[20px]
                grid-lg:grid-cols-[repeat(2,_1fr)] grid-lg:gap-x-[40px] grid-lg:gap-y-[40px]
                grid-md:grid-cols-[1fr]
                grid-sm:grid-rows-[repeat(auto-fill,_230px)] grid-sm:gap-y-[25px]
            "
        >
            {children}
        </div>
    )
}
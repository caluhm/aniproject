import StudioPageGridWrapper from "@/app/components/StudioPageGridWrapper"
import StudioReleasesCoverImageCardLoading from "@/app/components/StudioReleasesCoverImageCardLoading"

export default function Loading() {

    return (
        <main className="flex flex-col min-h-screen bg-[#13171D] text-white justify-start items-center py-14">
            <div className="flex flex-col justify-start px-12 rg:px-6 max-w-[1140px] w-full">
                <h1 className="text-2xl font-bold text-neutral-200 pb-6">
                    <div className="w-1/6 h-5 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                </h1>
                <h2 className="text-base font-semibold text-neutral-300">
                    <div className="w-1/12 h-4 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                </h2>
                <div className="py-5">
                    <StudioPageGridWrapper>
                        {Array.from(Array(15), (_, index) => (
                            <StudioReleasesCoverImageCardLoading key={index} />
                        ))}
                    </StudioPageGridWrapper>
                </div>
            </div>
        </main>
    )
}
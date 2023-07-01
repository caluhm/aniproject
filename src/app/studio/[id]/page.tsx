import getStudioByID from "../../api/getStudioByID"

import StudioPageGridWrapper from "@/app/components/StudioPageGridWrapper";
import BackButton from "@/app/components/BackButton";
import StudioReleasesCoverImageCard from "@/app/components/StudioReleasesCoverImageCard";

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getStudioByID(params.id);

    return (
        <main className="flex flex-col min-h-screen bg-[#13171D] text-white justify-start items-center py-14">
            <BackButton />
            <div className="flex flex-col justify-start px-12 rg:px-6 max-w-[1140px] w-full">
                <h1 className="text-2xl font-bold text-neutral-200 pb-2">{data.data.Studio.name}</h1>
                <h2 className="text-base font-semibold text-neutral-300">Popular Releases</h2>
                <div className="py-5">
                    <StudioPageGridWrapper>
                        {data.data.Studio.media.nodes && data.data.Studio.media.nodes.map((anime: any) => (
                            <StudioReleasesCoverImageCard anime={anime} key={anime.id}/>
                        ))}
                    </StudioPageGridWrapper>
                </div>
            </div>
        </main>
    )
}
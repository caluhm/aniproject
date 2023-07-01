import getAnimeByID from "../../api/getAnimeByID"

import CharactersPageGridWrapper from "@/app/components/CharactersPageGridWrapper";
import BackButton from "@/app/components/BackButton";
import Banner from "@/app/components/Banner";
import AnimeMainInfo from "@/app/components/AnimeMainInfo";
import AnimeAsideInfo from "@/app/components/AnimeAsideInfo";
import StudioReleasesCoverImageCard from "@/app/components/StudioReleasesCoverImageCard";
import CharacterCard from "@/app/components/CharacterCard";
import Trailer from "@/app/components/Trailer";

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getAnimeByID(params.id);

    const description = data.data.Media.description ? data.data.Media.description.replace(/<\/?i>/g, '').replace(/<br\s?\/?>/g, '') : "No description available."

    let timeString = null;

    if (data.data.Media.nextAiringEpisode === null) {
        timeString = 'TBA';
    } else {
        const nextAiringEpisodeTime = data.data.Media.nextAiringEpisode.airingAt;

        const currentTime = Date.now() / 1000;
        const timeDifference = nextAiringEpisodeTime - currentTime;

        const days = Math.floor(timeDifference / (24 * 60 * 60));
        const hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));

        timeString = `${days} days, ${hours} hours`;
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <BackButton />
            <div>
                <Banner 
                    src={data.data.Media.bannerImage}
                    alt={data.data.Media.title.romaji}
                />
                <AnimeMainInfo
                    coverImage={data.data.Media.coverImage.extraLarge}
                    titleRomaji={data.data.Media.title.romaji}
                    titleNative={data.data.Media.title.native}
                    description={description}
                />
                <div className="flex md:flex-row flex-col gap-8 min-w-full bg-neutral-950 p-8 grid-md:gap-5 grid-md:p-5">
                    <AnimeAsideInfo 
                        anime={data.data.Media} 
                        timeUntilNextEpisode={timeString} 
                    />
                    <div className="w-full min-h-screen flex flex-col gap-8 bg-[#13171D] p-5 rounded-md">
                        <div className="md:hidden block w-fit">
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Description</h3>
                            <p className="text-sm font-light text-neutral-400">{description}</p>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Related</h3>
                            <CharactersPageGridWrapper>
                            {data.data.Media.relations.edges && data.data.Media.relations.edges.map((edge: any) => (
                                <StudioReleasesCoverImageCard
                                    key={edge.node.id}
                                    anime={edge.node}
                                />
                            ))}
                            </CharactersPageGridWrapper>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Characters</h3>
                            <CharactersPageGridWrapper>
                            {data.data.Media.characters.nodes && data.data.Media.characters.nodes.map((character: any) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                />
                            ))}
                            </CharactersPageGridWrapper>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Trailer</h3>
                            <Trailer 
                                id={data.data.Media.trailer ? data.data.Media.trailer.id : null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
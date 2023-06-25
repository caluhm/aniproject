import getAnimeByID from "../../api/getAnimeByID"

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getAnimeByID(params.id);

    return (
        <main className="min-h-screen bg-[#13171D] py-28 text-white">
            <h1>Anime: {params.id}</h1>
                
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </main>
    )
}
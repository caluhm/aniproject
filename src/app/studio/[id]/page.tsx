import getStudioByID from "../../api/getStudioByID"

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getStudioByID(params.id);

    return (
        <main className="min-h-screen bg-[#13171D] py-28 text-white">
            <h1>Studio: {params.id}</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </main>
    )
}
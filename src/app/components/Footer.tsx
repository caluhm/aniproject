import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex justify-center flex-col items-center w-full bg-[#2B2D42] h-[25vh] pt-12 -mt-14 text-neutral-100 gap-8">
            <div className="flex w-full flex-row justify-center items-center gap-10 text-neutral-300">
                <Link href="/"><p className="hover:underline">Privacy</p></Link>
                <Link href="/"><p className="hover:underline">Terms</p></Link>
                <Link href="/"><p className="hover:underline">Contact</p></Link>
                <Link href="/"><p className="hover:underline">Developers</p></Link>
            </div>
            <div className="text-neutral-400 text-sm">
                <p>© 2023 Anime Catalogue</p>
            </div>
        </div>
    )
}
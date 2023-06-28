import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex justify-center flex-col items-center w-full bg-[#2B2D42] h-[17.5vh] text-neutral-100 gap-8">
            <div className="flex w-full flex-row justify-center items-center gap-10 rg:gap-6 text-neutral-300">
                <Link href="/"><p className="hover:underline text-base rg:text-sm">Privacy</p></Link>
                <Link href="/"><p className="hover:underline text-base rg:text-sm">Terms</p></Link>
                <Link href="/"><p className="hover:underline text-base rg:text-sm">Contact</p></Link>
                <Link href="/"><p className="hover:underline text-base rg:text-sm">Developers</p></Link>
            </div>
            <div className="text-neutral-400 rg:text-xs text-sm">
                <p>© 2023 Anime Catalogue</p>
            </div>
        </div>
    )
}
export default function CardGenres({ 
    genres 
}: { genres: string[] }) {
    return (
        <div 
            className="flex flex-wrap justify-start gap-3 items-center text-center p-4 rounded-br"
            style={{ backgroundColor: 'rgba(19, 23, 29, 0.70)'}}
        >
            {genres.slice(0, 2).map((genre, index) => {
                return (
                    <span 
                        className="text-[0.7rem] font-bold tracking-wide break-all whitespace-normal bg-blue-500 text-white rounded-xl px-[10px] py-[2px]" 
                        key={index}
                    >
                        {genre.toLowerCase()}
                    </span>
                );
            })}
        </div>
    )
}
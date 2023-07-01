import Image from "next/image";

type CharacterCardProps = {
    character: {
        id: number;
        name: {
            full: string;
        };
        image: {
            large: string;
        };
        gender: string;
        age: number | null;
    }
};

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div key={character.id} className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded">
            <Image src={character.image.large} width={300} height={600} alt={character.name.full} loading='lazy' className="h-full w-full object-cover object-center"/>
                <div 
                    className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                    style={{ backgroundColor: 'rgba(19, 23, 29, 0.70)' }}
                >      
                    <p className="text-[0.83rem] font-semibold">{character.name.full}</p>
                    <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                        <span>{character.gender} </span>
                            -
                        <span> {character.age}</span>
                    </p>
                </div>
        </div>
    )
}
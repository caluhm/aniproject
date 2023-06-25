
export default function LoadingCard()  {

    const backgroundColor = "rgba(19, 23, 29, 0.70)";

    return (
        <div 
            className="flex bg-[#1F232D] rounded flex-row h-[265px] min-w-[370px] card-md:min-w-[330px] card-md:w-full card-sm:h-[230px] card-sm:min-w-[320px] shadow-custom pulsate-opacity"
        >
            <div className="h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-hidden rounded-tl rounded-bl">
                <div className="w-full h-full bg-gray-600 overflow-hidden rounded-tl-md rounded-bl-md opacity-50">
            </div>
            <div className="flex flex-col justify-between w-full h-full">
                <div className="w-full h-10 bg-gray-600 overflow-hidden rounded-xl opacity-50"></div>
            </div>
        </div>
    </div>
    )
}
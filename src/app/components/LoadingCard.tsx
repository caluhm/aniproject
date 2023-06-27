
export default function LoadingCard()  {

    const backgroundColor = "rgba(19, 23, 29, 0.70)";

    return (
        <div className="flex bg-[#1F232D] rounded flex-row h-[265px] min-w-[370px] card-md:min-w-[330px] card-md:w-full card-sm:h-[230px] card-sm:min-w-[320px] shadow-custom pulsate-opacity p-1">
            <div className="h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] bg-gradient-to-tr from-gray-500 to-gray-800 opacity-50 card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-hidden rounded">
            </div>
            <div className="flex flex-col justify-between w-full h-full p-2">
                <div className="flex flex-col gap-3">
                    <div className="w-1/3 h-4 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    <div className="w-3/5 h-6 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-1/5 h-4 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    <div className="w-full h-3 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    <div className="w-full h-3 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    <div className="w-full h-3 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                </div>
                <div className="flex flex-row gap-3 w-full h-10 justify-start items-center pt-5 opacity-50">
                    <span className="text-[0.7rem] font-bold tracking-wide break-all whitespace-normal bg-gradient-to-tr from-gray-500 to-gray-700 text-white rounded-xl w-14 h-6"></span>
                    <span className="text-[0.7rem] font-bold tracking-wide break-all whitespace-normal bg-gradient-to-tr from-gray-500 to-gray-700 text-white rounded-xl w-14 h-6"></span>
                </div>
            </div>
        </div>
    )
}
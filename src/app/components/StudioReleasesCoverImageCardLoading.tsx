export default function StudioReleasesCoverImageCardLoading() {
    return (
        <div className="relative bg-gradient-to-tr from-gray-500 to-gray-800 h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px] card-sm:min-w-[150px] overflow-y-hidden rounded pulsate-opacity">
            <div 
                className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                style={{ backgroundColor: 'rgba(19, 23, 29, 0.70)' }}
            >
                    <div className="text-[0.83rem] font-semibold pb-3">
                        <div className="w-2/3 h-4 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    </div>
                    <div className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                        <div className="w-2/4 h-3 bg-gradient-to-tr from-gray-500 to-gray-700 overflow-hidden rounded-xl opacity-50"></div>
                    </div>
                </div>  
        </div>
    )
}
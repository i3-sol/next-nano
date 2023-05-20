import Link from 'next/link'
export default function BenifitView()
{   
    return (
        <div className="bg-bg-secondary flex justify-center">
            <div className="w-[88%] flex items-center flex-col mt-[120px]">
                <div className="flex font-odibee text-[49px] text-center leading-[58.8px]">
                    Our Blogs
                </div>
                <div className="flex mt-[4px] font-odibee text-[19px] leading-[24px] text-center gradient-text text-[#ffffff00]">
                    Sharing is Caring !
                </div>

                <div className="mt-[64px] mb-[64px] md:flex flex-row w-[100%] justify-evenly">

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="relative card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <img className="w-full" src='/unsplash_p0j-mE6mGo4.png' alt="reviews image" />
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base">
                                    Categorizing the problems and growth patterns of small businesses in a systematic way.
                                </p>
                                <Link href='#' ><p className="mt-3"><b>Learn More</b></p></Link>
                            </div>
                            <div className="absolute top-[25px] right-[19.4px] w-[141.6px] h-[42px] bg-[#251b7c] text-center pt-[8px] rounded-[7.8px]" >15 August, 2020</div>
                        </div>
                    </div>

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="relative card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <img className="w-full" src='/unsplash_6ou8gWpS9ns.png' alt="reviews image" />
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base">
                                    Categorizing the problems and growth patterns of small businesses in a systematic way.
                                </p>
                                <Link href='#' ><p className="mt-3"><b>Learn More</b></p></Link>
                            </div>
                            <div className="absolute top-[25px] right-[19.4px] w-[141.6px] h-[42px] bg-[#251b7c] text-center pt-[8px] rounded-[7.8px]" >15 August, 2020</div>

                        </div>
                    </div>

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="relative card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <img className="w-full" src='/unsplash_8Gdayy2Lhi0.png' alt="reviews image" />
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base">
                                    Categorizing the problems and growth patterns of small businesses in a systematic way.
                                </p>
                                <Link href='#' ><p className="mt-3"><b>Learn More</b></p></Link>
                            </div>
                            <div className="absolute top-[25px] right-[19.4px] w-[141.6px] h-[42px] bg-[#251b7c] text-center pt-[8px] rounded-[7.8px]" >15 August, 2020</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
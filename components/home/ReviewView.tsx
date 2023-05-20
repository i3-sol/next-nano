export default function ReviewView()
{
    return (
        <div className="bg-bg-purple md:flex justify-center">
            <div className="md:w-[69.37%] s-[100%] flex items-center flex-col mt-[120px]">
                <div className="flex font-odibee text-[49px] text-center leading-[58.8px]">
                    What our client said                
                </div>
                <div className="flex mt-[4px] font-odibee text-[16px] leading-[24px] text-center bg-clip-text text-[#ffffff00] bg-gradient-to-l from-[#F300FA] to-[#E48726]">
                    User satisfaction is a gift !
                </div>

                <div className="mt-[64px] mb-[64px] md:flex flex-row w-[100%] justify-evenly pb-[126px]">

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="h-[70%] card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className="px-6 py-4 text-center">
                                <p className="text-[24px] mt-3 mb-8 overflow-hidden"><b>Smooth and Fast</b></p>
                                <p className="text-[14px]">
                                    They are always developing the discord to make it smoother and faster.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center pt-[35px]">
                            <div className="rounded-full flex justify-center items-center bg-[blue] w-[56px] h-[56px]">
                                <img src="/image 5.png" className="w-[25px] h-[19px]" alt="" />    
                            </div>
                        </div>
                        <div className="text-center ">
                            <p className="p-2">twd.721</p>
                            <p className="text-[14px] text-[gray]">Discord User</p>
                        </div>
                    </div>

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="h-[70%] card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className="px-6 py-4 text-center">
                                <p className="text-[24px] mt-3 mb-8 overflow-hidden"><b>Highly Recommend 10/10 </b></p>
                                <p className="text-[14px] pb-4">
                                    Been trying to sell off divs for days, got it all sold in a matter of minutes. Amazing place.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center pt-[35px]">
                            <div className="rounded-full flex justify-center items-center bg-[#E43D3D]  w-[56px] h-[56px]">
                            </div>
                        </div>
                        <div className="text-center ">
                            <p className="p-2">Tauri</p>
                            <p className="text-[14px] text-[gray]">Discord User</p>
                        </div>
                    </div>

                    <div className=" mt-[20px] md:w-1/3 w-[100%]">
                        <div className="h-[70%] card mx-5 bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className="px-6 py-4 text-center">
                                <p className="text-[24px] mt-3 mb-8 overflow-hidden"><b>Smooth transaction.</b></p>
                                <p className="text-[14px] pb-4">
                                Sold new world 477k gold and transaction was done in about 15-20 mins. Discord interaction is very well made
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center pt-[35px]">
                            <div className="rounded-full flex justify-center items-center w-[56px] h-[56px]">
                                <img src="/Picture3.png" className="" alt="" />    
                            </div>
                        </div>
                        <div className="text-center ">
                            <p className="p-2">JackieLife</p>
                            <p className="text-[14px] text-[gray]">Discord User</p>
                        </div>
                    </div>
                    <div className='absolute left-[-8%]  bg-[#ff9114] blur-[232px]  w-[310px] h-[210px]'></div>

                </div>
            </div>
        </div>
    )
}
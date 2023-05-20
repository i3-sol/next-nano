import Link from "next/link";

export default function OfferView()
{
    return(
        <div className="bg-bg-purple h-[1151px] flex flex-col z-20">
            <div className="flex flex-col">
                <div className="font-odibee text-[49px] text-center leading-[58.8px]">
                    A Quick Overview Of Our Products
                </div>

                <div className="font-odibee text-[16px] leading-[24px] text-center gradient-text text-[#ffffff00]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor
                </div>
            </div>

            <div className="flex flex-row">
                <div className="mt-[122px] ml-[9.5%] h-[604px] w-[18.5%] flex-col">
                    <div className="bg-[#000C497A] border-[#25347D] border-solid border-[1px] h-[114px] w-[100%] rounded-[4px]">

                    </div>

                    <div className="bg-[#000C497A] mt-[24px] border-[#25347D] border-solid border-[1px] h-[466px] w-[100%] rounded-[4px]">

                    </div>
                </div>

                <div className="flex flex-col mt-[64px] ml-[24px] w-[60.56%]">
                    <div className="font-Urbanist text-[24px] leading-[33.6px] font-bold">
                        World Of Warcraft
                    </div>

                    <div className="h-[734px] w-[100%] mt-[24px] flex flex-col items-center">
                        <div className="h-[355px] w-[100%] flex flex-row">
                            <div className="h-[355px] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="hidden lg:block h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>
                        </div>

                        <div className="h-[355px] w-[100%] mt-[24px] flex flex-row">
                            <div className="h-[355px] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>

                            <div className="hidden lg:block h-[355px] ml-[3.2%] w-[22.6%] rounded-[8px] bg-card-bg border-[#25347D] border-[1px] shadow-card">

                            </div>
                        </div>
                        
                        <button className="bg-main-blue font-Urbanist font-bold rounded-[8px] mt-[48px] w-[150px] min-h-[40px] appearance-none">Sign up</button>
                        
                    </div>
                </div>
            </div>
                
        </div>
    )
}
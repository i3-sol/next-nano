import Image from 'next/image'

export default function BenifitView()
{   
    return (
        <div className="bg-bg-secondary flex justify-center">
            <img className="absolute top-[1615px] left-[470px]" src="/1 (3).png" alt="" />
            <img className="absolute top-[1638px] left-[435px]" src="/1 (4).png" alt="" />
            <img className="absolute top-[1615px] right-[380px]" src="/1 (3).png" alt="" />
            <img className="absolute top-[2230px] right-[54px]" src="/1 (2).png" alt="" />
            
            <div className="w-[81%] flex items-center flex-col mt-[120px]">
                <div className="flex font-odibee text-[49px] text-center leading-[58.8px]">
                    Trading is a part of Gaming
                </div>
                <div className="flex mt-[4px] font-odibee text-[19px] leading-[24px] text-center gradient-text text-[#ffffff00]">
                    Simplify your gaming experience
                </div>

                <div className="mt-[64px] md:flex flex-row w-[100%] mb-[128px]">
                    <div className='card mx-0 mt-[20px] md:w-1/3 w-[100%] md:mx-4'>
                        <div className="h-[100%] bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                                <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                                <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                    Easy and Secure
                                </div>
                            </div>
                            <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%] pb-[30px]'>
                                Feel confident each time you transact with us. GamerProtect comes with simple process guarantee you will get what you paid!
                            </div>
                        </div>  
                    </div>
                    
                    <div className='card mx-0 mt-[20px] md:w-1/3 w-[100%] md:mx-4'>
                        <div className="h-[100%] bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                                <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                                <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                    Best Offers
                                </div>
                            </div>
                            <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%]  pb-[30px]'>
                                We carefully monitor market value everyday to give you the best offer with our Exclusive Promotion bonus.
                            </div>
                        </div>  
                    </div>

                    <div className='card mx-0 mt-[20px] md:w-1/3 w-[100%] md:mx-4'>
                        <div className="h-[100%] bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] shadow-card">
                            <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                                <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                                <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                    Customer Support
                                </div>
                            </div>
                            <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%]  pb-[30px]'>
                                We always available to assist with any queries about your order and provide exceptional after-sales support.
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import photoGroup from '../../public/photogroup.png'

export default function MainText() {
    return(
        <div className="bg-bg-purple ">
            <div className='absolute right-[-8%]  bg-[#f88a0c] blur-[232px]  w-[310px] h-[210px]'></div>
            <div className='absolute left-[-3%] top-[70%] bg-[#f708ff] blur-[232px]  w-[310px] h-[210px]'></div>
            <div>
                <img className="absolute top-[120px] right-[20px]" src="/1 (3).png" alt="" />
                <img className="absolute top-[120px] right-[40%]" src="/1 (1).png" alt="" />
                <img className="absolute top-[295px] right-[34px]" src="/1 (11).png" alt="" />
                <img className="absolute top-[370px] right-[710px]" src="/1 (5).png" alt="" />
                <img className="z-10 absolute top-[851px] left-[55px]" src="/1 (3).png" alt="" />                <img className="absolute top-[370px] right-[710px]" src="/1 (5).png" alt="" />
                <img className="z-10 absolute top-[924px] left-[34px]" src="/1 (4).png" alt="" />
            </div>
            <div className="md:h-[70vh] h-[50vh] flex items-center">
                <div className="md:w-[50%] w-100 bg-white color-white flex items-center absolute z-10 justify-center md:text-left text-center">
                    <div className="md:ml-[152px] ml-2 w-[85.37%] float-right">
                        <div className="font-odibee text-[30px] md:pt-[40px] md:text-[67px] leading-[120%] items-center md: pb-[30px]">
                            Elevate Your Gaming Experience with <span className="bg-clip-text text-[#ffffff00] gradient-text">Our Discord Server</span>
                        </div>
                        
                        <div className="text-[#8E95BB] position-relative">
                            Designed by gamer. for gamer
                        </div>

                        <Image src='/trustpilot.png' width='233' height='34' className="mt-[16px] z-0 m-auto md:ml-0" alt=''></Image>

                        <a href="https://discord.gg/997KA6FpEn">
                            <button className="bg-main-blue w-[200px] h-[54px] mt-[40px] text[16px] font-Urbanist font-bold rounded-[8px]">Start Now</button>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block md:w-[50%] h-[100%]">
                    <img className="absolute right-[363px] top-[232px]" src="/boy.png"/>
                    <img className="absolute right-[167px] top-[140px]" src="/girl.png"/>
                    <img className="absolute right-[0px] top-[47.13%]" src="/Ellipse 18.png"/>
                    
                </div>
                {/* <Image src={photoGroup} alt='' className="object-none object-right mt-[150px] right-0 ml-auto z-0"></Image>             */}
            </div>
            <div className="text-center mb-16">
                <h2 className="text-[49px] font-odibee">How it works</h2>
            </div>
            <div className="mt-6 pb-24">
                <div className="flex justify-center items-center relative">
                    <img src="/Rectangle 4351.png" alt="rectangle" className="" />
                    <div className="absolute">
                        <div className="relative flex">
                            <div className="rounded-full bg-main-blue/30 w-[132px] h-[132px] flex justify-center items-center">
                                <div className="rounded-full bg-main-blue w-[78px] h-[78px] flex justify-center items-center">
                                    <div className="w-0 h-0 ml-2
                                        border-t-[15px] border-main-blue
                                        border-l-[20px] border-l-[white]
                                        border-b-[15px] ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
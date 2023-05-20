import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <div className="flex flex-col items-center w-[100%] h-[382px] pt-[112px] bg-bg-secondary">
            <img src="/logo.png" alt="logo" className=''/>
            <div className='mt-[24px] text-center leading-[21px]'>
                <p className='text-[14px]'>NanoplayZ is where gamer buy/sell their in-game currency. Our </p>
                <p className='text-[14px]'>mission is to simplify trading process and maximize their benefits</p>
            </div>
            <div className='flex'>
                <img className='m-[15px]' src="/Facebook.png" alt="facebook" />
                <img className='m-[15px]' src="/Twitter.png" alt="twitter" />
                <img className='m-[15px]' src="/YouTube.png" alt="youtube" />
            </div>
            <div className='text-[14px] flex justify-between p-0 w-[70%] mt-[56px] pt-[20px] border-t border-slate-800'>
                <div>Copyright © 2022 Lorum Ipsum | All Rights Reserved</div>
                <div className='flex'>
                    <div className='mx-2'>Refund policy</div>
                    <div className='mx-2'>Cookie policy</div>
                    <div className='mx-2'>Cookie policy</div>
                    <div className='mx-2'>Privacy Policy</div>
                </div>
            </div>
            <div className='absolute left-[-18%]  bg-[#F300FA] blur-[232px]  w-[310px] h-[210px]'></div>
            <div className='absolute right-[-8%]  bg-[#EE9328] blur-[232px]  w-[310px] h-[210px]'></div>

            <img className="absolute top-[4200px] right-[1002px]" src="/1 (3).png" alt="" />
            <img className="absolute top-[4220px] right-[1045px]" src="/1 (15).png" alt="" />
            <img className="absolute top-[4240px] right-[1020px]" src="/1 (1).png" alt="" />
        </div>
    )
}
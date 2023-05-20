import Link from 'next/link'

export default function JoinDiscord() {
  return (
    <div className="md:flex block flex-row bg-[#000C49] items-center w-[100%] overflow-x-hidden h-[258px]">
        <div className='flex flex-col ml-[9.5%]'>
            <div className="text-[49px] text-white font-odibee">
              Become our daily suppliers !
            </div>
            <div className="text-[16px] mt-[23px] font-Urbansit w-[100%] text-white">
              Follow our gamer protection rules, we cover charge-back liability and express payout instantly 95% of the time.
            </div>
        </div>

        <a href="https://discord.gg/TfPghapWkn" className="text-[16px] mt-[20px] w-[200px] flex items-center justify-center ml-auto mr-[9.5%] font-Urbansit border-none text-center w-[13%] h-[54px] rounded-[12px] bg-[#1845F3] font-bold">
            Join Now
        </a>
    </div>
  )
}
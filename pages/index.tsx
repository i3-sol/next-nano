import { Inter } from '@next/font/google'
import Header from '@/components/global/header'
import MainText from '@/components/home/MainText'
import OfferView from '@/components/home/OfferView'
import StepsView from '@/components/home/StepsView'
import BenifitView from '@/components/home/BenifitView'
import ReviewView from '@/components/home/ReviewView'
import Blogs from '@/components/home/Blogs'
import Footer from '@/components/global/footer'
import JoinDiscord from '@/components/home/JoinDiscord'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Header/>
      <MainText/>
      <BenifitView/>
      <ReviewView/>
      <Blogs />
      <JoinDiscord/>

      <Footer/>
    </div>
  )
}
 
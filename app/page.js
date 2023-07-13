import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Weather from '@/components/Weather'
import Image from 'next/image'

export default function Home() {
  
  return (
    <main className="min-h-screen">
      <div>
        
      <Navbar/>
      <Weather/>
      <Blog/>
      <Footer/>
      </div>
    </main>
  )
}

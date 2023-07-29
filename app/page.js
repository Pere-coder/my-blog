import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Image from 'next/image'
import Weatherdisplay from '@/components/Weatherdisplay'


export default function Home() {
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div>
        <Navbar/>
        <Weatherdisplay/>
        <Blog/>
        <Footer/>
      </div>
    </main>
  )
}

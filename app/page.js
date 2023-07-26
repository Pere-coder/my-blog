import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div>
        <Navbar/>
        <Blog/>
        <Footer/>
      </div>
    </main>
  )
}

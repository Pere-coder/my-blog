import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Image from 'next/image'
import Weatherdisplay from '@/components/Weatherdisplay'
import Head from "next/head";




export default function Home() {
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div>
      <Head>
        <title>Blog | Gixblog</title>
        <meta
          name="description"
          content="This is a blog and news article page."
        />
      </Head>
        <Navbar/>
        <Weatherdisplay/>
        <Blog/>
        <Footer/>
      </div>
    </main>
  )
}

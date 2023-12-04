
import TypeJS from "@/components/lib/typejs";
import Image from "next/image";
import { GiEvilBook } from "react-icons/gi";
import { PiTerminalLight } from "react-icons/pi";
import ToukaImage from '@/assets/touka-sakura-v2-removebg-preview.png'
import { FaBookmark, FaReadme } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="container relative grid my-16 sm:grid-cols-7 space-y-10">
      <div className="sm:col-span-3">
        <div className="flex flex-col space-y-10">
          <div className="relative">
            <span className="absolute animate-pulse inset-0 blur-sm bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400"></span>
            <div className="relative flex items-center space-x-4 bg-background p-3 rounded-md font-normal">
              <GiEvilBook size={30} className="text-orange-400 " />
              <div className="flex space-x-3">
                <TypeJS text="Selamat datang di BlueAnime, Support kami dengan cara, memberikan feedback dan donasi, Join komunitas kami juga ya🧪" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-center sm:text-left">Read Manga & Streaming Anime Now</h1>
          <p>Nikmati membaca manga dan menonton anime dengan santai tanpa ganguan iklan. Tolong bantu kami dengan cara memberikan feedback dan donasi untuk membayar biaya server, Terimakasih!</p>
          <div className="flex justify-center sm:justify-start pb-16">
            <Button className={cn('bg-blue-700 w-52 py-6 flex gap-3 items-center text-white')} variant={"ghost"}>
              <FaReadme className="text-xl" />
              Mulai Membaca</Button>
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 flex justify-center">
        <div className="max-w-xs ">
          <Image src={ToukaImage} alt="Touka" />
          <div className="relative">
            <span className="absolute inset-0 blur-sm animate-pulse bg-blue-800"></span>
            <button className="relative flex justify-center space-x-6 items-center bg-background w-full p-3 rounded-md ">
              <FaBookmark size={25} className="text-purple-700" />
              <span className="text-sm font-medium">Baca Manga Disini Ya 🧪</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

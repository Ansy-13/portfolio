
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

function Home(){
  return(
    <main className="container">
      <Card className="h-[1000px]   max-w-full mt-24 shadow-2xl md:max-w-[1138px] ml-auto md:h-[700px] bg-orange-400">
 
  <CardContent>
  
      <section>

        <div className="">
          <Image 
          src="/image.png" width={500} height={500} alt="image"
          className="md:h-[400px] md:max-w-[400px] relative md:left-[734px] "
          ></Image>
        </div>
      </section>
        <div className="p-7 relative md:bottom-72 inline-block  ">
      
          <h1 style={{color:"black"}} className="font-bold" >
          UI/UX Designer
        </h1>
        <h1 className="text-2xl font-bold w-60 mt-4">
          Hello, my Name Is Anus Imran
        </h1>
        <p className="mt-2 font-serif md:max-w-[600px]">I am a dedicated UI/UX designer with a passion for creating seamless and visually engaging digital experiences. Throughout my professional career, I’ve focused on understanding user needs and translating them into intuitive, accessible designs that enhance usability and delight users. With a strong foundation in both user interface and experience design principles, I work meticulously to balance aesthetics with functionality, aiming to create products that not only look great but also provide a meaningful and enjoyable experience. My goal is to continue growing as a designer by staying at the forefront of design trends, tools, and techniques to deliver high-quality, impactful digital solutions.</p>
        </div>
      

      {/* button */}
     <div className="flex relative md:bottom-72 md:p-7">
       <Link href="/project" className="text-white bg-gray-500 hover:text-yellow-500 hover:bg-white transition-all duration-1000 delay-2000 px-4 py-2 rounded-xl shadow-xl"> Project</Link>
       <Link href="/project" className="hover:bg-yellow-500 hover:text-white hover: bg-white ml-4  text-yellow-500 p-2 rounded-xl text-center shadow-lg "> Linked-In</Link>
     </div>

  </CardContent>
  
</Card>
    </main>
  )
}

export default Home
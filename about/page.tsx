

import { InstagramLogoIcon } from "@radix-ui/react-icons"
import { FacebookIcon } from "lucide-react"
import Image from "next/image"
import Icon from "../icons/page"


function About(){
   
    
    return(
        <main>
            <section>
               <div className="mt-20 p-4 md:ml-[900px] inline-block relative md:top-20">
               <Image width={500} height={500} src="/image.png"alt="this is a image"/>
               </div>
                <div className="mt-10 p-4 relative md:bottom-[350px] inline-block md:p-8 md:ml-40 para">
                    <h1 className="font-bold font-serif text-3xl md:inline-block">About Me</h1>
                    <p className="font-sans mt-4 md:w-[500px]">Hello Every one i am Anus Imran and i am UI/UX designer After this I did Some other course Like The Game development And I learn the back-end of the Website and then after this quarter we learn the agentic AI and cloud computing and many other stuff And i recently Complete my Matric/O level and now i studed further and complete my Inter curriculum and after this i complete my bachelor Inshallah </p>
                </div>
            </section>
            <section>
                <div className="flex justify-center ">
              <InstagramLogoIcon className="w-[40px] h-[50px]"/>
              <FacebookIcon  className="w-[40px] h-[50px]"/>
              <Icon/>
                </div>
            </section>
        </main>
    )
}
export default About
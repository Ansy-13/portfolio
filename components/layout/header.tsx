import Link from "next/link";

export default function Header(){
    return(
        <main>
            <section>
               
               <div className="flex justify-between">
                 <div>
                    logo
                    
                </div>
                <ul>
                    <li className="space-x-5 mr-4">
                        <Link href="/" className="">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/projects">Project</Link>
                    </li>
                </ul>
                </div>
            </section>
        </main>
    )
}
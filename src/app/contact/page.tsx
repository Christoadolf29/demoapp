import Image from "next/image";
import Link from "next/link";
import contactImage from '../images/contact.jpg';

export default function Contact(){
  return(

    <>
      <header className="text-white p-12">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl italic font-serif font-bold">Chief Pillai</h1>
          <span className="bg-clip-text font-serif text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Main restrarunt</span>
          <ul className="flex">
            <li className="mr-10 text-1xl">
              <Link href="/" legacyBehavior><a className="text-white">Home</a></Link>
            </li>
            <li className="mr-10 text-1xl">
              <Link href="/about" legacyBehavior><a className="text-white">About</a></Link>
            </li>
            <li className="mr-10 text-1xl">
              <Link href="/contact" legacyBehavior><a className="text-white">Contact</a></Link>
            </li>
            <li className="mr-10 text-1xl">
              <Link href="/services" legacyBehavior><a className="text-white">Services</a></Link>
            </li>
          </ul>
        </div>
      </header>
    
      <div className="container mx-auto flex justify-between items-start">
        <section className="md:w-1/2 mx-12 text-2xl italic font-sans mt-4 text-white min-h-screen flex flex-col justify-center ">
          <p>Located in: Le Meridien Kochi</p>
          <p>Address: Le Meridien Kochi, Nettoor, Maradu, Kochi Ernakulam, Kerala 682304</p>
          <p>Hours: Open Closes 11 pm</p>
          <p>Phone: 089438 50000</p>
          <br />
        </section>
        <aside className="md:w-1/2 flex justify-center p-8 items-center">
         <Image src={contactImage}
         alt="image alt"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         width={5000}
         height={5000}
         >

         </Image>
        </aside>
      </div>
      <footer className="text-left mt-4 text-white">
      </footer>
    </>
  );
}
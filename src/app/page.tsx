import Image from "next/image"
import Link from "next/link";
import homeImage from './images/home.jpg';

export default function Home(){
  return(
    <div>
    <header className="text-white p-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl italic font-serif font-bold">Chief Pillai</h1>
        <ul className="flex">
          <li className="mr-10text-1xl">
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

    <div className="container mx-auto flex justify-between items-center">
      <section className="md:w-1/2 text-center italic font-sans text-2xl mt-4 text-white min-h-screen flex flex-col justify-center ">
        <p>Suresh Pillai is an Indian-born British chef and restaurateurant</p>
        <p>Born: 25 April 1978 (age 45 years), Kollam</p>
        <p>Citizenship: British</p>
        <br />
        <br />
      </section>

      <aside className="md:w-1/2 flex justify-center p-6 items-left">
      <Image src={homeImage}
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
  </div>

  );
}
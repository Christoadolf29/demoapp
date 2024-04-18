import Image from "next/image"
import Link from 'next/link';
import aboutImage from '../images/about.jpg';

const About = () => (
  <div>
    <br />
    <header className="text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl italic font-serif font-bold">Chief Pillia</h1>
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

    <div className="container mx-auto flex justify-between items-center">
      <section className="md:w-1/2 text-center text-2xl italic font-sans mt-4 text-white min-h-screen flex flex-col justify-center">
        <p> Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
      </section>

      <aside className="md:w-1/2 flex justify-center p-6 items-center">
      <Image src={aboutImage}
         alt="image alt"
         sizes="(max-width: 7680px) 100vw, (max-width: 1200px) 500vw, 330vw"
         width={5000}
         height={5000}
         >

         </Image>
        <h1>test</h1>
      </aside>
    </div>

    <footer className="text-center mt-4 text-white">
      <p></p>
    </footer>
  </div>
);

export default About;
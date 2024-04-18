import Image from "next/image";
import Link from 'next/link';
import servicesImage from '../images/services.jpg';

const Services = () => (
  <div>
    <br />
    <header className="text-white p-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl italic font-serif font-bold">Chief Pillai</h1>
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
      <section className="md:w-1/2 text-center italic font-sans text-2xl mt-4 text-white min-h-screen flex flex-col justify-center">
        <p>Signature dishes: Chef Pillai's dishes include steak,lobster,and meen BBC</p>
        <p>Dessert: Unniappam falooda,Kerala's finest sweet unniappams,after meal</p>
        <p>Service: The staff is courteous and prompt</p>
      </section>

      <aside className="px-1.5 md:w-1/2 flex justify-center p-12 items-center">
      <Image src={servicesImage}
         alt="image alt"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) p-6 50vw, 33vw"
         width={5000}
         height={5000}
         >

         </Image>
      </aside>
    </div>

    <footer className="text-center mt-4 text-white">
    </footer>
  </div>
);

export default Services;
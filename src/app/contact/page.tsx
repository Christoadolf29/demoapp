import Link from "next/link";

export default function Contact(){
  return(

    <>
      <header className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Contact</h1>
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
        <section className="md:w-1/2 mx-12 text-2xl mt-4 text-white min-h-screen flex flex-col justify-center ">
          <p>Located in: Le Méridien Kochi</p>
          <p>Address: Le Méridien Kochi, Nettoor, Maradu, Kochi, Ernakulam, Kerala 682304</p>
          <p>Hours: Open ⋅ Closes 11 pm</p>
          <p>Phone: 089438 50000</p>
          <br />
        </section>
        <aside className="md:w-1/2 flex justify-center items-center">
          <img src="/3-removebg-preview.png" alt="Image" className="max-w-full h-auto" />
        </aside>
      </div>
      <footer className="text-center mt-4 text-white">
      </footer>
    </>
  );
}
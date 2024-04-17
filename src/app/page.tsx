import Link from "next/link";

export default function Home(){
  return(
    <div>
    <header className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chief Pillai</h1>
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
      <section className="md:w-1/2 text-center text-4xl mt-4 text-white min-h-screen flex flex-col justify-center ">
        <p>Suresh Pillai is an Indian-born British chef and restaurateur</p>
        <p>Born: 25 April 1978 (age 45 years), Kollam</p>
        <p>Citizenship: British
</p>
        <br />
        <br />
        <p>Let me show my life!!!</p>
        <p>Let's have some fun together in the journey!!</p>
      </section>

      <aside className="md:w-1/2 flex justify-center items-center">
        <img src="/1-removebg-preview.png" alt="Image" className="max-w-full h-auto" />
      </aside>
    </div>

    <footer className="text-center mt-4 text-white">
      <p>Copyright</p>
    </footer>
  </div>

  );
}
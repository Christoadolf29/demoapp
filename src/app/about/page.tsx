import Link from 'next/link';

const About = () => (
  <div>
    <br />
    <header className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chief Pillia</h1>
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
        <p> Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
      </section>

      <aside className="md:w-1/2 flex justify-center items-center">
        <img src="D:\vs\demoapp\public" alt="Image" className="max-w-full h-auto" />
      </aside>
    </div>

    <footer className="text-center mt-4 text-white">
      <p></p>
    </footer>
  </div>
);

export default About;
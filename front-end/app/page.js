"use client";

import Head from 'next/head';
import Navbar from '../components/Navbar'; // Adjust the import path if necessary
import Footer from '../components/Footer'; // Adjust the import path if necessary
import Card from '../components/card'; // Ensure the correct path to the Card component
import Link from 'next/link'; // Import Link from next/link



const products = [
  {
    image: 'https://via.placeholder.com/300',
    description: 'Stylish Chair',
    price: 99.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Modern Sofa',
    price: 299.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Wooden Table',
    price: 149.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Wooden Table',
    price: 149.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Wooden Table',
    price: 149.99,
  },
];

const Home = () => {
  const handleBuyNow = (product) => {
    alert(`Buying ${product.description} for $${product.price}`);
  };

  

  return (
    <>
      <div className="" style={{ backgroundColor: '#135D66' }}>
        <Head>
          <title>Furniture Website</title>
          <meta name="description" content="Furniture marketplace and categories" />
        </Head>
        <Navbar />

        <section className="py-10 max-h-[500px] md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <img
        src="/placeholder.svg"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
      />
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            Elevate Your Space with Furniture Rental
          </h1>
          <p className="max-w-[400px] text-muted-foreground md:text-xl">
            Discover a world of stylish and comfortable furniture, delivered to your doorstep. Rent, enjoy, and
            return hassle-free.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-h-[300px] sm:flex-row"> {/* Adjusted min-height */}
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Browse Catalog
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



        <main className="flex flex-col items-center justify-center h-screen">
          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className="text-6xl font-bold mb-6">Welcome to the Furniture Website</h1>
            <p className="text-lg mb-10">Explore our furniture categories.</p>
          </div>
           <div className="flex overflow-x-auto space-x-4 p-4 scroll-container">
    {products.map((product, index) => (

      <Card
        key={index}
        image={product.image}
        description={product.description}
        price={product.price}
        onBuyNow={() => handleBuyNow(product)}
        className="scroll-item"
      />
    ))}
  </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

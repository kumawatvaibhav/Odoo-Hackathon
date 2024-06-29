"use client";

import Head from 'next/head';
import Navbar from '../components/Navbar'; // Adjust the import path if necessary
import Footer from '../components/Footer'; // Adjust the import path if necessary
import Card from '../components/card'; // Ensure the correct path to the Card component



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
    description: 'Classic Lamp',
    price: 59.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Bookshelf',
    price: 199.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Modern Desk',
    price: 249.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Comfy Armchair',
    price: 129.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Elegant Bed',
    price: 399.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Dining Set',
    price: 499.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Office Chair',
    price: 149.99,
  },
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
    description: 'Classic Lamp',
    price: 59.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Bookshelf',
    price: 199.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Modern Desk',
    price: 249.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Comfy Armchair',
    price: 129.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Elegant Bed',
    price: 399.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Dining Set',
    price: 499.99,
  },
  {
    image: 'https://via.placeholder.com/300',
    description: 'Office Chair',
    price: 149.99,
  },
];

const Home = () => {
  const handleBuyNow = (product) => {
    alert(`Buying ${product.description} for $${product.price}`);
  };

  

  return (
    <>
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#135D66' }}>
      <Head>
        <title>Furniture Website</title>
        <meta name="description" content="Furniture marketplace and categories" />
      </Head>
      <Navbar />
      <main className="flex-grow p-4">
        <div className='text-center mb-8'>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              description={product.description}
              price={product.price}
              onBuyNow={() => handleBuyNow(product)}
            />
          ))}
        </div>
        <div>
          <button className='w-screen h-15 my-10 bg-gray-900 shadow text-white px-4 py-2 rounded-lg'>
                Back to home
          </button>
        </div>
      </main>
      <Footer />
    </div>
  </>
);
};

export default Home;

import React from 'react';
import '../App.css'; // Assuming your CSS is directly accessible and compatible with React
// import 'simple-grid.css'; // Adjust the import path as needed

const Home2 = () => {
  return (
    <div>
      <nav className="nav flex justify-between h-[70px]" style={{ backgroundColor: 'black' }}>
        <div className="logo hover:cursor-pointer">
          <a href="index.html" className="p-4 text-white font-extrabold py-4 text-3xl">221 B</a>
        </div>
        
      </nav>

      
      <div className="bg-[rgb(16,21,23)] text-center h-[300px] relative">
        <h1 className="text-white">Blog with the best.</h1>
        
      </div>

     
      <main className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img src="./images/light.jpg" alt="Blog Image" className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Blog Title 1</h2>
            <p className="text-gray-700">Blog Description 1...</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </article>
        {/* Additional articles... */}
      </main>

      {/* Carousel section... */}
    </div>
  );
};

export default Home2;

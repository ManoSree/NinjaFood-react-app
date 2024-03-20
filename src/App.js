
// import React from 'react';
// import './App.css';
// import {Link} from 'react-router-dom'
// function App() {
//   return (
//     <div className="text-gray-700 font-serif font-bold ">
//       <nav>
//         <h1 className='text-red-800 text-5xl font-bold uppercase border-b p-10 text-center'>
//           <Link to="/"><span className='text-green-600'>F</span>ood <span className='text-green-600'>N</span>inja</Link>
//         </h1>
//       </nav>
//       <main className='px-16 py-6 bg-gray-100'>
//         <section className="login-signup px-16 py-16 flex justify-center md:justify-end">
//           <Link to="/login" className='text-primary mr-3'>Login</Link>
//           <Link to="/signup" className='text-primary'>SignUp</Link>
//         </section>
//         <header>
//           <h2 className='text-gray-600 text-5xl'>Recipes</h2>
//           <h3>For Ninjas</h3>
//         </header>
//         <section className="mt-12">
//           <h4 className='font-bold mt-12 pb-3 border-b border-gray-200'>Latest Recipes</h4>
//           {/* Grid layout for cards */}
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
//             {/* Card 1 */}
//             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
//               <img src="stew.jpg" alt="Bean Chilli Stew" className='w-full h-48 object-cover' />
//               <div className='p-4'>
//                 <h5 className='font-bold'>Bean Chilli Stew</h5>
//                 <p>Recipe by Mario</p>
//               </div>
//               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
//                 <span>25 mins</span>
//               </div>
//             </div>
//             {/* Card 2 */}
//             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
//               <img src="curry.jpg" alt="Vegetable Curry" className='w-full h-48 object-cover' />
//               <div className='p-4'>
//                 <h5 className='font-bold'>Vegetable Curry</h5>
//                 <p>Recipe by Mario</p>
//               </div>
//               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
//                 <span>30 mins</span>
//               </div>
//             </div>
//             {/* Card 3 */}
//             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
//               <img src="noodles.jpg" alt="Yummy Chilli Noodles" className='w-full h-48 object-cover' />
//               <div className='p-4'>
//                 <h5 className='font-bold'>Yummy Chilli Noodles</h5>
//                 <p>Recipe by Mario</p>
//               </div>
//               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
//                 <span>20 mins</span>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Placeholder for more content or sections */}
//         <div className='flex justify-center mt-12'>
//           <button className='bg-secondary-100 text-secondary-200 px-5 py-2 rounded hover:bg-secondary-200 hover:text-secondary-100 transition-colors duration-300' onClick={() => console.log('Load more recipes...')}>Load More</button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Bruschetta from './bruschetta.jpg';
import GourmetImage from './caprese-salad.webp';
import ClassicItalianImage from './fettuccine-pomodoro.webp';
import Lasagna from './lasagna.webp';
import Tiramisu  from './tiramisu-cake.jpg';
import Pannetonne from './pannetonne.jpg'



function App() {
  return (
    <div className="text-gray-700 font-serif font-bold">
      <nav>
        <h1 className='text-red-800 text-5xl font-bold uppercase border-b p-10 text-center'>
          <Link to="/"><span className='text-green-600'>F</span>ood <span className='text-green-600'>N</span>inja</Link>
        </h1>
       
      </nav>
      <main className='px-16 py-6 bg-gray-100'>
     
        <section className="introduction my-8">
          <h2 className='text-4xl font-semibold text-gray-800'>Welcome to Food Ninja</h2>
          <p className='mt-2 text-lg text-gray-600'>Discover the world's best recipes and kitchen tips. Every day, new ideas and inspirations!</p>
        </section>
      
        {/* <section className="featured-recipe my-8 p-4 bg-red-100 rounded-lg shadow">
          <h3 className='text-3xl font-semibold text-gray-800'>Featured Recipe: Classic Italian Recipes</h3>
          <p className='mt-2 text-gray-600'>This month's spotlight is on the perfect Italian pizza. Discover the secrets to making your pizza just like in Naples!</p>
             <h4 className='font-bold mt-12 pb-3 border-b border-gray-200'>Latest Recipes</h4>
       
           <div className='flex flex-cols-1 sm:flex-cols-2 lg:flex-cols-3 gap-4 mt-4 '>
      
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
               <img src={ItalianImage} alt="Bean Chilli Stew" className='w-full h-48 object-cover' />
              <div className='p-4'>
                 <h5 className='font-bold'>Bean Chilli Stew</h5>
                <p>Recipe by Mario</p>
               </div>
               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                 <span>25 mins</span>
               </div>
             </div>
             
             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
               <img src={GourmetImage} alt="Vegetable Curry" className='w-full h-48 object-cover' />
               <div className='p-4'>
                 <h5 className='font-bold'>Vegetable Curry</h5>
                 <p>Recipe by Mario</p>
               </div>
               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'><span>30 mins</span>
              </div>
             </div>
             
             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
               <img src={ClassicItalianImage} alt="Yummy Chilli Noodles" className='w-full h-48 object-cover' />
               <div className='p-4'>
                 <h5 className='font-bold'>Yummy Chilli Noodles</h5>
                <p>Recipe by Mario</p>
               </div>
               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                 <span>20 mins</span>
               </div>
             </div>
             <div className='bg-white rounded overflow-hidden shadow-lg relative'>
               <img src={GourmetImage} alt="Vegetable Curry" className='w-58 h-48 object-cover' />
               <div className='p-4'>
                 <h5 className='font-bold'>Vegetable Curry</h5>
                 <p>Recipe by Mario</p>
               </div>
               <div className='bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'><span>30 mins</span>
              </div>
             </div>
       </div>
       </section> */}

<section className="featured-recipe my-8 p-4 bg-red-100 rounded-lg shadow">
          <h3 className='text-3xl font-semibold text-gray-800'>Featured Recipe: Classic Italian Recipes</h3>
          <p className='mt-2 text-gray-600'>This month's spotlight is on the perfect Italian recipes. Discover the secrets to making your recipe just like in Naples!</p>
          <h4 className='font-bold mt-12 pb-3 border-b border-gray-200'>Latest Recipes</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={Bruschetta} alt="Bean Chilli Stew" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'>Bruschetta</h5>
                <p>Recipe by Massimo Bottura</p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>25 mins</span>
              </div>
            </div>
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={GourmetImage} alt="Caprese Salad with Pesto Sauce" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'>Caprese Salad with Pesto Sauce</h5>
                <p>Recipe by Gualtiero Marchesi </p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>30 mins</span>
              </div>
            </div>
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={ClassicItalianImage} alt=" Fettuccine Pomodoro" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'> Fettuccine Pomodoro</h5>
                <p>Recipe by Carlo Cracco</p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>35 mins</span>
              </div>
            </div>
            
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={Lasagna} alt=" Lasagna" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'> Lasagna</h5>
                <p>Recipe by Antonia Klugmann</p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>20 mins</span>
              </div>
            </div>
            
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={Tiramisu} alt="Tiramisu - The 'pick-me-up' cake" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'>Tiramisu - The 'pick-me-up' cake</h5>
                <p>Recipe by Enrico Crippa</p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>20 mins</span>
              </div>
            </div>
            
            <div className='bg-white rounded overflow-hidden shadow-lg relative'>
              <img src={Pannetonne} alt="Panettone" className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='font-bold'>Panettone</h5>
                <p>Recipe by Giorgio Locatelli </p>
              </div>
              <div className='bg-red-300 text-secondary-400 text-xs uppercase font-bold rounded-full p-2 absolute bottom-4 right-4'>
                <span>25 mins</span>
              </div>
            </div>
            
          </div>
        </section>

          <Link to="/recipes/classic-italian-pizza" className='inline-block mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors'>Read More</Link>
    
     
        <footer className="mt-12 bg-gray-800 text-white text-center p-4">
          
          <div className="mt-4">
            © 2024 Food Ninja, Inc. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

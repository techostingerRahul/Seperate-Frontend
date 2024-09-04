import React, { useState } from 'react';
import './assets/userprofile.css';

const Userprofile = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
  ];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bgimg">
      <div className="m-4 p-4 border">
        {/* Row 1 */}
        <div className="grid grid-cols-10 gap-4 mb-4">
          {/* Left Division (30% width) */}
          <div className="col-span-4 flex flex-col justify-between">
            <div className="h-[90%] border p-4">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Placeholder"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[8%] border p-4 mt-2">
              <h3>Left Div Row 2</h3>
              <p>Additional dummy content for the second row of the left division.</p>
            </div>
          </div>
          
          {/* Right Division (60% width) */}
          <div className="col-span-6 flex flex-col justify-between">
            <div className="h-[25%] border p-4 mb-3">
              <h3>Right Div Row 1</h3>
              <p>Dummy content for the first row of the right division.</p>
            </div>
            <div className="h-[25%] border p-4 mb-3">
              <h3>Right Div Row 2</h3>
              <p>More dummy content for the second row of the right division.</p>
            </div>
            <div className="h-[44%] border p-4">
              <h3>Right Div Row 3</h3>
              <p>Even more dummy content for the third row of the right division.</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* 1st Grid */}
          <div className="flex flex-col gap-4">
            <div className="border p-4">
              <h3>1st Grid Div 1</h3>
              <p>Dummy content for the first div of the first grid.</p>
            </div>
            <div className="border p-4">
              <h3>1st Grid Div 2</h3>
              <p>Dummy content for the second div of the first grid.</p>
            </div>
            <div className="border p-4">
              <h3>1st Grid Div 3</h3>
              <p>Dummy content for the third div of the first grid.</p>
            </div>
          </div>

          {/* 2nd Grid */}
          <div className="flex flex-col gap-4">
            <div className="border p-4">
              <h3>2nd Grid Div 1</h3>
              <p>Dummy content for the first div of the second grid.</p>
            </div>
            <div className="border p-4">
              <h3>2nd Grid Div 2</h3>
              <p>Dummy content for the second div of the second grid.</p>
            </div>
            <div className="border p-4">
              <h3>2nd Grid Div 3</h3>
              <p>Dummy content for the third div of the second grid.</p>
            </div>
          </div>

          {/* 3rd Grid */}
          <div className="flex flex-col justify-between h-full">
            <div className="border p-4">
              <h3>3rd Grid Div 1</h3>
              <p>Dummy content for the first div of the third grid.</p>
            </div>
            <div className="border p-4 mt-auto">
              <h3>3rd Grid Div 2</h3>
              <p>Dummy content for the second div of the third grid.</p>
            </div>
          </div>
        </div>

        {/* Row 3: Product Slider */}
        <div className="flex items-center justify-between p-4 border">
          <button
            onClick={handlePrevClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            disabled={currentIndex === 0}
          >
            Prev
          </button>

          <div className="flex overflow-hidden w-full mx-4">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center p-4 border">
                  <h3>{product}</h3>
                  <p>Some details about {product}.</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            disabled={currentIndex === products.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;



















// import React from 'react';
// import './assets/userprofile.css';

// const Userprofile = ({ id }) => {
//   return (
//     <div className="bgimg">
//       <div className="flex flex-col lg:flex-row justify-center mt-10 mx-5">
//         {/* Left Column */}
//         <div className="lg:w-[26%] w-full mb-5 lg:mb-0 flex flex-col">
//           {/* Image Div */}
//           <div className="h-[200px] lg:h-[70%] bg-gray-200 flex justify-center items-center p-0 m-0 rounded-lg overflow-hidden">
//             <img
//               src="https://via.placeholder.com/300x450"
//               alt="Demo Image"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           {/* Image Slider */}
//           <div className="h-[40px] lg:h-[10%] bg-gray-300 flex justify-center items-center mt-1 rounded-lg">
//             <p>Image Slider - Thumbnail 1 | Thumbnail 2 | Thumbnail 3</p>
//           </div>
//         </div>

//         {/* Gap Between Columns */}
//         <div className="lg:w-[5%] w-full lg:my-0 my-5"></div>

//         {/* Right Column */}
//         <div className="lg:w-[55%] w-full flex flex-col">
//           {/* Right Top Div */}
//           <div className="h-[100px] lg:h-[15%] bg-blue-200 flex justify-center items-center mb-12 rounded-lg shadow-lg shadow-pink-300">
//             <p>
//               <strong>Top Content:</strong> Some introductory text or heading for the right column. You can place anything here, like a summary or overview.
//             </p>
//           </div>
//           {/* Right Middle Div */}
//           <div className="h-[100px] lg:h-[15%] bg-blue-300 flex justify-center items-center mb-8 rounded-lg shadow-lg shadow-pink-300">
//             <p>
//               <strong>Middle Content:</strong> This section could contain details, descriptions, or other relevant information.
//             </p>
//           </div>
//           {/* Right Bottom Div */}
//           <div className="h-[150px] lg:h-[30%] bg-blue-400 flex justify-center items-center rounded-lg shadow-lg shadow-pink-300">
//             <p>
//               <strong>Bottom Content:</strong> This area is perfect for a larger block of content, such as a list, paragraph, or even a small gallery.
//             </p>
//           </div>
//         </div>
//       </div>
      







//     </div>
//   );
// };

// export default Userprofile;

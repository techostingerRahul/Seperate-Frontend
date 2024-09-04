// import { useState } from "react";

// const images = [
//   "https://source.unsplash.com/random/360x450?1",
//   "https://source.unsplash.com/random/360x450?2",
//   "https://source.unsplash.com/random/360x450?3",
//   "https://source.unsplash.com/random/360x450?4",
//   "https://source.unsplash.com/random/360x450?5",
// ];

// export default function ImageCarousel() {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="relative h-[90%] border p-4 rounded-lg">
//         <img
//           src={images[currentImage]}
//         //   alt={`Profile ${currentImage + 1}`}
//           className="h-96 w-72 object-cover rounded-lg"
//         />
//         <button
//           onClick={prevImage}
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2"
//         >
//           <img src="./arrow2.svg" alt="Left Arrow" className="h-8 w-8" />
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2"
//         >
//           <img src="./arrow.svg" alt="Right Arrow" className="h-8 w-8" />
//         </button>
//       </div>
//       <div className="text-center border mt-4">
//         <h3 className="no-underline">Carousel</h3>
//       </div>
//       <div className="flex space-x-2 mt-4">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`h-2 w-2 rounded-full ${
//               currentImage === index ? "bg-purple-500" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1686081120091-393475e0eff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8?1",
  "https://images.unsplash.com/photo-1724805053809-3c09736b2ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8?2",
  "https://images.unsplash.com/photo-1724674117588-088d2781cb81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8?3",
  "https://plus.unsplash.com/premium_photo-1697778136245-d0d67de916ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D?4",
  "https://images.unsplash.com/photo-1724775255163-b0f5f5241642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D?5",
];

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col ">
      <div className="relative h-[90%]  rounded-lg">
        <img
          src={images[currentImage]}
           style={{height:"723px",width:"430px"}}
          className="h-139 ml-12 w-80 rounded-lg"
        />
      </div>
      <div className="flex mt-4 space-x-4 mb-3">
        <button
          onClick={prevImage}
          className="bottom-2 left-2  bg-white rounded-full "
        >
          <img src="./arrow2.svg" alt="Left Arrow" className="h-23 w-23"  style={{marginLeft:"40px"}}/>
        </button>



        <div className="flex justify-center space-x-2 mt-12 "
        style={{marginRight:"120px",marginLeft:"210px", justifyContent:"center"}}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full  ${
              currentImage === index ? "bg-purple-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

        <button
          onClick={nextImage}
          className="  bottom-2 right-3 bg-white rounded-full "
        //   style={{marginLeft:"200px"}}
        >
          <img src="./arrow.svg" alt="Right Arrow" className="h-10 w-10" style={{marginRight:"100px"}} />
        </button>
      </div>
     
      
    </div>
   

  );
}

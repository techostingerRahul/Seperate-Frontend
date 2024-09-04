import React, { useState } from "react";
import ImageCarousel from "./carousel";

const ViewProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="mt-20 ml-30 mr-40 pr-40" style={{ paddingLeft: "120px" }}>
      {/* Row 1 */}
      <div className="flex mb-4">
        {/* Left Division */}

        <div className="flex flex-col flex-shrink justify-between">
          {/* <div className="h-[90%] border p-4 rounded-lg">
            <img
              src="https://source.unsplash.com/random/360x450" // User's profile photo
              alt="Profile"
              className="h-96 w-96 object-fill rounded-lg"
            />
          </div> */}
          <ImageCarousel />

          {/* <h3 className="no-underline">Carousel</h3> */}
        </div>

        {/* Right Division */}
        <div className="flex flex-col justify-between p-0 m-0 ">
          <div className="h-[20%] border p-4 flex items-center mt-3 justify-between rounded-lg shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h3 className="font-semibold text-3xl no-underline">
                    Shrinidhi S
                  </h3>
                  <span className="ml-2 text-gray-500 text-2xl">,24</span>
                  <img
                    src="/path-to-your-badge-icon.png"
                    alt="VIP Badge"
                    className="w-5 h-5 ml-2"
                  />
                </div>
                <p className="text-gray-500 text-2xl mt-1">
                  Thiruvananthapuram, Karnataka
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-3 mb-3">
                <button className="text-purple-500">
                  <img src="./share.svg" onClick={openModal} className="text-purple-500 w-6 h-6 hover:bg-red-400" alt="Share Icon" />
                </button>

                <button className="text-purple-500">
                  <img
                    src="./arrow2.svg"
                    className="w-7 h-7"
                    alt="Left Arrow Icon"
                  />
                </button>

                <button className="text-purple-500">
                  <img
                    src="./arrow.svg"
                    className="w-7 h-7"
                    alt="Right Arrow Icon"
                  />
                </button>
              </div>
              <button className="bg-green-500 text-lg text-white px-2 py-1 mb-1 rounded-full">
                Connect
              </button>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                <div className="bg-white  rounded-3xl max-w-lg shadow-lg bg-pink-100  bg-opacity-100 relative" style={{ width: "500px", height: "340px" }}>
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-500"
                  >
                    <img src="./cancel.svg" className="w-6 h-6" alt="Close" />
                  </button>
                  <div className="flex flex-row items-center">
                    <div>
                      <img
                        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                        alt="User Image"
                        className="rounded inline"
                        style={{ width: "240px", height: "340px", maxWidth: "260px" }}
                      />
                    </div>
                    <div className="pl-7 mb-13">
                      <h3 className="text-2xl font-bold mb-15">Shrinidhi S, 24</h3>
                      <p className="text-gray-500 mb-4">Bengaluru, Karnataka.</p>
                      <div className="mb-4">
                        <img src="./R.png" alt="QR Code" className="w-44 h-45" />
                      </div >
                      <div className="flex justify-between space-x-4">
                        <button className="text-purple-500 rounded-full border-2 border-black ">
                          <img src="./share.svg" className=" w-5 h-5 m-2" alt="Share Icon" />
                        </button>
                        <button className="text-purple-500 rounded-full border-2 border-black">
                          <img src="./qqq.svg" className="w-5 h-4 m-2" alt="Copy Icon" />
                        </button>
                        <button className="text-purple-500 rounded-full border-2 border-black">
                          <img src="./rrr.svg" className="w-6 h-6 m-2" alt="Download Icon" />
                        </button>
                      </div>

                    </div>


                  {/* User Name ka  */}
                    {/* <div className="">
                    <div className="transform rotate-90 origin-top-left text-black text-xs pl-3  font-normal font-lato break-words">
                      @shri1234
                    </div>
                    </div> */}




                  </div>
                </div>
              </div>
            )}


          </div>

          <div className="h-[15%] border mb-2 flex flex-col mb-4 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]  ">
            <span className="text-2xl font-bold mb-1 ml-2 mt-2">
              Contact Info:
            </span>
            <div className="flex flex-row ml-2 mt-4 text-lg ">
              <span className="mr-20 ml-2 flex flex-row font-1xl w-10 h-5">
                {" "}
                <img src="./phone.svg" className="mr-2 w-15 h-15" /> Mobile
              </span>
              <span className="ml-10 mr-40 flex flex-row w-10 h-5">
                {" "}
                <img src="./mail.svg" className="mr-2" /> Email
              </span>
              <span>
                <img src="" alt="premium image" />
              </span>
            </div>
          </div>

          <div className="h-[35%] border p-4 overflow-auto shadow-[0px_0px_20px_rgba(171,29,121,0.5)]" style={{ "marginBottom": "120px" }} >
            <h3 className="text-2xl font-bold mb-2 overflow-hidden">
              About Profile
            </h3>
            <p
              className="text-md overflow-hidden color: #000;

font-family: Lato;
font-size-18px;
font-style-normal;
font-weight-400;
line-height-147%;"
            >
              I am looking for a suitable partner for my daughter.She has
              completed her B.E / B.Tech.We are from Hubli Karnataka.we are
              looking for the family from Karanataka with good background. Her
              optimistic personality is adored by one and all.If you like the
              profile, feel free to contact us on WhatsAppI am looking for a
              suitable partner for my daughter.She has completed her B.E /
              B.Tech.We are from Hubli Karnataka.we are looking for the family
              from Karanataka with good background. Her optimistic personality
              is adored by one and all.If you like the profile, feel free to
              contact us on WhatsApp with good background. Her optimistic
              personality is adored by one and all.If you like the profile, feel
              free to contact us on WhatsApp with good background. Her
              optimistic personality is adored by one and all.If you like the
              profile, feel free to contact us on WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3 gap-6 mb-10 " style={{ gridTemplateColumns: "9fr 7fr 7fr" }}>
        <div className="h-100 w-125 " >
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mt-6 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]" style={{ gridTemplateRows: "100px auto 50px" }}>
            <h2 className="text-[22px] font-medium text-2xl mb-4">Basic info:</h2>
            <div className="space-y-2 text-[14px] font-lato ">
              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left text-1xl font-bold">Born on</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 ml-5 text-left font-semibold text-1xl">
                  <span>20th July 1998</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">
                  Martial Status
                </span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 ml-5 text-left font-semibold text-1xl">
                  <span>Never Married</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">Mother Tongue</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 ml-5 text-left font-semibold text-1xl">
                  <span>Kannade</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">Lives in</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 ml-5 text-left font-semibold text-1xl">
                  <span>Tamil Nadu</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">Height</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 ml-5 text-left font-semibold text-1xl">
                  <span>5'5 Feet</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">Religion</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold ml-5 text-1xl">
                  <span>Hindu</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">Habbit</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold ml-5 text-1xl">
                  <span>Cricket</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-2/4 text-left font-bold text-1xl">
                  Diet Preference
                </span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold ml-5 text-1xl">
                  <span>Vegeratian</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-100 w-120 ml-4 pl-15 pb-30">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mt-8 mb-10 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium text-2xl mb-4">Education:</h2>
            <div className="space-y-2 text-[14px] font-lato">
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold text-1xl">Qualifcation</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-2xl text-left font-semibold">
                  <span>B.com</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold text-1xl">Collage</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold text-1xl">
                  <span>DTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-6 rounded-lg  max-w-80 mx-auto mt-6 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium mb-4 text-5xl">
              Hobbies & Interest:
            </h2>
            <div className="  text-[14px] font-lato flex flex-row gap-3">
              <span className="flex flex-col gap-3">
                <div
                  className="text-center w-45 h-13 font-semibold text-lg"
                  style={{ borderRadius: 21.92, border: "1px black solid" }}
                >
                  Cricket
                </div>
                <div
                  className="text-center w-20 h-7 font-semibold text-lg"
                  style={{ borderRadius: 21.92, border: "1px black solid" }}
                >
                  Movies
                </div>
                <div
                  className="text-center w-20 h-7 font-semibold text-lg"
                  style={{ borderRadius: 21.92, border: "1px black solid" }}
                >
                  Movies
                </div>
              </span>
              <span className="flex flex-col gap-3">
                <div
                  className="text-center w-20 h-7 font-semibold text-lg"
                  style={{ borderRadius: 21.92, border: "1px black solid" }}
                >
                  Pets
                </div>
                <div
                  className="text-center w-20 h-7 font-semibold "
                  style={{ borderRadius: 21.92, border: "1px black solid" }}
                >
                  Music
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mt-6 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium mb-4">Family Background:</h2>
            <div className="space-y-2 text-[14px] font-lato ">
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Father</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>Private Job</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Mother</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>HousWife</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">
                  Family Live in
                </span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>Kannade</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">
                  No. of Brother
                </span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>4</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">
                  No. of Sisters
                </span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>5</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Family Status</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto  shadow-[0px_0px_20px_rgba(171,29,121,0.5)]" >
            <h2 className="text-[22px] font-medium mb-4">Career:</h2>
            <div className="space-y-2 text-[14px] font-lato">
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Profession</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>B.com</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Company</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>DTU</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-1/3 text-left font-bold">Annual Income</span>
                <span className="w-1/12 text-center">:</span>
                <div className="w-1/2 text-left font-semibold">
                  <span>DTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-8">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mb-110 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium mb-4">Astro Detials :</h2>
            <div className="space-y-2 text-[14px] font-lato">
              <div className="flex justify-between items-center">
                <p className="w-full text-left font-bold text-pink-700">
                  Check Compatability Between You and Shrindhi
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="w-auto h-auto px-[23.78px] py-[8.62px] bg-[rgba(171,29,121,0.61)] rounded-[5.14px] overflow-hidden inline-flex justify-center items-center">
                  <div className="text-center text-white text-[13.7px] font-merriweather font-bold break-words">
                    Coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mb-110 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium mb-4">Audio Info: :</h2>
            <div className="space-y-2 text-[14px] font-lato">
              <div className="flex justify-between items-center">
                <p className="w-full text-left font-bold text-pink-700">
                  <img src="" alt="audio file" />
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="w-auto h-auto px-[23.78px] py-[8.62px]  rounded-[5.14px] overflow-hidden inline-flex justify-center items-center">
                  <div className="text-center text-black text-[13.7px] font-merriweather font-bold break-words">
                    Upgrade account to listen audio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="h-120 w-100">
          <div className="bg-white p-6 rounded-lg  max-w-md mx-auto mb-110 shadow-[0px_0px_20px_rgba(171,29,121,0.5)]">
            <h2 className="text-[22px] font-medium mb-4">Video Info:</h2>
            <div className="space-y-2 text-[14px] font-lato">
              <div className="flex justify-between items-center">
                <p className="w-full text-left font-bold text-pink-700">
                  <video src="" alt="audio file" />
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-auto h-auto px-[23.78px] py-[8.62px]  rounded-[5.14px] overflow-hidden inline-flex justify-center items-center">
                  <div className="text-center text-black text-[13.7px] font-merriweather font-bold break-words">
                    Upgrade to Seen Video
                  </div>
                </div>
              </div>
            </div>
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
              <div
                key={index}
                className="w-full flex-shrink-0 text-center p-4 border"
              >
                <h3 className="no-underline">{product}</h3>
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
  );
};

export default ViewProfile;

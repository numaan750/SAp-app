// app/page.jsx

import Image from "next/image";
import Background from "@/Assets/welcome-bg.jpg";
import playstor from "@/Assets/app-store.png";
import google from "@/Assets/google-Play.png";
import hero from "@/Assets/hero-thumb.png";

export default function Home() {
  return (
    <div className="relative" >
      <Image
          src={Background}
          alt="background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5636d6]/90"></div>
      <section className="relative w-full pb-5 min-h-screen  ">
        {/* Background Image */}
        

        {/* Content */}
        <div className="Mycontainer relative z-10 container mx-auto h-full  grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28 md:pt-32">
          {/* Left Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Make cool <br /> Landing pages with sApp
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white">
              Create stunning and highly functional landing pages effortlessly
              with sApp, designed to help you capture attention and drive
              conversions.
            </p>

            {/* Store Badges (Responsive) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-start">
              <a href="#" className="flex justify-center">
                <Image
                  src={google} // apni image public/ me rakho
                  alt="Google Play"
                  width={180}
                  height={60}
                  className="object-contain w-40 sm:w-44 md:w-48 lg:w-52 h-auto"
                />
              </a>
              <a href="#" className="flex justify-center">
                <Image
                  src={playstor} // apni image public/ me rakho
                  alt="App Store"
                  width={180}
                  height={60}
                  className="object-contain w-40 sm:w-44 md:w-48 lg:w-52 h-auto"
                />
              </a>
            </div>

            {/* Extra Line under Badges */}
            <p className="text-sm md:text-base text-white mt-2">
              * Available on iPhone, iPad and all Android devices
            </p>
          </div>

          {/* Right Image (Phone Mockup ya screenshot) */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <Image
              src={hero}
              alt="App Screenshot"
              width={300}
              height={500}
              className="drop-shadow-2xl object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <div className="relative">
  {/* Purple Background */}
  <div>
    <div className="relative h-20 sm:h-48 md:h-56 lg:h-64">
      {/* White Wave */}
      <svg
        viewBox="0 0 1920 863"
        className="absolute bottom-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M-3,551 C186.257589,757.321118 319.044414,856.322454 
             395.360475,848.004007 C509.834566,835.526337 
             561.525143,796.329212 637.731734,765.961549 
             C713.938325,735.593886 816.980646,681.910577 
             1035.72208,733.065469 C1254.46351,784.220361 
             1511.54925,678.92359 1539.40808,662.398665 
             C1567.2669,645.87374 1660.9143,591.478574 
             1773.19378,597.641868 C1848.04677,601.75073 
             1901.75645,588.357675 1934.32284,557.462704 
             L1934.32284,863.183395 L-3,863.183395"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </div>
</div>

    </div>
  );
}

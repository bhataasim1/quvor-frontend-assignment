import HeroImage from '../assets/frontend-interview-assets/hero-cover-1.png'

export const Hero = () => {
  return (
    <div className="bg-[#FDF3F1] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-[#A5C98F] text-lg font-medium mb-2">Welcome</h2>
            <h1 className="text-[#2D3748] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Best Learning<br />Opportunities
            </h1>
            <p className="text-[#718096] text-xl mb-8">
              Our goal is to make online<br />education work for everyone
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-[#A5C98F] text-white font-medium py-3 px-6 rounded-md text-center hover:bg-[#94B882] transition duration-300">
                Join Us
              </a>
              <a href="#" className="border border-[#A5C98F] text-[#A5C98F] font-medium py-3 px-6 rounded-md text-center hover:bg-[#F7FAFC] transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <img src={HeroImage} alt="Hero" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

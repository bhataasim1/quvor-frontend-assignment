import { ArrowRight } from "lucide-react"
import Telescope from '../assets/frontend-interview-assets/013-telescope-1.svg'
import BlackBoard from '../assets/frontend-interview-assets/012-blackboards.svg'

export const Affordable = () => {
  return (
    <section className="bg-white py-16 mt-24 mb-10">
      <div className="container mx-auto px-20 mt-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className=" lg:top-8">
            <div className="w-16 h-1 bg-[#E53E3E] mb-6"></div>
            <h2 className="text-[#2D3748] text-3xl sm:text-4xl font-bold mb-4">Approdable Packages</h2>
            <p className="text-[#4A5568] mb-6">
              Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: <br /> Newtonian mechanics
            </p>
            <a
              href="/learn-more"
              className="text-[#A5C98F] inline-flex items-center font-medium group"
            >
              Learn More
              <ArrowRight className="w-6 h-6 ml-2 transition-transform duration-200 group-hover:translate-x-[5px]" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#A5C98F] rounded-lg p-4 inline-block mb-4">
                <img src={BlackBoard} alt="Monitor" className="w-8 h-8" />
              </div>
              <h3 className="text-[#2D3748] text-xl font-bold mb-2">Certified Teacher</h3>
              <div className="w-10 h-1 bg-[#E53E3E] mb-4"></div>
              <p className="text-[#4A5568]">
                The gradual <br /> accumulation of <br /> information about
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#A5C98F] rounded-lg p-4 inline-block mb-4">
                <img src={Telescope} alt="Telescope" className="w-8 h-8" />
              </div>
              <h3 className="text-[#2D3748] text-xl font-bold mb-2">Expert instruction</h3>
              <div className="w-10 h-1 bg-[#E53E3E] mb-4"></div>
              <p className="text-[#4A5568]">
                The gradual <br /> accumulation of <br /> information about
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

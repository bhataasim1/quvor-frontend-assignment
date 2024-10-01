import { Menu } from 'lucide-react'
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#FDF3F1] shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-[#252B42] text-xl font-bold">Brandname</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 mt-4">
            {['Home', 'Product', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#`}
                className="text-[#4A5568] hover:text-[#2D3748] transition-colors font-bold"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <button className="text-[#96BB7C] px-4 py-2 text-sm font-medium">Login</button>
            <button className="bg-[#96BB7C] text-white px-4 py-2 rounded-md text-sm font-medium ml-3 flex gap-2 items-center justify-center">JOIN US <ArrowRight className='h-4 w-4' /> </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#96BB7C]"
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {['Home', 'Product', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#`}
              className="block px-3 py-2 text-base font-medium text-[#737373] hover:text-[#96BB7C]"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="pt-4 pb-3">
          <div className="flex items-center px-4">
            <button className="block text-[#96BB7C] px-4 py-2 text-base font-medium">Login</button>
            <button className="flex bg-[#96BB7C] text-white px-4 py-2 rounded-md text-base font-medium ml-3 gap-2 items-center justify-center">JOIN US <ArrowRight className='h-4 w-4' /> </button>
          </div>
        </div>
      </div>
    </header>
  )
}
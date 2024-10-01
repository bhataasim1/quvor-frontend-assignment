import ContactSVG from '../assets/frontend-interview-assets/contact.svg'
import MailSVG from '../assets/frontend-interview-assets/email.svg'
import LocationSVG from '../assets/frontend-interview-assets/location.svg'

const footerSections = [
  {
    title: 'Company Info',
    items: ['About Us', 'Carrier', 'We are hiring', 'Blog']
  },
  {
    title: 'Legal',
    items: ['About Us', 'Carrier', 'We are hiring', 'Blog']
  },
  {
    title: 'Features',
    items: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support']
  },
  {
    title: 'Resources',
    items: ['IOS & Android', 'Watch a Demo', 'Customers', 'API']
  }
]

export default function Footer() {
  return (
    <div className="">
      <div className="container mx-auto px-20 py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#252B42] text-lg font-bold mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-[#737373] hover:text-[#252B42] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[#252B42] text-lg font-bold mb-5">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <img src={ContactSVG} alt="Contact" className="w-5 h-5 mr-2" />
                <span className="text-[#737373]">(480) 555-0103</span>
              </li>
              <li className="flex items-start">
                <img src={LocationSVG} alt="Mail" className="w-5 h-5 mr-2" />
                <span className="text-[#737373]">4517 Washington Ave. Manchester, Kentucky 39495</span>
              </li>
              <li className="flex items-center">
                <img src={MailSVG} alt="Mail" className="w-5 h-5 mr-2" />
                <span className="text-[#737373]">debra.holt@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
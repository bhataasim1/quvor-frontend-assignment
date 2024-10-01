import FacebookSVG from '../assets/frontend-interview-assets/facebook.svg'
import InstagramSVG from '../assets/frontend-interview-assets/instagram.svg'
import TwitterSVG from '../assets/frontend-interview-assets/twitter.svg'

export const FooterSocial = () => {
  return (
    <div className="mx-auto px-20 bg-[#FAFAFA]">
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 px-20 pb-5">
        <p className="text-[#737373] text-sm mb-4 sm:mb-0">
          Made With Love By Figmaland All Right Reserved
        </p>
        <div className="flex space-x-2 gap-6 px-10">
          <img src={FacebookSVG} alt="Facebook" className="w-6 h-6" />
          <img src={InstagramSVG} alt="Instagram" className="w-6 h-6" />
          <img src={TwitterSVG} alt="Twitter" className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

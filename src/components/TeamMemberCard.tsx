import FacebookSVG from '../assets/frontend-interview-assets/facebook.svg'
import InstagramSVG from '../assets/frontend-interview-assets/instagram.svg'
import TwitterSVG from '../assets/frontend-interview-assets/twitter.svg'

interface TeamMemberCardProps {
  name: string
  profession: string
  imageUrl: string
}

export default function TeamMemberCard({ name, profession, imageUrl }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[238px] mt-14 mb-14">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-[#2D3748] text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#4A5568] mb-4">{profession}</p>
        <div className="flex space-x-4 items-center justify-center gap-3">
          <img src={FacebookSVG} alt="Facebook" className="w-6 h-6" />
          <img src={InstagramSVG} alt="Instagram" className="w-6 h-6" />
          <img src={TwitterSVG} alt="Twitter" className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}
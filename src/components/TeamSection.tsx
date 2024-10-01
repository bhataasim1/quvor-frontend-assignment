import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import UserCover1 from '../assets/frontend-interview-assets/user-cover-1.png';
import UserCover2 from '../assets/frontend-interview-assets/user-cover-2.png';
import UserCover3 from '../assets/frontend-interview-assets/user-cover-3.png';
import UserCover4 from '../assets/frontend-interview-assets/user-cover-4.png';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Julian Jameson',
    profession: 'Profession',
    image: UserCover1,
  },
  {
    name: 'Julian Jameson',
    profession: 'Profession',
    image: UserCover2,
  },
  {
    name: 'Julian Jameson',
    profession: 'Profession',
    image: UserCover3,
  },
  {
    name: 'Julian Jameson',
    profession: 'Profession',
    image: UserCover4,
  },
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-20">
        <h2 className="text-[#A5C98F] text-lg font-medium mb-2">Team</h2>
        <h3 className="text-[#2D3748] text-3xl font-bold mb-4">Get Quality Education</h3>
        <p className="text-[#4A5568] max-w-2xl mb-12">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1281: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          loop={true}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberCard
                name={member.name}
                profession={member.profession}
                imageUrl={member.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

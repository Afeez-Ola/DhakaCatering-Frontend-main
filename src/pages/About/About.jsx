import React from 'react'
import PageBanner from '../../components/PageBanner'
import bg_img from '../../assets/images/about_bg.jpg'
import mission_bg from '../../assets/images/mission_bg.jpg'
import story_bg from '../../assets/images/story_bg.jpg'
import TeamCard from '../../components/TeamCard'
import kazi_jahangir from '../../assets/images/person1.jpg'
import kazi_shuvo from '../../assets/images/person2.jpg'
import riyad_hossain from '../../assets/images/riyad_hossain.JPG'
import cheif_chef from '../../assets/images/cheif_chef.jpg'

export default function About () {
  return (
    <div className='bg-white pb-14'>
      <PageBanner title='About' bg_img={bg_img} />
      <div className='px-12 pt-16 pb-10 md:px-20'>
        {/* Our Mission */}
        <div className='flex flex-col flex-wrap items-center justify-center gap-8 mb-20 md:mb-12 md:flex-row'>
          <div className='flex-1'>
            <img src={mission_bg} className='mx-auto rounded-3xl' alt='' />
          </div>
          <div className='flex-1'>
            <h4 className='mb-4 text-3xl font-bold text-center md:text-left'>
              Our Mission
            </h4>
            <p className='text-slate-600'>
              At DarVoo, our mission is simple: to bring the heart of Nigerian
              cuisine to the heart of Europe. We aim to delight our customers
              with authentic, high-quality dishes that celebrate the rich
              culinary traditions of Nigeria, prepared with love and care.
              Whether it’s a small gathering or a grand event, DarVoo is
              dedicated to delivering a unique, flavorful experience that
              connects people through food. We are committed to using fresh
              ingredients, crafting meals that honor tradition while innovating
              to suit modern tastes. Above all, we want to be a bridge between
              cultures, fostering connection and appreciation through the
              universal language of food.
            </p>
          </div>
        </div>
        {/* Our Story */}
        <div className='flex flex-col flex-wrap items-center justify-center gap-8 mb-20 md:mb-24 md:flex-row-reverse'>
          <div className='flex-1'>
            <img src={story_bg} className='mx-auto rounded-3xl' alt='' />
          </div>
          <div className='flex-1'>
            <h4 className='mb-4 text-3xl font-bold text-center md:text-left'>
              Our Story
            </h4>
            <p className='text-slate-600'>
              Born from a deep love for Nigeria’s rich culinary heritage, DarVoo
              began as a dream to share the vibrant flavors of West Africa with
              the world. Founded by a passionate Nigerian chef, DarVoo’s journey
              started in the heart of Vienna, Austria, where the beauty of
              diverse cultures inspired a desire to introduce something unique.
              Drawing on the authentic recipes passed down through generations,
              DarVoo offers not just food but an experience—a delicious journey
              through the rich landscapes of Nigerian cuisine. From the warmth
              of jollof rice to the delicate sweetness of puff-puff, DarVoo
              captures the essence of Nigeria in every bite, bringing a taste of
              home to Nigerians abroad and introducing the Austrian community to
              the bold flavors of West Africa.
            </p>
          </div>
        </div>
        {/* Our Team */}
        <div className=''>
          <h4 className='mb-12 text-3xl font-bold text-center'>Our Team</h4>
          <div className='flex flex-wrap justify-center gap-8'>
            <TeamCard
              img={kazi_jahangir}
              name='Victoria Oluwatosin Stephen'
              profession='Founder & CEO'
            />
            <TeamCard
              img={kazi_shuvo}
              name='Kazi Shuvo'
              profession='Lead Manager'
            />
            <TeamCard
              img={riyad_hossain}
              name='Riyad Hossain'
              profession='Software Engineer'
            />
            <TeamCard
              img={cheif_chef}
              name='
              Tommy Miah'
              profession='Cheif Chef'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

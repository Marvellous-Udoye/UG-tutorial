import Image from 'next/image';
import HeroImage from '../../public/images/bg1.jpg';
import Services from './components/common/services';
import Video from './components/videodialog';
import Carousel from './components/common/carousel';

export default function Home() {

  return (
    <div>
      <header className='relative '>
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={1440}
          objectFit='contain'
          className='w-full h-[600px] brightness-48'
        />
        <h1 className='absolute w-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28px] md:text-[50px] max-w-[840px] font-bold text-white text-center md:tracking-[1.5px]'>&quot;Elevate your learning with relevant resources&quot;</h1>
        <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 md:py-16 px-4 md:px-12 rounded-lg max-w-[1130px] w-full shadow-custom-shadow'>
          <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center'>What <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>We Offer</span></h1>
          <div className='mt-8 md:mt-20'>
            <Services serviceQty={3} />
          </div>
        </div>
      </header>

      <section className='mt-[350px] pb-10 '>
        <div className='max-w-[1100px] mx-auto'>
          <Carousel />
        </div>
      </section>

      <section className='max-w-[1100px] mx-auto py-10 flex flex-col md:flex-row gap-4 md:justify-between'>
        <div className='flex flex-col gap-8 md:gap-10 max-w-[640px] px-4 md:px-0'>
          <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center md:text-left'>Our <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Mission</span></h1>
          <div className='flex flex-col gap-4 md:gap-8'>
            <p>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
            </p>
          </div>
        </div>
        <div className='w-full md:max-w-[300px] w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 justify-between mx-auto pt-8 lg:pt-20'>
          <div>
            <h1 className='text-[32px] font-semibold tracking-[1px] text-center'>2003</h1>
            <p className='font-medium text-center'>Founded</p>
          </div>
          <div>
            <h1 className='text-[32px] font-semibold tracking-[1px] text-center'>50+</h1>
            <p className='font-medium text-center'>Resources</p>
          </div>
          <div>
            <h1 className='text-[32px] font-semibold tracking-[1px] text-center'>1420+</h1>
            <p className='font-medium text-center'>Users</p>
          </div>
          <div>
            <h1 className='text-[32px] font-semibold tracking-[1px] text-center'>232</h1>
            <p className='font-medium text-center'>Platforms</p>
          </div>
        </div>
      </section>

      <section className='max-w-[1100px] mx-auto flex flex-col md:flex-row-reverse gap-10 items-center md:justify-between pt-10 pb-20 '>
        <div className='w-full md:max-w-[450px] px-4 md:px-0 flex flex-col gap-8 justify-center'>
          <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center'>Watch <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Demo</span></h1>
          <p className='text-center md:tracking-[1px]'>
            Discover the power of our educational platform by watching our demo video! Dive into a world of tutorials and resources designed to enhance your learning experience. In this video, you&apos;ll see firsthand how our platform provides easy access to a wide range of subjects, interactive lessons, and engaging content tailored to meet your educational needs.
          </p>
        </div>
        <Video />
      </section>
    </div>
  );
}

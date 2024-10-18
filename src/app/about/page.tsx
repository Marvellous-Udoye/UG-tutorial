import Image from "next/image";
import HeroImage from "../../../public/images/bg2.jpg";
import AboutUsImage from "../../../public/images/g1.jpg"

export default function About() {
  const image = "/images/g1.jpg"
  return (
    <div>
      <section>
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={1440}
          objectFit='contain'
          className='w-full brightness-48'
        />
        {/* <h1 className='w-full text-[28px] md:text-[50px] max-w-[840px] font-bold text-white text-center md:tracking-[1.5px]'>&quot;Elevate your learning with relevant resources&quot;</h1> */}
      </section>

      <section className='max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10 items-center md:justify-between pt-20 pb-10 '>
        <div className='w-full md:max-w-[450px] px-4 md:px-0 flex flex-col gap-8 justify-center'>
          <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px]'>About <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Us</span></h1>
          <p className='md:tracking-[1px]'>
            Discover the power of our educational platform by watching our demo video! Dive into a world of tutorials and resources designed to enhance your learning experience. In this video, you&apos;ll see firsthand how our platform provides easy access to a wide range of subjects, interactive lessons, and engaging content tailored to meet your educational needs.
          </p>
        </div>
        <div className="max-w-[540px]">
          <Image
            src={AboutUsImage}
            alt="About Us Image"
            width={540}
            height={371}
            objectFit='contain'
            className='w-full h-[371px] brightness-48 rounded-[12px]'
          />
        </div>
      </section>

      <section
        className="flex items-center justify-between px-40 py-10 brightness-50"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="font-semibold text-[20px] md:text-[32px] leading-12 md:tracking-[2px] text-white">We Provide the Most Relevant Resources</h1>
        <button className="px-8 py-3 text-white rounded-xl bg-[#a40eff] font-normal text-base leading-6 tracking-[2px]">
          Contact Us
        </button>
      </section>
    </div>
  );
}

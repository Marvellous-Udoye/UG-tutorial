import Image from "next/image";
import HeroImage from "../../../public/images/bg2.jpg";
import Services from "../components/common/services";

export default function ServicesPage() {
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
        <div className='mx-auto bg-white py-4 md:py-16 px-4 md:px-12 max-w-[1130px] w-full'>
          <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center'>Our <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Services</span></h1>
          <div className='mt-8 md:mt-20'>
            <Services serviceQty={6} />
          </div>
        </div>
      </section>

      <section>
        <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center'>Our <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Services</span></h1>
        <Services serviceQty={0}/>
      </section>
    </div>
  );
}
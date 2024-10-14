import Navlinks from './common/navLinks';
import SocialMediaIcons from './common/socialMediaIcons';

const Navbar = () => {
  return (
    <nav>
      <section className="bg-[#a40eff] py-4 text-white">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-2 md:justify-between items-center">
          <div className="flex flex-col md:flex-row text-center md:gap-[30px]">
            <p className='cursor-pointer tracking-[1px] font-normal text-[14px]'>Have any Questions?</p>
            <p className='cursor-pointer tracking-[1px] font-normal text-[14px]'>uniongrouptutorial@gmail.com</p>
          </div>
          <ul className="flex gap-[35px]">
            <SocialMediaIcons />
          </ul>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto flex justify-between items-center py-2 md:py-4">
        <h1 className='text-[24px] md:text-[40px] leading-12 font-bold'>Union Group Tutorial</h1>
        <Navlinks />
      </section>
    </nav>
  )
}

export default Navbar;
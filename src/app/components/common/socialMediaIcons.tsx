"use client"

import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className='flex gap-[35px]'>
      <FaFacebook size={20} className='cursor-pointer' />
      <FaYoutube size={20} className='cursor-pointer' />
      <FaInstagram size={20} className='cursor-pointer' />
      <FaWhatsapp size={20} className='cursor-pointer' />
      <FaTelegram size={20} className='cursor-pointer' />
    </div>
  );
};

export default SocialMediaIcons;

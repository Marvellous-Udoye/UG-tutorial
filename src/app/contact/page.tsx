"use client"

import Image from "next/image";
import HeroImage from "../../../public/images/bg2.jpg";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ValidationError>({});
  const [name, setName] = useState('');
  type ValidationError = {
    name?: string;
    email?: string;
    password?: string;
  };

  const handleNameChange = () => {
    if (errors.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
    }
  };

  const handleEmailChange = () => {
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    }
  };

  const handleContact = () => {

  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});

    let valid = true;
    const newErrors: ValidationError = {};

    if (!name) {
      valid = false;
      newErrors.name = "Can't be empty";
    }

    if (!email) {
      valid = false;
      newErrors.email = "Can't be empty";
    } else if (!email.endsWith('@gmail.com')) {
      valid = false;
      newErrors.email = 'Invalid email';
    }

    if (!valid) {
      setErrors(newErrors);
    } else {
      handleContact()
    }
  };

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

      <section className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-start py-20">
          <form onSubmit={handleSubmit} className="flex flex-col sm:gap-5 gap-3 p-[20px] bg-[#FAFAFA] max-w-[500px] w-full rounded-[12px]">
            <h1 className='font-semibold text-[32px] md:text-[40px] leading-12 md:tracking-[2px] text-center'>Contact <span className='text-[#a40eff] border-b-[2px] border-b-[#a40eff] pb-4'>Us</span></h1>
            <div className="flex gap-1 justify-between items-center relative h-fit min-h-[48px] sm:block">
              <label
                htmlFor="Name"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Full Name*
              </label>
              <input
                id="firstName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleNameChange}
                placeholder="Your Name"
                className={`sm:max-w-full max-w-[432px] w-full rounded-[8px] border px-4 py-3 focus:outline-none focus:shadow-custom-focus focus:border-[#633CFF] sm:mt-1 ${errors.name ? 'border-[#FF3939]' : ''}`}
              />
              {errors.name &&
                <p className="font-[400] text-[12px] text-[#FF3939] sm:absolute sm:right-0 sm:-bottom-1/4 fp:absolute fp:right-4 fp:top-1/2 fp:transform fp:-translate-y-1/2">
                  {errors.name}
                </p>
              }
            </div>

            <div className="flex gap-1 justify-between items-center relative h-fit min-h-[48px] sm:block sm:mb-2">
              <label
                htmlFor="email"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleEmailChange}
                placeholder="Your Email Address"
                className={`sm:max-w-full max-w-[432px] w-full rounded-[8px] border px-4 py-3 focus:outline-none focus:shadow-custom-focus focus:border-[#633CFF] sm:mt-1 ${errors.email ? 'border-[#FF3939]' : ''}`}
              />
              {errors.email &&
                <p className="font-[400] text-[12px] text-[#FF3939] sm:absolute sm:right-0 sm:-bottom-1/4 fp:absolute fp:right-4 fp:top-1/2 fp:transform fp:-translate-y-1/2">
                  {errors.email}
                </p>
              }
            </div>

            <div className="flex gap-1 justify-between items-center relative h-fit min-h-[48px] sm:block">
              <label
                htmlFor="Subject"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Subject
              </label>
              <input
                id="Subject"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleNameChange}
                placeholder="Subject of Contact"
                className={`sm:max-w-full max-w-[432px] w-full rounded-[8px] border px-4 py-3 focus:outline-none focus:shadow-custom-focus focus:border-[#633CFF] sm:mt-1 ${errors.name ? 'border-[#FF3939]' : ''}`}
              />
              {errors.name &&
                <p className="font-[400] text-[12px] text-[#FF3939] sm:absolute sm:right-0 sm:-bottom-1/4 fp:absolute fp:right-4 fp:top-1/2 fp:transform fp:-translate-y-1/2">
                  {errors.name}
                </p>
              }
            </div>

            <div className="flex gap-1 justify-between items-center h-fit min-h-[48px] sm:block">
              <label
                htmlFor="Subject"
                className="font-[400] text-[16px] text-[#737373]"
              >
                Message
              </label>
              <textarea className="w-full rounded-[8px] border px-4 py-3 focus:outline-none focus:shadow-custom-focus focus:border-[#633CFF]" placeholder="Message"></textarea>
            </div>

            <div className="flex gap-4">
              <button className="w-full py-3 text-white rounded-xl bg-[#a40eff] font-normal text-base leading-6 tracking-[2px]">
                Submit
              </button>
              <button className="w-full py-3 text-white rounded-xl bg-[#000] font-normal text-base leading-6 tracking-[2px]">
                Clear
              </button>
            </div>
          </form>

          <div className="relative max-w-[540px] w-full lg:h-[500px] pb-[56.25%] sm:pb-[40%] md:pb-[30%] lg:pb-[25%] my-auto">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094766!2d144.95373631568056!3d-37.817209442021575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e06a1b3ed2b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633416050213!5m2!1sen!2sau"
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
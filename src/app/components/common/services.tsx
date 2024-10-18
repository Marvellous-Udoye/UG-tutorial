import { FaBook, FaComment, FaGraduationCap } from "react-icons/fa";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

type ServiceQtyProps = {
  serviceQty: number;
};

const Services = ({ serviceQty }: ServiceQtyProps) => {
  const services: ServiceProps[] = [
    {
      icon: <FaGraduationCap className="h-[37px] w-[37px]" />,
      title: "Professional Study",
      info: "Gain industry-relevant skills through structured courses led by experienced professionals."
    },
    {
      icon: <FaComment className="h-[35px] w-[35px]" />,
      title: "Online Learning",
      info: "Flexible learning opportunities that allow you to study at your own pace, anytime and anywhere."
    },
    {
      icon: <FaBook className="h-[35px] w-[35px]" />,
      title: "In-depth Tutorials",
      info: "Comprehensive guides and tutorials that cover topics thoroughly, ensuring a deep understanding."
    },
    {
      icon: <FaGraduationCap className="h-[37px] w-[37px]" />,
      title: "Professional Study",
      info: "Gain industry-relevant skills through structured courses led by experienced professionals."
    },
    {
      icon: <FaComment className="h-[35px] w-[35px]" />,
      title: "Online Learning",
      info: "Flexible learning opportunities that allow you to study at your own pace, anytime and anywhere."
    },
    {
      icon: <FaBook className="h-[35px] w-[35px]" />,
      title: "In-depth Tutorials",
      info: "Comprehensive guides and tutorials that cover topics thoroughly, ensuring a deep understanding."
    },
  ];

  // Use slice to limit the number of services based on the passed serviceQty
  const filteredServices = services.slice(0, serviceQty);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mb-10 sm:mb-20">
      {filteredServices.map((service, index) => (
        <div key={index} className="max-w-[380px] px-[15px]">
          <div className="flex justify-center pb-2">{service.icon}</div>
          <h3 className="text-center text-[22px] font-semibold tracking-[2px] my-4">{service.title}</h3>
          <p className="text-center font-normal text-sm text-gray-500 tracking-[2px]">{service.info}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

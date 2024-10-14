import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/images/g8.jpg"
            className="w-full h-[360px]"
            alt=""
            width={1100}
            height={100}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">❮</Link>
            <Link href="#slide2" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/images/bg1.jpg"
            className="w-full h-[360px]"
            alt=""
            width={1100}
            height={100}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">❮</Link>
            <Link href="#slide3" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/images/g8.jpg"
            className="w-full h-[360px]"
            alt=""
            width={1100}
            height={100}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">❮</Link>
            <Link href="#slide4" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/images/bg1.jpg"
            className="w-full h-[360px]"
            alt=""
            width={1100}
            height={100}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">❮</Link>
            <Link href="#slide1" className="btn btn-circle">❯</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
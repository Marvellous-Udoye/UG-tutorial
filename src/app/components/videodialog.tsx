"use client"

import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useState } from 'react';

interface HeroVideoDialogDemoProps {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroVideoDialogDemo: React.FC<HeroVideoDialogDemoProps> = ({ isVideoOpen, setIsVideoOpen }) => {
  return (
    <div className="relative flex justify-center items-center object-cover rounded-lg">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc=""
        thumbnailSrc="/images/g8.jpg"
        thumbnailAlt="Hero Video"
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc=""
        thumbnailSrc="/images/g8.jpg"
        thumbnailAlt="Hero Video"
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
      />
    </div>
  );
}

const Video = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <HeroVideoDialogDemo isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
  )
}
export default Video;

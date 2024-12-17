import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

interface AboutCardProps {
  img: string;
  title: string;
  description: string;
}

const AboutCard = ({ img, title, description }: AboutCardProps) => {
  return (
    <div className="w-full sm:w-[387px] md:w-[350px] lg:w-[387px] h-auto mt-4 mx-auto">
      <Card className="bg-[#D4D2E3] w-full h-auto">
        <CardHeader className="p-0">
          <CardTitle className="flex gap-4 sm:gap-3 py-2 px-1">
            <div className="flex-shrink-0">
              <Image src={img} alt={title} width={54} height={52} className="-mt-2" />
            </div>
            <div className="text-lg sm:text-base">{title}</div>
          </CardTitle>
          <CardDescription className="px-2">
            <p className="font-normal text-lg sm:text-base">{description}</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default AboutCard;

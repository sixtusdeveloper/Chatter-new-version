import React from 'react';
import CompanyImgOne from '@/public/img/project-logo-1.png';
import CompanyImgTwo from '@/public/img/project-logo-2.png';
import CompanyImgThree from '@/public/img/project-logo-3.png';
import CompanyImgFour from '@/public/img/project-logo-4.png';
import CompanyImgFive from '@/public/img/project-logo-5.png';
import Image from 'next/image';


const Collaboration = ({
    CompanyImgOne, 
    CompanyImgTwo,
    CompanyImgThree,
    CompanyImgFour, 
    CompanyImgFive, 
}: {
    CompanyImgOne?: string;
    CompanyImgTwo?: string;
    CompanyImgThree?: string;
    CompanyImgFour?: string;
    CompanyImgFive?: string;
}
) => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-26">
        <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wider">Our <span className="text-purple">Collaborators</span></h1>
        <div className="bg-black-100 py-14 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-2 tracking-wide text-gray-100">
                Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="Transistor"
                        src={ CompanyImgOne || "/img/project-logo-1.png"}
                        width={400}
                        height={200}
                        className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="Reform"
                        src={ CompanyImgTwo || "/img/project-logo-2.png"}
                        width={400}
                        height={200}
                        className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="Tuple"
                        src={ CompanyImgThree || "/img/project-logo-3.png"}
                        width={400}
                        height={200}
                        className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="SavvyCal"
                        src={ CompanyImgFour || "/img/project-logo-4.png"}
                        width={400}
                        height={200}
                        className="col-span-2 max-h-45 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <Image
                        alt="Statamic"
                        src={ CompanyImgFive || "/img/project-logo-5.png"}
                        width={400}
                        height={200}
                        className="col-span-2 col-start-2 max-h-45 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
                <div className="hidden sm:mt-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-4 my-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
                        Over 3500 companies use our tools to better their business.{' '}
                        <a href="#" className="font-semibold text-purple">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read our customer stories <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collaboration;





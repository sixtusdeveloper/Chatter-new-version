import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';

const links = [
  { name: "Open roles", href: "#" },
  { name: "Contribute as a writer", href: "#" },
  { name: "Our mission and values", href: "#" },
  { name: "Meet our team", href: "#" },
];

const stats = [
  { name: "Active writers", value: "500+" },
  { name: "Articles published", value: "10,000+" },
  { name: "Monthly readers", value: "100,000+" },
  { name: "Community events", value: "20+" },
];

export default function WorkWithUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-5 sm:py-4 w-screen" id="Services">
      <div className="absolute inset-0 -z-10 w-screen h-full">
        <Image
          alt="services"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="w-full h-full object-cover object-center"
          width={2830}
          height={1500}
        />
      </div>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-5 md:py-6 sm:py-4 px-6 lg:px-8 mb-18">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-[2.7rem] font-bold tracking-wider text-white sm:text-[2.7rem]">
            Work <span className="text-purple">With Us</span>
          </h2>
          <p className="mt-6 text-md leading-8 text-gray-300">
            Join our team at Chatter and help revolutionize content creation and discovery. We&apos;re looking for passionate individuals who want to make a difference. Whether you&apos;re a developer, writer, or community manager, there&apos;s a place for you here. Be part of an innovative and creative environment. Apply now and help shape the future of content!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-purple sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

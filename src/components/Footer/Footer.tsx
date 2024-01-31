import Image from "next/image";
import { Reveal } from "../Reveal/Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className='max-w-5xl p-6 mx-auto my-10 md:-mt-40'>
      <div className='justify-between md:flex'>
        <div>
          <Image
            src='/assets/logo.png'
            width={200}
            height={40}
            alt='Logo bank'
          />
          <Reveal>
            <p className='mt-5 text-primaryDark max-w-[250px]'>
              Una nueva forma de hacer pagos de forma sencilla
            </p>
          </Reveal>
        </div>

        {footerData.map(({ id, links, title }) => (
          <div key={id}>
            <h4 className='mt-8 text-lg md:mt-8'>
              <Reveal>
                <h4>{title}</h4>
              </Reveal>
            </h4>
            {links.map(({ id, link, name }) => (
              <Link
                key={id}
                href={link}
                className='block my-4 text-primaryDark hover:text-white'
              >
                <Reveal>{name}</Reveal>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className='border-[#3f3e45] border-[1px] my-7'></div>

      <div className='items-center justify-between md:flex'>
        <div className='my-3'>
          <Reveal>2023 Boras Bank. &copy; All rights reserved.</Reveal>
        </div>
        <div className='flex gap-5 items-center'>
          {footerSocialNetworks.map(({ icon, id, link }) => (
            <Link key={id} href={link} className='text-2xl'>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

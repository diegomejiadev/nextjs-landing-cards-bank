import Link from "next/link";
import BackgroundRadialLeft from "../BackgroundRadialLeft/BackgroundRadialLeft";
import { Reveal } from "../Reveal/Reveal";
import { dataFeatureBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <div className='relative px-6 py-20 md:py-64 '>
      <BackgroundRadialLeft />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              <span className='block degrade-blue bg-blueLight'>
                Tú haces el negocio
              </span>
              nosotros manejamos <br /> el dinero
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
              Con la tarjeta de crédito adecuada, puedes mejorar de forma
              financiera generando crédito, obteniendo recompensas y ahorrando
              dinero. Pero con cientos de tarjetas de crédito en el mercado.
            </p>
          </Reveal>
          <Reveal>
            <div className='my-8'>
              <Link
                href='#clients'
                className='px-4 py-3 rounded-md bg-blueRadial'
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>
        <div className='grid items-center py-5 md:p-8'>
          {dataFeatureBusiness.map(({ description, icon, id, title }) => (
            <Reveal key={id}>
              <div className='grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group transition-all duration-500 hover:bg-radialBlack'>
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className='text-primar'>{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

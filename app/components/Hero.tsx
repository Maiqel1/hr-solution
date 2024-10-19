import Image from "next/image";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-0 md:hidden'>
          <Image
            src='/hero.jpg'
            alt='Hero image'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-slate-700/60'></div>
        </div>

        <div className='flex flex-col md:flex-row bg-gradient-to-r from-blue-200 to-red-400'>
          <div className='w-full md:w-1/2 relative'>
            {" "}
            <div className='mx-auto px-4 sm:px-6 lg:px-8 py-32'>
              <div className='text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                  Transform Your Workforce
                </h1>
                <p className='text-xl text-white mb-8'>
                  Innovative HR solutions for modern businesses
                </p>
                <ConsultationModal />
              </div>
            </div>
          </div>

          <div className='hidden md:block w-full md:w-1/2'>
            <div className='mx-auto mt-10 py-10'>
              <Image
                src='/hero.jpg'
                alt='Hero image'
                height={900}
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

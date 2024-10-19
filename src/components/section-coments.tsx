import Image from 'next/image';
import underline from '../../public/bg-together.png';

export const SectionComents = () => {
  return (
    <section className="mt-[100px] px-4 relative pb-10">
      <div>
        <h2 className="text-center z-10 relative">
          See what our{' '}
          <span className="underline-span relative inline-block">
            trusted
            <Image
              src={underline}
              alt="underline"
              width={100}
              height={100}
              className="absolute bottom-[-10px] left-0 w-full -z-10 h-[30px]"
            />
          </span>
          users Say
        </h2>
      </div>
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[100px]"></div>
    </section>
  );
};

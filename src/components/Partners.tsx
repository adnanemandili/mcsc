import Image from "next/image";
import { Canvas } from "react-three-fiber";
import SpaceParticles from "./SpaceParticles";
const Partners = () => {
    return(
        <div className='relative flex min-h-screen flex-col items-center justify-center'>
    <div style={{ height: '100vh', width: '100vw' }}>
          <Canvas>
            <SpaceParticles />
          </Canvas>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-40% via-[#00ff41]/[.7] to-60% opacity-90 h-14 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-30% via-[#00ff41]/[.7] to-70% opacity-80 h-28 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-20% via-[#00ff41]/[.7] to-80% opacity-80 h-60 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-10% via-[#00ff41]/[.7] to-90% opacity-60 h-64 w-full'>
    </div>
    <div className='absolute flex flex-col bg-gradient-to-t from-transparent via-[#00ff41]/[.5] min-h-10 w-full justify-center items-center'>
      <div className='text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text pb-14'>
          <code className='text-3xl md:text-6xl font-black'>In Collaboration with</code>
        </div>
        <div className="pt-[10px]">
      <div className='flex flex-col justify-center items-center'>
      <div className='px-10'>
        <Image
          src="/offsec.png"
          alt="offsec"
          width={250}//350
          height={150}//250
        />
        </div>
      <div className='px-10'>
        <Image
          src="/aws.png"
          alt="aws"
          width={100}//200
          height={100}//200
        /></div>
      </div>
      </div>
      <div className="pt-20">
      <h1 className="text-3xl font-semibold text-center pb-10">
            <code>Media Partners</code>
            </h1>
      <div className='flex flex-col justify-center items-center'>
      <div className='px-10 rounded-md'>
        <Image
          src="/hitradio.jpg"
          alt="hitradio"
          width={70}//100
          height={70}//100
          className="rounded-lg"
        />
        </div>
      <div className='px-10'>
        <Image
          src="/mwn.png"
          alt="mwn"
          width={100}//200
          height={100}//200
        /></div>
        <div className='px-10'>
          <Image
            src="/rekrute.svg"
            alt="rekrute"
            width={100}//200
            height={100}//200
          /></div>
      </div>
      </div>
      <div className="pt-20">
      <h1 className="text-3xl font-semibold text-center pb-14">
            <code>Community Partners</code>
            </h1>
      <div className='flex flex-row justify-center items-center'>
      <div className='px-10'>
        <Image
          src="/CC.svg"
          alt="cybercohesion"
          width={350}
          height={250}
        />
        </div>
      </div>
      </div>
    </div>
    </div>
    );
};
export default Partners;
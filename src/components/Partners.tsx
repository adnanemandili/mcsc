import Image from "next/image";
import { Canvas } from "react-three-fiber";
import SpaceParticles from "./SpaceParticles";
const Partners = () => {
    return(
        <div id="partners" className='relative flex min-h-screen flex-col items-center justify-center'>
    <div style={{ height: '80vh', width: '100vw' }}>
          <Canvas>
            <SpaceParticles />
          </Canvas>
    </div>
    <div className='absolute top-40 py-16'>
        <h1 className="text-5xl font-semibold text-center">
          <code>Partners</code>
          </h1>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-40% via-[#00ff41]/[.7] to-60% opacity-90 h-14 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-30% via-[#00ff41]/[.7] to-70% opacity-80 h-28 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-20% via-[#00ff41]/[.7] to-80% opacity-80 h-60 w-full'>
    </div>
    <div className='absolute flex bg-gradient-to-t from-transparent from-10% via-[#00ff41]/[.7] to-90% opacity-60 h-64 w-full'>
    </div>
    <div className='absolute flex flex-col bg-gradient-to-t from-transparent via-[#00ff41]/[.5] min-h-96 w-full justify-center items-center'>
    
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col px-10'>
        <Image
          src="/CC.svg"
          alt="cybercohesion"
          width={200}
          height={150}
          priority
        />
        </div>
      <div className='px-10'>
        <Image
          src="/offsec.png"
          alt="offsec"
          width={350}
          height={250}
          priority
        />
        </div>
      <div className='px-10'>
        <Image
          src="/aws.png"
          alt="aws"
          width={200}
          height={200}
          priority
        /></div>
      </div>
    </div>
    </div>
    );
};
export default Partners;
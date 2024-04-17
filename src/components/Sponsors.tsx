import Image from "next/image";
import { Canvas } from "react-three-fiber";
import SpaceParticles from "./SpaceParticles";
const Sponsors = () => {
    return(
    <div className='flex min-h-screen flex-col items-center justify-center pb-20'>
    <div style={{ height: '120vh', width: '100vw' }}>
          <Canvas>
            <SpaceParticles />
          </Canvas>
    </div>
    <div className='absolute flex flex-col justify-center items-center'>
      <div className='text-transparent bg-gradient-to-tr from-[#00ff41] to-[#66ff7d] bg-clip-text pb-14'>
        <code className='text-3xl md:text-7xl font-black'>Meet our Sponsors</code>
      </div>
      <div>
      <h1 className="text-5xl font-semibold text-center py-10">
          <code>Official Sponsors</code>
          </h1>
          <div className="flex flex-row">
        <div className='flex flex-col px-10'>
        <Image
          src="/henceforth.png"
          alt="henceforth"
          width={300}
          height={150}
          priority
        />
        </div>
      <div className='px-10'>
        <Image
          src="/lmps.png"
          alt="offsec"
          width={350}
          height={250}
          priority
        />
        </div>
        </div>
      </div>

      <div className="pt-20">
      <h1 className="text-4xl font-semibold text-center py-10">
          <code>Platinum Sponsors</code>
          </h1>
          <div className="flex flex-row">
        <div className='flex flex-col px-10'>
        <Image
          src="/paylogic.png"
          alt="paylogic"
          width={250}
          height={150}
          priority
        />
        </div>
      <div className='px-10'>
        <Image
          src="/cbi.png"
          alt="cbi"
          width={250}
          height={250}
          priority
        />
        </div>
        </div>
      </div>
      </div>
    </div>
    );
};
export default Sponsors;
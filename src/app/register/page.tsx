"use client";
import Footer from '@/components/Footer';
import { GithubButton } from '@/components/GithubButton';
import Navbar from '@/components/Navbar';
import SpaceParticles from '@/components/SpaceParticles';
import Ticket from '@/components/Ticket';
import { SessionProvider, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Canvas } from 'react-three-fiber';

export default function Home() {



    return (
    <div className='bg-black'>
    <div className="fixed absolute top-0 left-0" style={{ height: '100vh', width: '100vw' }}>
        <Canvas>
            <SpaceParticles />
        </Canvas>
    </div>
    <div className='sticky'>
        <Navbar/>
    </div>
    <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex pb-10">
                <Image
                src="/title.svg"
                alt="Title"
                width={1000}
                height={100}
                />
        </div>
        <GithubButton/>
        <SessionProvider>
        <Ticket/>
        </SessionProvider>
    </div>
    <Footer/>
    </div>
    );
}

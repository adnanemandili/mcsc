"use client";
import Footer from '@/components/Footer';
import { GithubButton } from '@/components/GithubButton';
import Navbar from '@/components/Navbar';
import { ShareActions } from '@/components/Share';
import SpaceParticles from '@/components/SpaceParticles';
import Ticket from '@/components/Ticket';
import { SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import { Canvas } from 'react-three-fiber';



function generateSerialNumber() {
    const length = 15; 
// Définir la longueur à l'intérieur de la fonction
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let serialNumber = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        serialNumber += characters.charAt(randomIndex);
    }
    return serialNumber;
}

// const baseurl= envConfig.NEXTAUTH_URL;
const url = `https://mcsc-e797.vercel.app/register/me`;

export default function Home() {

    const NUM= generateSerialNumber();

    const URL=url+'#'+NUM;

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
        <SessionProvider>
            <ShareActions shareUrl={URL}/>
        <Ticket/>
        </SessionProvider>
    </div>
    <Footer/>
    </div>
    );
}
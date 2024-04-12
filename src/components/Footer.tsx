import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
    return (
        <>
        {isMobile ? (
            <div className="left-0 bottom-0 w-full backdrop-blur-2xl lg:static lg:w-auto lg:p-4 flex items-center justify-center">
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex flex-col md:flex-row justify-between items-center py-4 md:py-6'>
                    <div className='flex flex-col pr-4 md:pr-8 w-full md:w-3/5 break-normal md:max-w-md lg:max-w-none'>
                        <Link href="https://www.instagram.com/insec_ensias/">
                            <Image
                                src="/insec.png"
                                alt="Insec"
                                height={75}
                                width={75}
                                className='py-2 mx-auto'
                            />
                            <p className='text-white pb-2 font-medium'>INSEC ENSIAS</p>
                        </Link>
                        <Link href="">
                            <p className='pr-2 py-1 text-sm font-light'>National School of Computer Science, St. Mohamed Ben Abdellah Regragui, Rabat - Morocco</p>
                        </Link>
                        <p className='bg-gradient-to-t from-white via-[#00ff41] to-white text-transparent inline-box bg-clip-text font-light mx-auto'>
                            <a href="mailto:contact@cybersecuritycampmorocco.com">contact@cybersecuritycampmorocco.com</a>
                        </p>
                    </div>
                    <div className='pt-4 md:pt-0'>
                        <div className='pb-2'>
                            <Image
                                src="/mcsc.png"
                                alt="MCSC Logo"
                                width={90}
                                height={75}
                                className='mx-auto'
                            />
                        </div>
                        <div className='flex flex-row pb-4 pt-6 justify-center items-end'>
                            <div className='px-2 md:px-4'>
                                <Link href="https://www.linkedin.com/company/insec-ensias/">
                                    <Image
                                        src="/linkedin.svg"
                                        alt="LinkedIn"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                            <div className='px-2 md:px-4'>
                                <Link href="https://www.facebook.com/ensiasinsec/">
                                    <Image
                                        src="/facebook.svg"
                                        alt="Facebook"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                            <div className='px-2 md:px-4'>
                                <Link href="https://www.instagram.com/seccamp.ma/">
                                    <Image
                                        src="/insta.svg"
                                        alt="Insta"
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <code className="mx-auto">© 2024 Cyber Security Camp Morocco.<br/> All rights reserved</code>
            </div>
        </div>) : (
        
                <div className="left-0 bottom-0 w-full backdrop-blur-2xl lg:static lg:w-auto lg:p-4 flex items-center justify-center">
                    <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row justify-between items-end py-6'>
                        <div className='flex-col pr-96 w-3/5 break-normal'>
                            <Link href="https://www.instagram.com/insec_ensias/">
                            <Image
                            src="/insec.png"
                            alt="Insec"
                            height={75}
                            width={75}
                            className='py-2'
                            />
                            <p className='text-white pb-2 font-medium'>INSEC ENSIAS</p>
                            </Link>
                            <Link href="">
                            <p className='pr-2 py-1 text-sm font-light'>National School of Computer Science, St. Mohamed Ben Abdellah Regragui, Rabat - Morocco</p></Link>
                            <p className='bg-gradient-to-t from-white via-[#00ff41] to-white text-transparent inline-box bg-clip-text font-light'><a href="mailto:contact@cybersecuritycampmorocco.com">contact@cybersecuritycampmorocco.com</a></p>
                        </div>
                    <div className='pt-4'>
                        <div className='pb-2'>
                        <Image
                            src="/mcsc.png"
                            alt="MCSC Logo"
                            width={250}
                            height={250}
                        />
                        </div>
                        <div className='flex flex-row pb-4 pt-6 justify-center items-end'>
                            <div className='px-4'>
                            <Link href="https://www.linkedin.com/company/insec-ensias/">
                            <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            /></Link>
                            </div>
                            <div className='px-4'>
                            <Link href="https://www.facebook.com/ensiasinsec/">
                            <Image
                            src="/facebook.svg"
                            alt="Facebook"
                            width={40}
                            height={40}
                            /></Link>
                            </div>
                            <div className='px-4'>
                            <Link href="https://www.instagram.com/seccamp.ma/">
                            <Image
                            src="/insta.svg"
                            alt="Insta"
                            width={40}
                            height={40}
                            />
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <code> © 2024 Cyber Security Camp Morocco. All rights reserved.</code>
                    </div>
                </div>
        )}
        </>
    );
}

export default Footer;

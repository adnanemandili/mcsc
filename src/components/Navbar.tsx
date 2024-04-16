import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavbarItem {
    item: string;
    id: string;
}

const navbarItems: NavbarItem[] = [
    { item: "About", id: "about" },
    { item: "Speakers", id: "speakers" },
    { item: "Timeline", id: "timeline" },
    { item: "Sponsors", id: "sponsors" },
    { item: "Partners", id: "partners" },
    { item: "FAQ", id: "faq" }
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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
        <div className="left-0 top-0 w-full bg-black p-4 lg:static lg:w-auto flex items-center justify-between pl-20">
            {/* absolute left-[10px] top-[15px] bottom-[15px] ml-[12px] pl-0 pt-[2px] flex flex-row justify-center items-center */}
            <div className={`${isMobile ? "absolute left-[10px] top-[15px] bottom-[15px] ml-[12px] pl-0 pt-[2px] flex flex-row justify-center items-center" : "px-0 pt-2 flex flex-row justify-center items-center"} `}>
                <div className="pl-0">
                    <Image
                        src="/mcsc.png"
                        alt="MCSC Logo"
                        width={70}
                        height={25}
                    />
                </div>
            </div>
            <div className="flex lg:flex hidden">
                {navbarItems.map((nav) => (
                    <div key={nav.id} className='pt-2 px-6'>
                        <Link href={`#${nav.id}`}>
                            <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">{nav.item}</code>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='lg:hidden flex flex-1 justify-end items-center'>
                <Image
                    src={toggle?'/close.svg':'/menu.svg'}
                    alt="menu"
                    width={20}
                    height={20}
                    onClick={() => setToggle(!toggle)}
                />
                <div className={`lg:hidden ${toggle ? "" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    {navbarItems.map((nav) => (
                        <div key={nav.id} className='pt-2 px-6'>
                            <Link href={`#${nav.id}`}>
                                <code className="text-md font-light tracking-wider hover:text-[#00ff41] hover:drop-shadow-[0_35px_35px_rgba(0,255,65,1)] cursor-default">{nav.item}</code>
                            </Link>
                        </div>
                ))}
            </div>

            </div>
        </div>
    );
}

export default Navbar;

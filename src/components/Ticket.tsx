import { fetchAndStoreUserData } from '@/app/userData';
import { fetchUserDataFromDB } from '@/app/userDataFromDb';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function generateSerialNumber() {
    length = 15;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let serialNumber = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        serialNumber += characters.charAt(randomIndex);
    }
    return serialNumber;
}

const Ticket = () => {
    const { data: session, status } = useSession();

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


    const [user, setUser] = useState({
        name: '',
        login: '',
        avatar_url: '',
    });

  useEffect(() => {
    const fetchUserData = async () => {
      if (status === 'authenticated') {
        try {
          const userRes = await fetch("https://api.github.com/user", {
                headers: {
                Authorization: `bearer ${session?.accessToken as string}`,
                },
            });
          if (userRes.ok) {
            const userData = await userRes.json();

            const existingUserData = await fetchUserDataFromDB(userData.login);
            if (!existingUserData) {
              // Si l'utilisateur n'existe pas, ajoutez-le à la base de données
              await fetchAndStoreUserData(userData);
            }
            // Utilisez les informations utilisateur (existingUserData ou userData)
            setUser(existingUserData || userData);

            // setUser(userData);
          } else {
            console.error('Failed to fetch user data:', userRes.statusText);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [session, status]);


    if(status === "authenticated"){
        const serialNumber = generateSerialNumber();
        return (
          <>
            {isMobile ? (
              <div className="shrink-0 mt-4 relative pt-8">
              <Image
                  src="/Asset 1.png"
                  alt="Ticket"
                  width={350}//900
                  height={150}//250
                  className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
              />
              <div className="shrink-0 m-7 z-11 absolute top-[25px] p-10 left-[53px] flex flex-col justify-between items-start">
                  <code className="text-[10px] font-semibold text-center text-white pb-1">
                  {user?.name}
                  </code>
                  <code className=" text-[8px] text-center text-white">
                  {user?.login}
                  </code>
              </div>
              <div className="shrink-0 mt-3 z-11  absolute top-12 pt-10 left-[39px] rounded-full">
                  <Image
                  src={user?.avatar_url}
                  width={57}
                  height={57}
                  alt='Profile Picture'
                  className='rounded-full scale-125'
                  />
              </div>
              <div className="z-10 absolute bottom-[12px] left-[280px] p-6 flex flex-col justify-center items-center">
                  <code className='text-[8px] -rotate-90 opacity-50'>#{serialNumber}</code>
              </div>
            </div>
            ):(
              <div className="shrink-0 mt-4 relative pt-8">
                <Image
                    src="/Asset 1.png"
                    alt="Ticket"
                    width={900}
                    height={250}
                    className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
                />
                <div className="shrink-0 mt-4 z-10 absolute top-44 left-80 flex flex-col justify-between items-start">
                    <code className="text-2xl font-semibold text-center text-white pb-1">
                    {user?.name}
                    </code>
                    <code className="text-xl text-center text-white">
                    {user?.login}
                    </code>
                </div>
                <div className="shrink-0 mt-4 z-10 absolute top-44 pt-3 left-24 rounded-full">
                    <Image
                    src={user?.avatar_url}
                    width={150}
                    height={150}
                    alt='Profile Picture'
                    className='rounded-full scale-125'
                    />
                </div>
                <div className="z-10 absolute bottom-14 right-0 pl-18 flex flex-col justify-center items-center">
                    <code className='pt-24 -rotate-90 opacity-50'>#{serialNumber}</code>
                </div>
              </div>
            )}
          </>
        );
      //   return (
          
      // );
    }

    return (
        <div className="shrink-0 mt-4 relative pt-8">
        <Image
            src="/Asset 1.png"
            alt="Ticket"
            width={isMobile? 350 : 900}//350
            height={isMobile? 250 : 150}//150
            className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
        />
        </div>
    );
};
export default Ticket;



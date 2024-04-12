import { Tilt } from "react-tilt";


const ImageCard = ({ index, title, icon }:
    {
        index:any;
        title:any;
        icon?:any;
    }) => {

        const direction="right";
        const type="spring";
        const delay=index*0.5
        const duration=0.75;
    return(
    <Tilt className='xs:w-[250px] w-full' options={{
        max: 45,
        scale: 1,
        speed: 300,
    }}>
            <div className='min-w-[250px] bg-white w-full rounded-xl shadow-card' >  <div
            
            className='rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-gradient-radial bg-gradient-to-br from-pink-200 to-white'
            >
                <div className=" scale-110">
            <img
                src={icon}
                alt='Doctor'
                className='w-20 h-20 rounded-full'
            /></div>
    
            <h3 className='text-lg font-bold text-center'>
                {title}
            </h3>
            </div>
            </div>
    </Tilt>
    );
};

export default ImageCard;
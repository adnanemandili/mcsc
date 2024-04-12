import { Tilt } from "react-tilt";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const ViewMoreCard = ({ index }:
    {
        index:any;
    }) => {

        const direction="right";
        const type="spring";
        const delay=index*0.5
        const duration=0.75;
    return(
    <Tilt className='xs:w-[250px] w-full' options={{
        max: 45,
        scale: 1,
        speed: 450,
    }}>
            <div className='min-w-[250px] w-full p-[1px] rounded-xl shadow-card'>
            <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            
            <ChevronRightIcon className="h-20 w-20"/>
    
            <h3 className='text-lg font-bold text-center'>
                View More
            </h3>
            </div>
            </div>
    </Tilt>
    );
};

export default ViewMoreCard;
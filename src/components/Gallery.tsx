import { motion } from "framer-motion";
import Link from "next/link";
import ImageCard from "./ImageCard";
import ViewMoreCard from "./ViewMoreCard";

const Gallery = ()=>{

    return(
        <div>
        <div className='flex flex-col items-center p-6'>
        <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
            }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h1 className='text-4xl font-bold text-center mb-4'>
            Not Sure about the app's Diagnosis?
        </h1></motion.div>
        <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.5
                }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h3 className='text-2xl text-center mb-8'> Double check with a Doctor</h3>
        </motion.div>
            <div className='items-center justify-center text-center pt-2'>
            <Link href="/https://www.dabadoc.com/ma">
                
            </Link>
            </div>
        </div>
    <div className='snap-mandatory snap-x flex overflow-x-auto gap-10 px-4 py-6'>

        <div className="snap-center">
            <Link href="https://www.dabadoc.com/ma">
            <ImageCard key="" index="{index}" title="" />
            </Link>
            </div>
        <ViewMoreCard index=""/>
        </div>
    </div>);
}
export default Gallery;
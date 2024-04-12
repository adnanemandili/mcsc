"use client";
import './TypingAnimation.module.css';


const TypingEffect = ({text}:{text:string}) => {

    return (
        <div className="typing-effect" style={{animation: "typing 4s steps(30, end) infinite"}}>
            <code>
            Hello from mcsc
            </code>
        </div>
    );
};
export default TypingEffect;

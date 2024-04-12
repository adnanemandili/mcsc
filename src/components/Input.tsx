const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <input type="text" placeholder={placeholder} className="z-30 rounded-lg ring-2 ring-[#00ff41] pl-4 pr-24 py-3 bg-black text-white/[0.7]"/>
    );
};
export default Input;
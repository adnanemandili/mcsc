import { useState } from "react";

const baseurl = process.env.NEXTAUTH_URL;
const redirectUrl = `${baseurl}/register`;

// const handleClick = signIn("github");

const RegisterButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <a
      href={redirectUrl}
      onClick={() => setLoading(true)}
      className="shrink-0 mt-4 relative px-10 py-3 rounded-lg ring-2 ring-[#00ff41] border-[#00ff41] border-2 bg-transparent flex items-center justify-center font-medium hover:scale-105 transition-all"
    >
        <p className='text-xl text-center'>
            <code>{loading ? "Redirecting ...." : "Register Now"}</code>
        </p>
    </a>
  );
}
export default RegisterButton;
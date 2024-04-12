"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
    process.env.GITHUB_CLIENT_ID || ""
)}`;

export const GithubButton = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
        setLoading(true); // Set loading state to true before sign-in process
        await signIn("github"); // Perform sign-in process
        setLoading(false); // Reset loading state after sign-in process completes
    };
    return (
        <button onClick={() => signIn("github")}
        className="shrink-0 mt-4 relative bg-transparent text-white rounded-lg ring-2 ring-[#00ff41] px-10 py-4 flex items-center justify-center font-medium  hover:scale-105 transition-all "
        >
        <code>Customize with Github</code>
        </button>
    );
};
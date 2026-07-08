import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../auth/firebase";
import { allowedEmails } from "../auth/allowedEmails";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const email = result.user.email || "";

      if (!allowedEmails.includes(email)) {
        alert("Access Denied");

        await auth.signOut();

        return;
      }

      // Go to Dashboard
      navigate("/", { replace: true });

    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="w-[420px] rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 shadow-2xl">

        <h1 className="text-center text-4xl font-bold text-white">
          HMS GANN DEGREE CALCULATOR
        </h1>

        <p className="mt-3 text-center text-cyan-400">
          Sun_Earth Cyclic Degree Calculator
        </p>

        <button
          onClick={handleLogin}
          className="mt-10 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}
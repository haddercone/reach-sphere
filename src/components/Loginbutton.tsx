"use client";

import { signIn, useSession } from "next-auth/react";
import { LoginButtonProps } from "./types/types";
import { useEffect, useState } from "react";

const Loginbutton = ({ style, text, children }: LoginButtonProps) => {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  
  useEffect(() => {
    if (session.data) {
      setLoading(false);
    }
  }, [session, loading]);

  function logIn() {
    signIn("twitter", { redirect: false, callbackUrl: "/dashboard" });
    setLoading(true);
  }
  
  return (
    <button disabled={loading} onClick={() => logIn()} className={style}>
      <span>{loading ? "Logging in... " : text}</span>
      {loading ? null : children}
    </button>
  );
};

export default Loginbutton;

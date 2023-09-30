import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useRedirectAfterSomeSeconds(redirectTo, seconds = 5) {
  let secondsRemaining = seconds;
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0) router.push("/");

    const timer = setTimeout(() => {
      secondsRemaining = secondsRemaining - 1;
      if (secondsRemaining === 1) router.push(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return { secondsRemaining };
}

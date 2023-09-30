import useRedirectAfterSomeSeconds from "@/hooks/useRedirectTimeout";
import Home from "./home";

export default function app() {
  const [secondsRemaining] = useRedirectAfterSomeSeconds("/", 5);
  return <Home />;
}

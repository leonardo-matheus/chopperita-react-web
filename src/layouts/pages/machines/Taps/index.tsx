import Torneira from "./components/Torneira.jsx";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
export default function App() {
  const { data } = useFetch("api/message/taps", { refreshInterval: 5000 });
  const [taps, setTaps] = useState([]);

  useEffect(() => {
    if (data && data.taps.length > 0) {
      const teste = data.taps.map((tap: { [x: string]: any }, i: number) => {
        const conjunct = "conjunct_" + (i + 1);
        return tap[conjunct];
      });
      setTaps(teste);
    }
  }, [data]);

  return (
    <>
      {taps.map((tap, i) => (
        <Torneira key={i} tap={tap} />
      ))}
    </>
  );
}

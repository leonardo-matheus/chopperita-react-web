import Torneira from "./Torneira";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import { Tap } from "./Torneira"; // Certifique-se de que o tipo Tap esteja definido corretamente

export default function TorneiraModule() {
  const { data } = useFetch("api/message/taps", { refreshInterval: 1000 });
  const [taps, setTaps] = useState<Tap[]>([]); // Defina o tipo de taps como um array de objetos do tipo Tap

  useEffect(() => {
    if (data && data.taps.length > 0) {
      const waitingTaps = data.taps.filter((tap: Tap) => tap.status === "full");
      setTaps(waitingTaps);
    }
  }, [data]);

  return (
    <div style={{ display: "flex" }}>
      {taps.map((tap: Tap, i: number) => (
        <Torneira key={i} tap={tap} />
      ))}
    </div>
  );
}

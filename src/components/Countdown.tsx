"use client";
import { useEffect, useState } from "react";

// Date cible du compte à rebours (à adapter)
const TARGET = new Date("2027-01-31T00:00:00Z").getTime();
const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

function parts(ms: number) {
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
}

export default function Countdown() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const values = parts(left);
  return (
    <div className="mt-10 flex items-end justify-center gap-2 sm:mt-14 sm:gap-5">
      {units.map((u, i) => (
        <div key={u} className="flex items-end gap-2 sm:gap-5">
          <div>
            <div className="mb-3 text-center text-[11px] font-bold uppercase">{u}</div>
            <div className="flex gap-1 sm:gap-2">
              {String(values[i]).padStart(2, "0").split("").map((d, k) => (
                <span key={k} className="grid h-[48px] w-[34px] place-items-center bg-white/15 font-display text-[36px] sm:h-[72px] sm:w-[56px] sm:text-[64px] font-bold leading-none">{d}</span>
              ))}
            </div>
          </div>
          {i < units.length - 1 && <span className="pb-2 font-display text-[24px] sm:pb-4 sm:text-[44px] leading-none">:</span>}
        </div>
      ))}
    </div>
  );
}
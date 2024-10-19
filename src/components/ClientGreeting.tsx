"use client";

import { multiplyByTwo } from "../app/actions/action";
import { useState } from "react";

export default function ClientGreeting({ name }: { name: string }) {
  const [state, setState] = useState(1);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline">Hello {name}</h1>
      <button
        onClick={async () => {
          const { number } = await multiplyByTwo(state);
          setState(number);
        }}
        className="block w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Double me!
      </button>
      <p className="text-center text-xl">{state}</p>
    </div>
  );
}

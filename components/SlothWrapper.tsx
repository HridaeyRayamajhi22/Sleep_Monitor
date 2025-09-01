"use client"; // must be client component

import dynamic from "next/dynamic";

// Dynamically import Sloth, now it's safe because this component is client-side
const Sloth = dynamic(() => import("./Sloth"), { ssr: false });

export default function SlothWrapper() {
  return <Sloth />;
}

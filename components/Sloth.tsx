"use client"; // make this client-side
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Sloth() {
  return (
    <div className="flex justify-center items-center animate-float">
      <Player
        autoplay
        loop
        src="/Sloth.json"
        style={{ height: 150, width: 150 }}
      />
    </div>
  );
}

"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import slothAnimation from "@/public/Sloth.json"; // your downloaded animation

export default function Sloth() {
  return (
    <div className="w-64 h-64 mx-auto">
      <Player
        autoplay
        loop
        src={slothAnimation}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

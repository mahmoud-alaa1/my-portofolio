"use client";

import { Moon } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { IoSunny } from "react-icons/io5";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <motion.button
      className={`toggle-container items-center w-[4.1rem]  rounded-full flex cursor-pointer py-1 px-2 ${
        isOn ? "justify-start" : "justify-end bg-amber-300"
      }`}
      animate={{
        backgroundColor: isOn ? "#ffde71" : "#00000094",
        transition: { duration: 0.2 },
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        layout
        className=" rounded-full p-1 "
        animate={{
          backgroundColor: isOn ? "#EBAA0F" : "#4e54a98d",
          transition: { duration: 0.2 },
        }}
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        {isOn ? <IoSunny /> : <Moon className="size-4" />}
      </motion.div>
    </motion.button>
  );
}

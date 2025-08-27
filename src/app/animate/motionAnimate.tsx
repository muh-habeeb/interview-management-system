
"use client"
import { motion } from "motion/react";
import React, { ReactNode } from "react";

type MotionAnimateProps = {
  children: ReactNode; // 👈 any JSX you want to pass inside
};

const MotionAnimate = ({ children }: MotionAnimateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionAnimate;

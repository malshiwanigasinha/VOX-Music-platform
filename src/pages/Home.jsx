// home.jsx
import React from "react";
import { Hero, New, Recommand, Treading } from "../router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Treading />
      <New />
      <Recommand />
    </>
  );
};
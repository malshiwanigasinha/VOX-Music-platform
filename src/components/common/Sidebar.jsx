import React from "react";
import { recommand } from "../assets/data/data";
import { Card_sm } from "./Card_sm";

export const Sidebar = () => {
  return (
    <section className="sidebar hero fixed r-0 top-0 w-60 md:w-40 lg:w-60 h-screen p-4 bg-gray-50 shadow-lg overflow-y-auto">
      <h1 className="mb-5 text-lg font-semibold text-gray-600">5 Likes</h1>
      {recommand.slice(0, 5).map((item, i) => (
        <div key={i} className="mb-3">
          <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} />
        </div>
      ))}
      
      <p className="text-xs mt-5">About | Contact | Legal | Policy</p>
    </section>
  );
};

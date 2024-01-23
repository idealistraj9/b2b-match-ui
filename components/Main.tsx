"use client";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./ui/theme-provider";
import { useTheme } from "next-themes";
import PromptText from "./promptText";
import TextCard from "@/components/promptCard";
import React, { useRef } from "react";
import PromptRes from "@/components/promptRes";
import PromptGraph from "@/components/promptGraph";
import Sidebar from "@/components/sideBar";
import Footer from "@/components/footer";
export default function Main() {
  return (
    <>
      <ThemeProvider>
        <div
          className={cn(
            "flex w-full font-sans antialiased bg-secondary text-foreground text-xl overflow-hidden"
          )}
        >
          <div className="overflow-y-scroll overflow-x-hidden relative max-h-lvh">
            <PromptText />
            <div className="w-11/12  ml-10 rounded-lg flex flex-row ">
              <TextCard
                title="Title"
                description=""
                buttonText="Learn More"
                buttonLink="#"
                customMessage="This is a  message for Title.This is a  message for Title"
              />
              <TextCard
                title="Title"
                description=""
                buttonText="Learn More"
                buttonLink="#"
                customMessage="This is a custom message for Title."
              />
              <TextCard
                title="Title"
                description=""
                buttonText="Learn More"
                buttonLink="#"
                customMessage="This is a custom message for Title."
              />
              <TextCard
                title="Title"
                description=""
                buttonText="Learn More"
                buttonLink="#"
                customMessage="I am a good boy, my name is Raj."
              />
            </div>
            <div className="flex flex-col p-3 bg-secondary text-foreground shadow-primary shadow-2xl  w-1112 m-3 mt-0 pt-0 scroll-container max-h-60">
              <PromptRes />
            </div>
            <div className="flex flex-col p-3 bg-secondary text-foreground shadow-2xl w-1112 m-3 mt-0 pt-0 scroll-container  ">
              <PromptGraph />
            </div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

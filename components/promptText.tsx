import React from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";

const PromptText = () => {
  return (
    <>
      <div className="flex m-2"></div>
      <div className="flex text-left justify-center w-11/12">
        <span className="text-3xl font-bold ">
          <h1 className="bg-gradient-to-r p-1 from-green-600 via-violet-900-500 to-violet-700 inline-block text-transparent bg-clip-text">
            Enter Your Prompt
          </h1>
        </span>
      </div>
      <div className="flex ml-14 w-11/12 justify-center items-center">
        <Textarea
          placeholder="Type your message here."
          rows={1}
          className=" text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-xl w-11/12 border-[1px] hover:border-ring outline-none transition-all duration-500"
        />
        <div className="flex flex-col m-2 w-34">
          <Button variant={"ghost"} className="bg-primary text-secondary p-1">
            Save 
          </Button>
          <Button variant={"outline"} className="bg-primary text-secondary ">
            New 
          </Button>
          <Button variant={"outline"} className="bg-primary text-secondary ">
            Submit
          </Button>
        </div>
        {/* <Button className="w-20 bg-primary text-primary-foreground">
          Submit
        </Button> */}
      </div>
    </>
  );
};

export default PromptText;

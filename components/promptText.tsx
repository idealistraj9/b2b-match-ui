import React from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";

const PromptText = () => {
  return (
    <>
      <div className="flex w-11/12 justify-center items-center ml-2">
        <Textarea
          placeholder="Type your message here."
          rows={1}
          className="pl-4 text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-lg w-11/12 border-[1px] hover:border-ring outline-none transition-all duration-500"
        />
        <div className="flex flex-col m-2 w-34">
          <Button
            variant={"outline"}
            className="bg-primary text-secondary text-sm h-7 border-white border "
          >
            Save
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
            New
          </Button>
          <Button
            variant={"outline"}
            className="bg-primary text-secondary h-7 border-white border"
          >
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

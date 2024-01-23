import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "./ui/card";

const PromptRes = () => {
  return (
    <>
      <div className="flex flex-col w-full rounded-lg p-5">
        <span className=" text-lg bg-popover p-3 rounded-lg m-2 flex items-center justify-between">
          Title : Small Title of Your prompt. Introducing your response
          <div>
            <Button
              variant={"outline"}
              className="bg-primary text-secondary mr-3"
            >
              Save This Response - ⭐
            </Button>
            <Button
              variant={"outline"}
              className="bg-primary text-secondary mr-3"
            >
              New Response
            </Button>
            <Button
              variant={"outline"}
              className="bg-primary text-secondary mr-3"
            >
              Submit
            </Button>
          </div>
        </span>

        <div className=" w-full rounded-lg p-3 bg-popover text-lg max-h-32 overflow-auto">
          <p className="text-gray-700 dark:text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            cupiditate vitae, id possimus tenetur corrupti itaque ratione
            voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti
            itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur.
            adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur
            corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti
            itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur,
          </p>
        </div>
      </div>
    </>
  );
};

export default PromptRes;

import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "./ui/card";

const PromptRes = () => {
  return (
    <>
      <div className="flex flex-col w-full rounded-lg p-3">
        
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

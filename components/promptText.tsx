import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import "../app/globals.css";

const PromptText = () => {
  return (
    <>
      <div className="flex m-5">
        <svg
          viewBox="0 0 1024 1024"
          className="w-7 ml-5"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M602.587685 727.095869c7.981294-58.263445 57.465316-115.728761 73.427903-131.691348 94.977397-91.784879 97.371785-242.631333 5.586906-337.60873s-243.429462-97.371785-338.406859-5.586906-97.371785 243.429462-5.586905 338.406859l5.586905 5.586906c15.962588 15.164458 65.44661 72.629774 73.427904 131.691348 1.596259 17.558846 3.192518 35.117693 2.394388 51.87841h180.377241c0.798129-17.558846 1.596259-35.117693 3.192517-52.676539z"
              fill="#FFECBA"
            ></path>
            <path
              d="M600.193297 795.734996H419.017927c-3.990647 0-7.981294-1.596259-11.173812-4.788776-3.192518-3.192518-4.788776-7.183164-4.788776-11.173812 0-16.760717-0.798129-33.521434-2.394388-50.282151-7.183164-51.87841-51.87841-105.353079-68.639127-122.113796l-5.586906-5.586905c-47.887763-48.685892-73.427903-113.334373-71.831644-181.9735s28.732658-131.691348 77.41855-179.579111 113.334373-73.427903 181.973499-71.831645c67.840998 0.798129 131.691348 28.732658 179.579112 77.41855s73.427903 113.334373 71.831645 181.9735c-0.798129 67.840998-28.732658 131.691348-77.418551 179.579111-15.962588 15.164458-61.455963 69.437256-68.639127 122.113796-1.596259 16.760717-3.192518 33.521434-2.394388 50.282151 0 3.990647-1.596259 7.981294-4.788776 11.173812-3.990647 3.192518-7.981294 4.788776-11.971941 4.788776z m-165.212783-31.925175h149.250195c0-12.77007 1.596259-25.54014 2.394388-38.310211 10.375682-74.226033 77.41855-139.672642 78.21668-140.470771 43.098987-41.502728 67.042868-97.371785 67.840998-157.231489 0.798129-59.859704-21.549493-116.52689-63.052222-158.827748-41.502728-43.098987-97.371785-67.042868-157.231488-67.840997C453.33749 199.532346 396.670304 221.879969 354.369447 263.382697c-43.098987 41.502728-67.042868 97.371785-67.840998 157.231489-0.798129 59.859704 21.549493 116.52689 63.052221 158.827747l4.788777 4.788776c0.798129 0.798129 67.840998 67.042868 78.216679 140.470772 1.596259 13.5682 2.394388 26.33827 2.394388 39.10834z"
              fill=""
            ></path>
            <path
              d="M418.219797 902.684334c-2.394388 53.474669 37.512081 99.766173 91.78488 105.353078 53.474669-4.788776 94.179267-51.080281 91.784879-105.353078 0-39.906469-1.596259-85.399844-1.596259-123.710055H419.017927c0.798129 38.31021-0.798129 83.803585-0.79813 123.710055z"
              fill="#B2DAF6"
            ></path>
          </g>
        </svg>
        <span className="text-foreground font-bold text-[18px]">
          {" "}
          Tip: you can alter the values of x and y to anything !!
        </span>
      </div>
      <span className="text-3xl m-5 font-bold  pl-6">
        <h1 className="bg-gradient-to-r p-5  from-green-600 via-violet-900-500 to-violet-700 inline-block text-transparent bg-clip-text">
          Enter Your Prompt
        </h1>
      </span>
      <div className="flex pl-6 w-11/12 justify-center gap-5 items-center">
        <Textarea
          placeholder="Type your message here."
          rows={5}
          className="mb-2 text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-xl  w-11/12  p-3 pl-5 pr-14 border-[1px] hover:border-ring outline-none transition-all duration-500"
        />
        <Button className=" w-20 bg-primary text-primary-foreground">
          Submit
        </Button>
      </div>
    </>
  );
};

export default PromptText;
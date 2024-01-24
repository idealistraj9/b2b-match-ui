import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";

const PromptGrph = () => {
  return (
    <>
      <div className="w-full rounded-lg p-3 flex pt-0  text-lg">
        <img src="/graph1.jpg" alt="" className="w-9/12 rounded-lg mr-3" />
        <div className="bg-card w-full rounded-lg p-5">
          <ol className="list-decimal">
            <b>
              <h1>Highlighted numerical points</h1>
            </b>
            <li className="m-3">total values in india</li>
            <li className="m-3">total no. of student in india</li>
            <li className="m-3">total values in USA</li>
            <li className="m-3">total no. of student in USA</li>
            <li className="m-3">total values in UK</li>
            <li className="m-3">total no. of student in UK</li>
          </ol>
          <ul className="list-disc">
            <b>
              <h1>Highlighted descriptive points</h1>
            </b>
            <li className="m-3">total values in USA</li>
            <li className="m-3">total no. of student in USA</li>
            <li className="m-3">total values in UK</li>
            <li className="m-3">total no. of student in UK</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PromptGrph;

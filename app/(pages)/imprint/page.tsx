import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Footer from "@/components/footer";

export default function Imprint() {
  return (
    <>
      <div className="bg-secondary p-10 pt-3 flex flex-col text-center justify-center h-screen overflow-auto">
        <span className="text-5xl mt-5 font-bold  pl-6">
          <h1 className="bg-gradient-to-r p-5  from-green-600 via-violet-900-500 to-violet-700 inline-block text-transparent bg-clip-text">
            Imprint
          </h1>
        </span>
        <div className="bg-secondary flex justify-center items-center m-3 rounded-sm border-background mt-3 pt-0">
          <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
            <CardTitle className="text-xl">Contact</CardTitle>
            <CardDescription className="text-[20px]">
              BildKom International GmbH
              <br />
              Hardgutstrasse 28, 8048 Zurich
              <br />
              UID: CHE-112.192.208
              <br />
              Telephone: 044 380 78 88
              <br />
              Email: bkcontact@bildkom.com
              <br />
              Website: <a href="https://bildkom.com/">https://bildkom.com/</a>
            </CardDescription>
            <CardTitle className="mt-5 text-xl">
              Authorized representative
            </CardTitle>
            <CardDescription className="text-[20px]">
              Dr. Patrik Zwahlen (owner and managing director)
            </CardDescription>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

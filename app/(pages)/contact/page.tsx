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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Imprint() {
  return (
    <>
      <div className="bg-secondary p-10 pt-3 flex flex-col text-center justify-center h-full overflow-auto">
        <span className="text-5xl mt-5 font-bold  pl-6">
          <h1 className="bg-gradient-to-r p-5  from-green-600 via-violet-900-500 to-violet-700 inline-block text-transparent bg-clip-text">
            Contact Us
          </h1>
        </span>
        <div className="bg-secondary flex justify-center items-center m-3 rounded-sm border-background mt-3 pt-0">
          <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
            <CardTitle className="text-xl">Get in Touch</CardTitle>
            <CardDescription className="text-[20px]">
              If you have any inquiries or need assistance, please feel free to
              contact us using the form below. We will get back to you as soon
              as possible.
            </CardDescription>
            <CardTitle className="text-lg">Surname</CardTitle>
            <Input className="text-secondary-foreground bg-card mb-5" />
            <CardTitle className="text-lg">e-mail</CardTitle>
            <Input className="text-secondary-foreground bg-card mb-5" />
            <CardTitle className="text-lg">Inquiry</CardTitle>
            <Textarea className="text-secondary-foreground bg-card mb-5" rows={5}/>
            <Button>Submit </Button>
            </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

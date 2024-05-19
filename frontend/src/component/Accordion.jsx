import React, { useRef } from "react";
import Button from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({ faq, openContent, setOpenContent, index }) {
  const contentRef = useRef();

  const isOpen = openContent === index;

  return (
    <>
      <div className="bg-gray-50 border-2 rounded-xl p-4 border-regent-500 shadow-lg">
        <div className="flex items-center justify-between">
          <p className="first-letter:uppercase text-2xl font-semibold">
            {faq.title}
          </p>
          <Button
            type="circle"
            onClick={() => setOpenContent(isOpen ? null : index)}
          >
            {isOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
          </Button>
        </div>
        <div
          className=" transition-all overflow-hidden"
          ref={contentRef}
          style={
            isOpen
              ? { height: contentRef.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="border my-8 border-gray-500"></div>
          <p className="text-2xl">{faq.content}</p>
        </div>
      </div>
    </>
  );
}

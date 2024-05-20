import React from "react";
import Button from "./Button";
import { X } from "lucide-react";

export default function Modal({ children, setShowModal }) {
  return (
    <>
      {/* <div
        className="bg-gray-400 w-full h-full absolute top-0 left-0 inset-0 opacity-70"
        onClick={() => setShowModal(false)}
      ></div> */}
      <div className="absolute top-0 left-0 inset-0 backdrop-blur-sm bg-raven-500 bg-opacity-50">
        <div className="relative w-screen h-full">
          <div className="absolute top-1/2 left-1/2 bg-gray-50 p-8 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-full max-w-screen-sm">
            <div className="text-end">
              <Button onClick={() => setShowModal(false)}>
                <X size={32} />
              </Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

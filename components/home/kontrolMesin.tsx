"use client";
import { useLEDControl } from "@/libs/mesin-lib";

const TombolMesin = () => {
  const { state, message, handleControl } = useLEDControl();

  let status;
  if (state === "on") {
    status = "nyala";
  } else {
    status = "mati";
  }

  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <div className="flex space-x-4">
        <button
          className="block w-auto rounded border ease-in hover:ease-out duration-200 border-rose-200 bg-rose-200 px-6 sm:px-12 py-3 text-sm font-medium text-rose-800 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          onClick={() => handleControl("on")}
        >
          Nyalain
        </button>
        <button
          className="block w-auto rounded border ease-in hover:ease-out duration-200 border-rose-200 px-6 sm:px-12 py-3 text-sm font-medium text-rose-200 hover:text-rose-800 hover:bg-rose-200 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          onClick={() => handleControl("off")}
        >
          Matiin
        </button>
      </div>
      <p
        className={`rounded-full border py-1 px-3 ${
          state === "on"
            ? "bg-rose-200 text-rose-900 border-0"
            : "text-rose-200"
        }`}
      >
        Mesin sedang {status}
      </p>
    </div>
  );
};

export default TombolMesin;

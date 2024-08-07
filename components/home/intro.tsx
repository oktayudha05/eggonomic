import React from "react";
import { authUserSession } from "@/libs/auth-lib";
import KontrolMesin from "./kontrolMesin";

export default async function Intro() {
  const session = await authUserSession();
  return (
    <section className="text-white">
      <div className="px-4 pt-0 md:py-40">
        <div className="mx-auto max-w-3xl text-center sm:text-start">
          <h1 className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Eggonomic.io:
            <span className="sm:hidden block pb-1"> Pakan Otomatis </span>
            <span className="hidden sm:block sm:text-4xl pt-1">
              {" "}
              Ringankan Pekerjaan Anda{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Eggonomic adalah alat pakan ayam otomatis yang memastikan pakan
            selalu tersedia, mengurangi tenaga kerja manual, dan meningkatkan
            produktivitas ternak.
          </p>

          <div className="mt-4 mb-4 sm:mb-0 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
            {!session ? (
              <a
                className="block w-auto rounded border ease-in hover:ease-out duration-200 border-rose-200 px-6 sm:px-12 py-3 text-sm font-medium text-rose-200 hover:text-rose-800 hover:bg-rose-200 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                href="/login"
              >
                Login
              </a>
            ) : (
              <KontrolMesin />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

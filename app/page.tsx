import Intro from "../components/home/intro";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex-col lg:flex-row">
          <div>
            <Intro />
          </div>
        </div>
      </div>
    </>
  );
}

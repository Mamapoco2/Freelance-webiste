import Worker from "./Assets/worker.png";

export default function Contact() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-[100px] bg-gray-50 animate-fade-in">
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Currently <span className="text-green-500">Working</span> on it...
        </h1>
        <p className="text-gray-600 text-lg">
          Feature under development (Error 501)
        </p>
        <img
          src={Worker}
          alt="Worker illustration"
          className="w-72 md:w-96 mt-6"
        />
      </div>
    </div>
  );
}

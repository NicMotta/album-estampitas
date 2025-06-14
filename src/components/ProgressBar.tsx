export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p>Devstampitas coleccionadas: <span>{progress}</span>/10</p>
      <div className="w-1/2 m-auto rounded-full h-4 bg-amber-100">
      <div
        className="bg-[#f0d399] h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
}
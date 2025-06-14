import { useEffect, useState } from "react";
import { $isOpenAbout } from "../utils/store";
import CloseButton from "./CloseButton";

export default function CardDetail() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  document.body.style.overflow = "hidden";
  setShow(true);
}, []);


  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.888)] z-[9999] flex justify-center items-center transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 bg-[#f0d399] p-4 rounded-lg max-w-2xl m-4">
        <h2 className="text-2xl font-bold">¿Cómo funciona?</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nobis possimus cupiditate impedit, excepturi delectus, perferendis facilis velit molestias porro, animi adipisci quod quae repellendus voluptatem accusamus nesciunt vero. Ipsam.</p>

        </div>
        <CloseButton onClick={() => $isOpenAbout.set(false)} />
      </div>
    </div>
  );
}

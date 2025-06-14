import { useEffect, useRef, useState } from "react";
import { $cardSelected, $isOpen } from "../utils/store";
import { useStore } from "@nanostores/react";
import CloseButton from "./CloseButton";
import { getCoverImage } from "../utils/helpers";

export default function CardDetail() {
  const cartaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const { image, haveIt, cover } = useStore($cardSelected);

  useEffect(() => {
  // Bloquear scroll al mostrar
  document.body.style.overflow = "hidden";
  setShow(true);

  const carta = cartaRef.current;
  const container = containerRef.current;
  if (!carta || !container) return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotateX = deltaY * 10;
    const rotateY = deltaX * -10;

    carta.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    carta.style.boxShadow = `${-deltaX * 20}px ${deltaY * 20}px 30px rgba(0, 0, 0, 0.3)`;
  };

  const handleMouseLeave = () => {
    carta.style.transform = "rotateX(0deg) rotateY(0deg)";
    carta.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    document.body.style.overflow = "auto"; // restaurar scroll
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);


  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.85)] z-[9999] flex justify-center items-center transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={containerRef}
          className="relative"
          style={{ perspective: "1000px", width: "400px" }}
        >
          <div
            ref={cartaRef}
            className="w-full h-full bg-white rounded-2xl transition-transform duration-150 ease-out"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img src={haveIt ? image : getCoverImage(cover)} alt="" className="rounded-2xl" />
          </div>
        </div>
        <CloseButton onClick={() => $isOpen.set(false)} />
      </div>
    </div>
  );
}

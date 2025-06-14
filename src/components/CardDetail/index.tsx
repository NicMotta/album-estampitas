import { useEffect, useRef, useState } from "react";
import { $cardSelected, $isOpen } from "../../utils/store";
import { useStore } from "@nanostores/react";
import Button from "../ui/Button";
import { getCoverImage } from "../../utils/helpers";
import styles from "./styles.module.css";

export default function CardDetail() {
  const cartaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const { image, haveIt, cover } = useStore($cardSelected);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);

    const carta = cartaRef.current;
    const container = containerRef.current;
    if (!carta || !container) return;

    const handleMove = (x: number, y: number) => {
      const rect = container.getBoundingClientRect();
      const relativeX = x - rect.left;
      const relativeY = y - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (relativeX - centerX) / centerX;
      const deltaY = (relativeY - centerY) / centerY;
      const rotateX = deltaY * 10;
      const rotateY = deltaX * -10;

      carta.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      carta.style.boxShadow = `${-deltaX * 20}px ${deltaY * 20}px 30px rgba(0, 0, 0, 0.3)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const resetStyle = () => {
      carta.style.transform = "rotateX(0deg) rotateY(0deg)";
      carta.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetStyle);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", resetStyle);

    return () => {
      document.body.style.overflow = "auto";
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetStyle);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", resetStyle);
    };
  }, []);

  return (
    <div>
      <div
        className={`overlay ${show ? styles.visible : styles.hidden}`}
      >
        <div ref={containerRef} className={styles.cardContainer}>
          <div ref={cartaRef} className={styles.card}>
            <img
              src={haveIt ? image : getCoverImage(cover)}
              alt=""
              className={styles.cardImage}
            />
          </div>
        </div>
        <Button type="close" onClick={() => $isOpen.set(false)} />
      </div>
    </div>
  );
}

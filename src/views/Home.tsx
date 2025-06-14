import Catalog from "../components/Catalog"
import CardDetail from "../components/CardDetail"
import Header from "../components/Header"
import InfoButton from "../components/InfoButton"
import About from "../components/About"
import { useStore } from "@nanostores/react"
import { $isOpen, $isOpenAbout } from "../utils/store"

export default function Home() {
  const isOpen = useStore($isOpen);
  const isOpenAbout = useStore($isOpenAbout);

  return (
    <>
      <Header />
      <Catalog />
      {isOpen && <CardDetail />}
      <InfoButton onClick={() => $isOpenAbout.set(true)} />
      {isOpenAbout && <About />}
    </>
  );
}
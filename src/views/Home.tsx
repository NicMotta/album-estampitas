import Catalog from "../components/Catalog"
import CardDetail from "../components/CardDetail"
import Header from "../components/Header"
import About from "../components/About"
import ProgressBar from "../components/ui/ProgressBar"
import NavBar from "../components/NavBar"
import AddCard from "../components/AddCard"
import IdeaModal from "../components/IdeaModal"
import Loader from "../components/ui/Loader"
import { useStore } from "@nanostores/react"
import { $isOpen, $isOpenAbout, $isOpenAddCard, $isOpenIdea, $isLoading } from "../utils/store"

export default function Home() {
  const isOpen = useStore($isOpen);
  const isOpenAbout = useStore($isOpenAbout);
  const isOpenAddCard = useStore($isOpenAddCard);
  const isOpenIdea = useStore($isOpenIdea);
  const isLoading = useStore($isLoading);

  return (
    <>
      { isLoading && <Loader />}
      <Header />
      <ProgressBar progress={3} />
      <Catalog />
      {isOpen && <CardDetail />}
      {isOpenAbout && <About />}
      {isOpenAddCard && <AddCard />}
      {isOpenIdea && <IdeaModal />}
      <NavBar />
    </>
  );
}
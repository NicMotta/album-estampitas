import Catalog from "./components/Catalog"
import CardDetail from "./components/CardDetail"
import Header from "./components/Header"
import { useStore } from "@nanostores/react"
import { $isOpen } from "./utils/store"

export default function App() {
  const isOpen = useStore($isOpen);

  return (
    <>
      <Header />
      <Catalog />
      {isOpen && <CardDetail />}
    </>
  )
}

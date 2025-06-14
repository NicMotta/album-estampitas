interface Props {
  onClick: () => void
}

export default function CloseButton ( { onClick }: Props) {
  return <button
    className="fixed bottom-12 left-1/2 -translate-x-1/2 text-center bg-[#f0d399] p-2 rounded-lg"
    onClick={onClick}
  >
    Cerrar
  </button>
}
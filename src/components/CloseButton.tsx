interface Props {
  onClick: () => void
}

export default function CloseButton ( { onClick }: Props) {
  return <button
    className="fixed bottom-12 left-1/2 -translate-x-1/2 text-center bg-[#f0d399] p-2 rounded-lg"
    onClick={onClick}
  >
    <svg className="w-12 h-12 text-[#603401]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
  </button>
}
import toast from 'react-hot-toast'
import { AiOutlineClose } from 'react-icons/ai'

export const showCustomToast = (Text: string) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-[#8B5E83] text-white shadow-lg rounded-lg pointer-events-auto flex items-start p-4 ring-1 ring-[#8B5E83] ring-opacity-5`}
    >
      <div className="flex-1">
        <span className="text-sm">{Text}</span>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 text-white hover:text-[#D8BFD8] focus:outline-none"
      >
        <AiOutlineClose size={18} />
      </button>
    </div>
  ))
}

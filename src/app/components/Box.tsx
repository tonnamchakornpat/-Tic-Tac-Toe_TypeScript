export default function Box(props: { value: string; onClick: () => void }) {
  const { value, onClick } = props
  return (
    <button
      className="flex justify-center items-center bg-white border-none rounded-[10%] shadow-[0_0_8px_#888] lg:w-28 lg:h-28 w-20 h-20 font-bold text-[5em] my-1 mx-2 font-[sans-serif]  hover:shadow-[0_0_15px_#888]"
      onClick={onClick}
    >
      {value == null ? '' : value}
    </button>
  )
}

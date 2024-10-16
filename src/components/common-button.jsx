export const CommonButton = ({ btnText, btnType, disabled = false }) => {
  return (
    <div className='m-auto'>
      <button
        type={btnType}
        disabled={disabled}
        className='p-2 text-center bg-red-700 text-slate-100 rounded-lg w-28 text-lg font-semibold hover:bg-red-800'
      >
        {btnText}
      </button>
    </div>
  )
}

export default CommonButton

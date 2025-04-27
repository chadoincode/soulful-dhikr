type ButtonProps = {
  text: string
  handleClick: () => void
}

const Button = ({text, handleClick}: ButtonProps) => {
  return(
    <button 
      className="bg-secondary w-[100px] md:w-[200px] rounded-lg p-3 cursor-pointer shadow-2xl"
      onClick={handleClick}
    >
      <p className="text-background text-lg font-semibold">{text}</p>
    </button>
  )
}

export default Button
type ButtonProps = {
  text: string
}

const Button = ({text}: ButtonProps) => {
  return(
    <div className="bg-secondary w-[120px] md:w-[200px] rounded-lg p-3 cursor-pointer">
      <p className="text-background text-lg font-semibold">{text}</p>
    </div>
  )
}

export default Button
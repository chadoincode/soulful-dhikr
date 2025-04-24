type ButtonProps = {
  text: string
}

const Button = ({text}: ButtonProps) => {
  return(
    <div className="bg-secondary">
      <p className="text-background">{text}</p>
    </div>
  )
}

export default Button
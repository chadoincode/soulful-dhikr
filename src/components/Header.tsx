import {ChevronLeft} from "lucide-react";

type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return(
    <div className="flex my-5">
      <ChevronLeft size={30} width={50} color="#C4EA57" />
      <h1 className="text-secondary text-lg font-bold text-center px-3">{title}</h1>
    </div>
  )
}

export default Header
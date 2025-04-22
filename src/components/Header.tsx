import {ChevronLeft} from "lucide-react";

type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return(
    <div className="relative flex items-center py-5">
      <ChevronLeft size={40} width={50} color="#C4EA57" />
      <p className="align-center text-secondary text-lg font-bold text-center px-3 leading-snug">{title}</p>
    </div>
  )
}

export default Header
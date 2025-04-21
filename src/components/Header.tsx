import {ChevronLeft} from "lucide-react";
import { Link } from 'react-router';

type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return(
    <div className="flex py-5">
      <Link to={"/"}>
        <ChevronLeft size={30} width={50} color="#C4EA57" />
      </Link>
      <h1 className="text-secondary text-lg font-bold text-center px-3">{title}</h1>
    </div>
  )
}

export default Header
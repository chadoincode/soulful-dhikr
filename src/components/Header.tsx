import {ChevronLeft} from "lucide-react";

type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return(
    <div className="flex items-center justify-baseline py-5">
      <div className="w-[30px] h-[30px] px-[7px] py-[2.5px]">
        <ChevronLeft strokeWidth={3} color="#C4EA57" />
      </div>
      <p className="align-center text-secondary align-middle text-lg font-bold text-center px-3 leading-snug">{title}</p>
    </div>
  )
}

export default Header
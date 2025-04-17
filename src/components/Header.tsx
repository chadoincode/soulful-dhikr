import ChevronLeft from '../assets/chevron-left.png';
import { Category } from '../types/categories';

type HeaderProps = {
  icon: string
  title: Category
}

const Header = ({icon, title}: HeaderProps) => {
  return(
    <div>
      <img src={ChevronLeft} alt="chevron" />
      <img src={icon} alt="icon" />
      <h1>{title.name}</h1>
    </div>
  )
}

export default Header
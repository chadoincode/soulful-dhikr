import ChevronLeft from '../assets/chevron-left.png';

type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return(
    <div>
      <img src={ChevronLeft} alt="chevron" />
      <h1>{title}</h1>
    </div>
  )
}

export default Header
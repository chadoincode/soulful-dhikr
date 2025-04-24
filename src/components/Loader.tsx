import { RotateLoading } from 'respinner'

const Loader = () => {
  return(
    <div className='spinners'>
      <RotateLoading size={50} color='#C4EA57' duration={1} opacity={0.4} />
      <svg width="40"><use href="#spin" fill="#fff" /></svg>
    </div>
  )
}

export default Loader
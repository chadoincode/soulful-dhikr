import { RotateLoading } from 'respinner'

const Loader = () => {
  return(
    <div className='spinners'>
      <RotateLoading size={50} color='#C4EA57' duration={1} opacity={0.4} />
    </div>
  )
}

export default Loader
import { CopperLoading } from 'respinner'

const Loader = () => {
  return(
    <div className='spinners'>
      <CopperLoading size={60} fill='#E0FF85' color='#C4EA57' strokeWidth={4} duration={1} opacity={0.4} />
    </div>
  )
}

export default Loader
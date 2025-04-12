import Dua from './components/Dua/DuaTitleCard'
import HomePageCard from './components/HomePage/HomePageCard'
import Title from './components/Title'
import MorningDhikr from './assets/morning-dhikr.png'

function App() {
  return (
    <>
      <div>
        {/* <Title /> */}
        {/* <Dua /> */}
        <HomePageCard 
          title={'Morning Dhikr'}
          icon={MorningDhikr}
        />
      </div>
      
    </>
  )
}

export default App
 
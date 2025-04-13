import HomePageCard from './components/HomePage/HomePageCard'
import Title from './components/Title'
import MorningDhikr from './assets/morning-dhikr.png'
import HomePageList from './components/HomePage/HomePageCardList'
import { Category } from './types/categories'
import HomePageContainer from './components/HomePage/HomePageContainer'

function App() {
  return (
    <>
      <div>
        {/* <Title /> */}
        {/* <Dua /> */}
        {/* <HomePageCard 
          title={'Morning Dhikr'}
          icon={MorningDhikr}
        /> */}
        <HomePageContainer />
      </div>
      
    </>
  )
}

export default App
 
import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css'
import Intro from './components/Intro'
import BoxOffice from './components/BoxOffice'
import TvMovies from './components/TvMovies'
import { Button } from 'react-bootstrap'
import { AiOutlineArrowUp } from 'react-icons/ai'

// const scrollUp = () => {
//   const scrollButton = document.getElementById('scrollUp')
//     (window.scrollY >= 560) ? scrollButton.classList.add('back-top') : scrollUp.classList.remove('back-top')
// }
// window.addEventListener('scroll', scrollUp)

function App() {
  return (
    <div className='position-relative'>
      {/* Intro Section */}
      <div className='story-card myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro */}

      {/* Trending Section */}
      <div className='story-card movie-list'>
        <BoxOffice />
      </div>
      {/* End Trending */}
      <div className='story-card movie-list'>
        <TvMovies />
      </div>
      {/* Superhero Section */}

      {/* Back to top */}
      {/* <Button href='#intro' className='scroll-up back-top' id='scrollUp'>
        <AiOutlineArrowUp />
      </Button> */}
    </div>
  );
}

export default App;

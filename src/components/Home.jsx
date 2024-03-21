import React,{useState} from 'react'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import Background1 from '/Images/banner-slide-1 copy.jpg'
import Background2 from '/Images/Background2.jpg'
import Background3 from '../../public/Images/Background3.jpg';
import Main from './Main'
import HomeDestination from './HomeDestination'
import HomeAbout from './HomeAbout'
import '../../src/indexx.css'


const Home = () => {
  const backgrounds = [
    {
      image:Background1,
      content: {
      title: "Life is Short and ",
      text:"The World is Wide.",
      description: "A journey of a 100 milles starts with single step. Import the full demo content with one click and create a head-turning website for your travel agency.",
      },
    },
    {
      image:Background2,
      content: {
        title: "Get to Travel",
        text:"The World.",
        description: "A journey of a 100 milles starts with single step. Import the full demo content with one click and create a head-turning website for your travel agency. ",
      },
    },
    {
      image:Background3,
      content: {
        title: "Enjoy The Travel With",
        text:"Holiday Planner.",
        description: "A journey of a 100 milles starts with single step. Import the full demo content with one click and create a head-turning website for your travel agency.",
      },
    },
  ];
  
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const currentBackground = backgrounds[currentBackgroundIndex];

  const handleNextBackground = () => {
    const nextIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    setCurrentBackgroundIndex(nextIndex);
  };

  const handlePrevBackground = () => {
    const prevIndex = (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    setCurrentBackgroundIndex(prevIndex);
  };

 return (
    <div>
    <div className="home_cont" style={{ backgroundImage: `url(${currentBackground.image})` }}>
    <h1 className='title'>{currentBackground.content.title}</h1>
    <p className='text'>{currentBackground.content.text}</p>
    <p className='description'>{currentBackground.content.description}</p>
    </div>
    <NextButton onClick={handleNextBackground} />
    <PrevButton onClick={handlePrevBackground} />
    <Main />
    <HomeAbout />
    <HomeDestination/>
     
   </div>
   
  )
}

export default Home
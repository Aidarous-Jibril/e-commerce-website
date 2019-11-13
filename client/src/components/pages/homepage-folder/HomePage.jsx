import React from 'react';

//HomePageContianer is CSS in JS
import { HomePageContainer } from './homePage.styles'
import DirectoryMenu from '../../directory-menu/DirectoryMenu';

const HomePage = () => {
  return (
  <HomePageContainer> 
    <h1 className='title'><i className="fas fa-globe-europe"></i> <span className='sub-title text text-primary'>LAURA'S</span> ONLINE CLOTHING SHOP</h1>
      <DirectoryMenu />
  </HomePageContainer>
)};

export default HomePage;
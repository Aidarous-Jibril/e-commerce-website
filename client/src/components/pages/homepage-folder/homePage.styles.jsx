import styled from 'styled-components'

export const HomePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  
    @media screen and (max-width: 800px){
       h1 {
           font-size: 1.9em;
       };
    }
`
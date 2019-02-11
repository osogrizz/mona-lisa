import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  height: 55px;
  padding-top: .8rem ;
  font-size: 0.9rem;
  text-align: center;
  font-family: 'Raleway', sans-serif;

  a {
      text-decoration: none;
      color: #444;

      &:hover {
          /* color: rgb(243, 235, 222); */
          color: #ad42f4;
      }
  }
`

const PreHeader = () => (
    <Wrapper> 
        <p>tel. <a href="tel:702-802-8760">702 802 8760</a></p>
    </Wrapper>
)

export default PreHeader

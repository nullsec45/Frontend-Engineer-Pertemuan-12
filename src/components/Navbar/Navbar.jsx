import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

// Styled Components dengan props
const Container = styled.div`
  background-color: ${props => props.bgColor || '#4361ee'};
  padding: 1rem;
  color: ${props => props.textColor || '#fff'};
`

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const NavbarBrand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const NavbarItem = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`

// Component
const Navbar = ({ bgColor, textColor }) => {
  return (
    <Container bgColor={bgColor} textColor={textColor}>
      <NavbarWrapper>
        <div>
          <NavbarBrand>Movie App</NavbarBrand>
        </div>
        <div>
          <NavbarList>
            <NavbarItem>
              <StyledLink to="/">Home</StyledLink>
            </NavbarItem> 
            {/* <NavbarItem>
              <StyledLink to="/movie/create">Add Movie</StyledLink>
            </NavbarItem> */}
            <NavbarItem>
              <StyledLink to="/movie/popular">Popular</StyledLink>
            </NavbarItem>
            <NavbarItem>
              <StyledLink to="/movie/now_playing">Now Playing</StyledLink>
            </NavbarItem>
            <NavbarItem>
              <StyledLink to="/movie/top_rated">Top Rated</StyledLink>  
            </NavbarItem>              
          </NavbarList>
        </div>
      </NavbarWrapper>
    </Container>
  )
}

export default Navbar

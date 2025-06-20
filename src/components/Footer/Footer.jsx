import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.bgColor || '#4361ee'};
  color: ${props => props.textColor || '#fff'};
  padding: ${props => props.padding || '1rem'};
  text-align: center;
`

const FooterTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: ${props => props.titleSize || 'inherit'};
`

const FooterAuthor = styled.p`
  margin-bottom: 1rem;
  font-size: ${props => props.authorSize || 'inherit'};
`

const Footer = ({ 
  bgColor, 
  textColor, 
  padding, 
  titleSize, 
  authorSize,
  title = "Movie App",
  author = "Created By NUllsec45"
}) => {
  return (
    <Container bgColor={bgColor} textColor={textColor} padding={padding}>
      <footer>
        <FooterTitle titleSize={titleSize}>{title}</FooterTitle>
        <FooterAuthor authorSize={authorSize}>{author}</FooterAuthor>
      </footer>
    </Container>
  )
}

export default Footer

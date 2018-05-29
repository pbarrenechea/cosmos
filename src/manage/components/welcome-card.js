import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Heading, Paragraph } from '@auth0/cosmos'

const CardWrapper = styled.div`
  line-height: normal;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: grid;
  height: 125px;
  grid-template-columns: 67px 1fr;
  justify-content: center;
  align-items: center;
  padding: 30px;
  grid-column-gap: 21px;
`
const Head = styled(Heading)`
  margin: 0px;
`

const Article = styled(Paragraph)`
  margin: 0px;
`

const ImageWrapper = styled.span`
  height: 66px;
  width: 66px;
  border-radius: 50%;
  background-color: #f6f6f6;
  padding: px;
  display: grid;
  justify-content: center;
  align-content: center;
`
const LightText = styled.span`
  color: #c4c4c4;
`

const WelcomeCard = props => (
  <CardWrapper>
    <ImageWrapper>
      <Image source={props.imagePath} />
    </ImageWrapper>
    <div>
      <Head size={4}>{props.title}</Head>
      <Article>
        {props.paragraph}
        {props.lightText && <LightText>{props.lightText}</LightText>}
      </Article>
    </div>
  </CardWrapper>
)

WelcomeCard.propTypes = {
  imagePath: PropTypes.string,
  paragraph: PropTypes.string
}

WelcomeCard.defaultProps = {
  imagePath: '',
  paragraph: ''
}

export default WelcomeCard

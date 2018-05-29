import React, { Fragment } from 'react'
import { Button, Heading, PageHeader } from '@auth0/cosmos'
import WelcomeCard from '../../components/welcome-card'
import styled from 'styled-components'

import logo from './customers-icon-e6580a660a.svg'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 20px;
`

const SubTitle = styled(Heading)`
  margin-top: 58px;
`

const Pagination = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  margin-top: 61px;
`

class WelcomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  render() {
    return (
      <Fragment>
        <PageHeader
          title="Getting Started"
          description={{
            text: 'Get started with integrating Auth0 by the following guided tutorial below'
          }}
        />
        <SubTitle size={2}>What do you want to build?</SubTitle>
        <CardsContainer>
          <WelcomeCard
            imagePath={logo}
            title="Single Page Web Aplications"
            paragraph="A javaScript front-end app that uses an Api."
            lightText="Eg: AngularJS + NodeJS"
          />
          <WelcomeCard
            imagePath={logo}
            title="Single Page Web Aplications"
            paragraph="A javaScript front-end app that uses an Api."
            lightText="Eg: AngularJS + NodeJS"
          />
          <WelcomeCard
            imagePath={logo}
            title="Single Page Web Aplications"
            paragraph="A javaScript front-end app that uses an Api."
            lightText="Eg: AngularJS + NodeJS"
          />
          <WelcomeCard
            imagePath={logo}
            title="Single Page Web Aplications"
            paragraph="A javaScript front-end app that uses an Api."
            lightText="Eg: AngularJS + NodeJS"
          />
        </CardsContainer>
        <Pagination>
          <Button size="default" appearance="cta">
            Next
          </Button>
        </Pagination>
      </Fragment>
    )
  }
}

export default WelcomeIndex

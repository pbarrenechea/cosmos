import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '@auth0/cosmos-tokens'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${spacing.large};
  width: 100%;
  min-width: 0;
  margin: ${spacing.large} 0;
`

const Option = styled.div`
  overflow: hidden;
`

const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${spacing.large};
  box-shadow: inset 0 0 0 2px white;
  transition: box-shadow 300ms ease;
  border-radius: 3px;
  background-color: white;
  height: 100px;
  img {
    display: block;
    max-width: 100%;
  }
  &:hover  {
    box-shadow: inset 0 0 0 2px ${colors.input.borderHover};
  }
  &.selected {
    box-shadow: inset 0 0 0 2px ${colors.link.default};
  }
`

const Input = styled.input`
  position: absolute;
  visibility: hidden;
`

const Title = styled.span`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`

const EmailsProviderOptions = props => {
  return (
    <Grid>
      {props.data.map(function(value) {
        return (
          <Option>
            <Label className={props.isChecked === value.name ? 'selected' : 'not'} for={value.name}>
              <Input
                type="radio"
                name="emails-provider-options"
                value={value.name}
                id={value.name}
                onChange={() => props.onCheckedOption(value.name)}
              />
              <Title>{value.label}</Title>
              <img src={value.logoUrl} alt={value.label} />
            </Label>
          </Option>
        )
      })}
    </Grid>
  )
}

EmailsProviderOptions.propTypes = {}

EmailsProviderOptions.defaultProps = {}

export default EmailsProviderOptions

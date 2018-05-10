import React from 'react'

import EmailsProviderOptions from './emails-provider-options'

class EmailsProviderOptionsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: ''
    }
    this.onCheckedOption = this.onCheckedOption.bind(this)
  }

  onCheckedOption(value) {
    this.setState({
      checked: value
    })
  }

  render() {
    const ProvidersData = [
      {
        name: 'mandrill',
        label: 'Mandrill',
        logoUrl: 'https://cdn.auth0.com/manage/v1.2911.0/logos/logo-mandrill/images/logo.svg'
      },
      {
        name: 'AWS',
        label: 'aws',
        logoUrl: 'https://cdn.auth0.com/manage/v1.2911.0/logos/logo-mandrill/images/logo.svg'
      },
      {
        name: 'SendGrid',
        label: 'sendgrid',
        logoUrl: 'https://cdn.auth0.com/manage/v1.2911.0/logos/logo-mandrill/images/logo.svg'
      },
      {
        name: 'SparkPost',
        label: 'sparkpost',
        logoUrl: 'https://cdn.auth0.com/manage/v1.2911.0/logos/logo-mandrill/images/logo.svg'
      },
      {
        name: 'SMTP',
        label: 'smtp',
        logoUrl: 'https://cdn.auth0.com/manage/v1.2911.0/logos/logo-mandrill/images/logo.svg'
      }
    ]
    return (
      <EmailsProviderOptions
        onCheckedOption={this.onCheckedOption}
        isChecked={this.state.checked}
        data={ProvidersData}
      />
    )
  }
}

export default EmailsProviderOptionsContainer

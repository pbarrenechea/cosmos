import React from 'react'

import { PageHeader, Form, FormGroup, Paragraph, Code, Link } from '@auth0/cosmos'

import { spacing } from '@auth0/cosmos-tokens'

import EmailsProviderOptionsContainer from '../../components/emails-provider-options-container'

class EmailsProvider extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Custom Email Provider"
          description={{
            text:
              'Standard welcome, password reset, and account verification email-based workflows, built right into Auth0.',
            learnMore: '/manage/clients'
          }}
        />
        <div style={{ marginBottom: spacing.large }}>
          <Form>
            <Form.Switch label="Use my own Email Provider" on />
          </Form>
        </div>

        <FormGroup>
          <Form layout="label-on-top">
            <Form.FieldSet label="Choose your Email Provider">
              <Paragraph>
                <strong>Heads up!</strong> If you are trying to access a service behind a firewall,
                make sure to open the right ports and allow inbound connections from these IP
                addresses: <Code>35.167.74.121</Code>, <Code>35.166.202.113</Code>,{' '}
                <Code>35.160.3.103</Code>, <Code>54.183.64.135</Code>, <Code>54.67.77.38</Code>,{' '}
                <Code>54.67.15.170</Code>, <Code>54.183.204.205</Code>
              </Paragraph>
              <EmailsProviderOptionsContainer />
            </Form.FieldSet>

            <Form.FieldSet label="Mandrill Settings">
              <Paragraph>
                Your credentials will always be encrypted in our database. Sign up for a Mandrill
                account and create a new API key in the dashboard. Need help?{' '}
                <Link url="#">Check our instructions</Link>.
              </Paragraph>

              <div style={{ maxWidth: '500px' }}>
                <Form.TextInput
                  label="From"
                  type="text"
                  placeholder="Your App <support@yourapp.com>"
                  helpText="Default from address for emails."
                />

                <Form.TextInput label="API Key" type="text" code placeholder="Mandril API Key" />
                <Form.Actions
                  primaryAction={{ label: 'Save', method: this.save }}
                  secondaryActions={[{ label: 'Send Test Email', method: () => {} }]}
                />
              </div>
            </Form.FieldSet>
          </Form>
        </FormGroup>
      </div>
    )
  }
}

export default EmailsProvider

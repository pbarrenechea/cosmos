import React from 'react'

import { PageHeader, Alert, Form, FormGroup, Paragraph, Code, Link } from '@auth0/cosmos'

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

        <Form />
        <FormGroup>
          <Form>
            <Form.FieldSet label="Email Provider">
              <Paragraph>
                <strong>Heads up!</strong> If you are trying to access a service behind a firewall,
                make sure to open the right ports and allow inbound connections from these IP
                addresses: <Code>35.167.74.121</Code>, <Code>35.166.202.113</Code>,{' '}
                <Code>35.160.3.103</Code>, <Code>54.183.64.135</Code>, <Code>54.67.77.38</Code>,{' '}
                <Code>54.67.15.170</Code>, <Code>54.183.204.205</Code>
              </Paragraph>
            </Form.FieldSet>
          </Form>
          <Form>
            <Form.FieldSet label="Mandrill Settings">
              <Paragraph>
                Your credentials will always be encrypted in our database. Sign up for a Mandrill
                account and create a new API key in the dashboard. Need help?{' '}
                <Link url="">Check our instructions</Link>.
              </Paragraph>
              <Form.TextInput
                label="From"
                type="text"
                placeholder="Add name for client"
                helpText="Default from address for emails."
              />
              <Form.TextInput
                label="Name"
                type="text"
                defaultValue="API Explorer Client"
                placeholder="Add name for client"
              />
            </Form.FieldSet>
          </Form>
        </FormGroup>
      </div>
    )
  }
}

export default EmailsProvider

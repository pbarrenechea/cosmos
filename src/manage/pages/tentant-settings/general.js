import React from 'react'
import { FormGroup, Form, Link, Code } from '@auth0/cosmos'

import ErrorPagesOptions from '../../components/error-pages-options'

class General extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Form>
            <Form.FieldSet label="Settings">
              <Form.TextInput
                label="Friendly Name"
                type="text"
                placeholder="My Company Inc."
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="Logo URL"
                type="text"
                placeholder="http://path.to/my-logo.png"
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="Support Email"
                type="email"
                placeholder="support@mycompany.com"
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="Support URL"
                type="url"
                placeholder="http://mycompany.com/support"
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
              />
            </Form.FieldSet>

            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
          </Form>

          <Form>
            <Form.FieldSet label="API Authorization Settings">
              <Form.TextInput
                label="Default Audience"
                type="text"
                placeholder="http://your-default-endpoint/"
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
                helpText={
                  <span>
                    API Audience to use by default for{' '}
                    <Link href="https://auth0.com">API Authorization flows</Link>.{' '}
                    <strong>Note:</strong> This setting is equivalent to appending the audience to
                    every authorization request made to the tenant for every application. This will
                    cause new behavior that might result in breaking changes for some of your
                    applications.{' '}
                    <Link href="https://auth0.com">
                      Please contact support if you require assistance
                    </Link>.
                  </span>
                }
              />
              <Form.TextInput
                label="Default Directory"
                type="text"
                placeholder="Connection Name"
                actions={[{ icon: 'copy', method: null, label: 'Copy to clipboard' }]}
                helpText={
                  <span>
                    Name of the connection to be use for Password Grant exchanges. The{' '}
                    <Code>default_directory</Code> value should be the exact name of an existing
                    connections of one of the following strategies: auth0-adldap, ad, auth0, email,
                    sms, waad, adfs.
                  </span>
                }
              />
              <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
            </Form.FieldSet>
          </Form>

          <Form>
            <Form.FieldSet label="Error Pages">
              <ErrorPagesOptions />
            </Form.FieldSet>
          </Form>
        </FormGroup>
      </div>
    )
  }
}

export default General

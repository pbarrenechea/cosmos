import React from 'react'
import { PageHeader, Tabs } from '@auth0/cosmos'

import General from './general'
class TenantSettingsIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader title="Tenant Settings" />
        <Tabs>
          <Tabs.Tab label="General" selected>
            <General />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default TenantSettingsIndex

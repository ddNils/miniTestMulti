import { logMessage, logTestStart } from '../utils/logUtils'
import { loginPasswordKey, loginUsernameKey, sharedStorageMap } from '../utils/sharedStore'

describe('Set login user to admin', () => {
  const ADMIN_USER_USERNAME = 'tomsmith'
  const ADMIN_USER_PASSWORD = 'SuperSecretPassword!'

  before(() => {
    sharedStorageMap[loginUsernameKey] = ADMIN_USER_USERNAME
    sharedStorageMap[loginPasswordKey] = ADMIN_USER_PASSWORD
  })

  it('should have username and password from shared store', function () {
    logTestStart(`${this.test?.title}`)
    const username = sharedStorageMap[loginUsernameKey]
    const password = sharedStorageMap[loginPasswordKey]

    expect(username).not.toEqual('')
    expect(password).not.toEqual('')

    logMessage('username and password set in shared storage')
  })
})

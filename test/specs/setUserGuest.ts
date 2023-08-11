import { logMessage, logTestStart } from '../utils/logUtils'
import { loginPasswordKey, loginUsernameKey, sharedStorageMap } from '../utils/sharedStore'

describe('Set login user to guest', () => {
  const GUEST_USER_USERNAME = 'loadUserNameFromSecureStore'
  const GUEST_USER_PASSWORD = 'loadPasswordFromSecureStore'

  before(() => {
    sharedStorageMap[loginUsernameKey] = GUEST_USER_USERNAME
    sharedStorageMap[loginPasswordKey] = GUEST_USER_PASSWORD
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

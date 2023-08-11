import { logTestStart } from '../utils/logUtils'
import { loginPasswordKey, loginUsernameKey, sharedStorageMap } from '../utils/sharedStore'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('Login to frontend', () => {  
  let username = ''
  let password = ''

  it('should have username and password from shared store', function () {
    logTestStart(`${this.test?.title}`)
    username = sharedStorageMap[loginUsernameKey]
    expect(username).not.toBeUndefined()
    password = sharedStorageMap[loginPasswordKey]
    expect(password).not.toBeUndefined()

    expect(username).not.toEqual('')
    expect(password).not.toEqual('')
  })

  it('should login with valid credentials', async function () {
    logTestStart(`${this?.test?.title}`)
    await LoginPage.open()

    await LoginPage.login(username, password)

    await expect(SecurePage.flashAlert).toBeExisting()
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!')
  })
})

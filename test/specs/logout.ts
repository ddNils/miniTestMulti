import SecurePage from "../pageobjects/secure.page"
import { logMessage, logTestStart } from "../utils/logUtils"

describe('Logout from frontend', () => {

    it('should log out', async function () {
      logTestStart(`${this.test?.title}`)
      logMessage('Logging out')
  
      await SecurePage.logout()
  
      await expect(SecurePage.flashAlert).toBeExisting()
      await expect(SecurePage.flashAlert).toHaveTextContaining(
          'You logged out of the secure area!')
    })
  })
  
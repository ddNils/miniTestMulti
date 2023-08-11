import Page from './page'
import { logMessage } from '../utils/logUtils'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {

    public get flashAlert () {
        return $('#flash');
    }

    public logout() {        
        logMessage('Logging out of imaginary secure page')
        return browser.url('https://the-internet.herokuapp.com/logout')
    }
}

export default new SecurePage();

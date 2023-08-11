import { logTestStart } from '../utils/logUtils'

describe('Initialize browser', () => {
  it('waits for browser instance to be initialized', async function () {
    logTestStart(`${this.test?.title}`)
    await browser.url('https://example.com')
  })
})

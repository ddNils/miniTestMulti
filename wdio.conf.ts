import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    specs: [
        ['./test/specs/test.e2e.ts'],
        // The following group will work, since it is using indivual file names (no duplicates)
        [
            './test/specs/initBrowser.ts', 
            './test/specs/setUserGuest.ts', 
            './test/specs/login.ts', 
            './test/specs/testGuestCase.ts', 
            './test/specs/logout.ts', 
            './test/specs/setUserAdmin.ts', 
            './test/specs/loginCopy.ts', 
            './test/specs/testAdminCase.ts'
        ],
        // This group will NOT work, since the second login.ts spec will not run, as it is a duplicate
        [
            './test/specs/initBrowser.ts', 
            './test/specs/setUserGuest.ts', 
            './test/specs/login.ts', 
            './test/specs/testGuestCase.ts', 
            './test/specs/logout.ts', 
            './test/specs/setUserAdmin.ts', 
            './test/specs/login.ts', 
            './test/specs/testAdminCase.ts'
        ]
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    services: [
      [
        'selenium-standalone',
        {
            installArgs: { drivers: { chrome: { version: process.env.CHROME_DRIVER_VERSION } } },
            args: { drivers: { chrome: { version: process.env.CHROME_DRIVER_VERSION } } }
        }]
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}

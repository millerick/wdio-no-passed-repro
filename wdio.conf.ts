const seleniumArgs = {
  version: '3.8.1',
  drivers: {
    chrome: {
      version: '2.36',
    },
  },
};

export const config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 240000,
    includeStackTrace: true,
    isVerbose: true,
  },
  specs: ['./dist/test/*Tests.js'],
  services: ['selenium-standalone'],
  maxInstances: 1,
  baseUrl: 'https://www.google.com',
  waitforTimeout: 15000,
  capabilities: [{
    /**
     * maxInstances can get overwritten per capability. So if you have an in-house Selenium
     * grid with only 5 firefox instance available you can make sure that not more than
     * 5 instance gets started at a time.
     */
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--disable-gpu', '--window-size=1280,1024'],
    },
  }],
  seleniumArgs,
  seleniumInstallArgs: seleniumArgs,
  async afterTest(test: any) {
    console.log(`===\n${JSON.stringify(test)}\n===`);
  },
};

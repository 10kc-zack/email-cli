const mri = require('mri');

const mriBaseConfig = {};

module.exports = {
  getArgs(mriAdditionalConfig = {}) {
    const mriConfig = {
      ...mriBaseConfig,
      ...mriAdditionalConfig
    };
    return mri(process.argv.slice(2), mriConfig);
  }
};

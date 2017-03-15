// Ignite plugin for FrankTest
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()


const add = async function (context) {
  const { ignite, filesystem } = context

  // install a npm module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true })

  

  // Example of copying templates/FrankTest to App/FrankTest
  // if (!filesystem.exists(`${APP_PATH}/App/FrankTest`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/FrankTest`, `${APP_PATH}/App/FrankTest`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../FrankTest/FrankTest'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  

  // Example of removing App/FrankTest folder
  // const removeFrankTest = await context.prompt.confirm(
  //   'Do you want to remove App/FrankTest?'
  // )
  // if (removeFrankTest) { filesystem.remove(`${APP_PATH}/App/FrankTest`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: '',
  //   replace: `import '../FrankTest/FrankTest'\n`
  // )
}

// Required in all Ignite plugins
module.exports = { add, remove }


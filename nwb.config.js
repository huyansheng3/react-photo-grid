module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'PhotoGrid',
      externals: {
        react: 'React'
      }
    }
  }
}

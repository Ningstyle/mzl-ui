module.exports = {
  testEnvironment: 'jsdom',
  transform: {
  '^.+\\.vue$': 'vue-jest',
  '^.+\\.js$': 'babel-jest'
   },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: [
    // 匹配tests文件夹下.spec.js文件
    '**/tests/**/*.spec.js',
   ],
 }
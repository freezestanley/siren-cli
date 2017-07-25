// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    amd: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  ecmaFeatures: {
    // lambda表达式
    'arrowFunctions': true,
    // 解构赋值
    'destructuring': true,
    // class
    'classes': true,
    // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
    'defaultParams': true,
    // 块级作用域，允许使用let const
    'blockBindings': true,
    // 允许使用模块，模块内默认严格模式
    'modules': true,
    // 允许字面量定义对象时，用表达式做属性名
    // http://es6.ruanyifeng.com/#docs/object#属性名表达式
    'objectLiteralComputedProperties': true,
    // 允许对象字面量方法名简写
    /*var o = {
     method() {
     return 'Hello!';
     }
     };

     等同于

     var o = {
     method: function() {
     return 'Hello!';
     }
     };
     */
    'objectLiteralShorthandMethods': true,
    /*
     对象字面量属性名简写
     var foo = 'bar';
     var baz = {foo};
     baz // {foo: 'bar'}

     // 等同于
     var baz = {foo: foo};
     */
    'objectLiteralShorthandProperties': true,
    // http://es6.ruanyifeng.com/#docs/function#rest参数
    'restParams': true,
    // http://es6.ruanyifeng.com/#docs/function#扩展运算符
    'spread': true,
    // http://es6.ruanyifeng.com/#docs/iterator#for---of循环
    'forOf': true,
    // http://es6.ruanyifeng.com/#docs/generator
    'generators': true,
    // http://es6.ruanyifeng.com/#docs/string#模板字符串
    'templateStrings': true,
    'superInFunctions': true,
    // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
    'experimentalObjectRestSpread': true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow prototype
    'no-prototype-builtins': 0,
    // allow user-vars
    'no-unused-vars': 0,
    // allow prototyp
    'no-extend-native': 0,
    // allow 2 blank space
    'indent': ['error', 2],
    // allow ' '
    'quotes': 0,
    // allow === !==
    'eqeqeq': 0,
    // allow if() return
    'curly': 0,
    // allow common js
    'no-duplicate-imports': 1,

    'import/no-unresolved': 0
  }
}

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
"airbnb-base",
"plugin:vue/recommended",
],
plugins: [
 "html"
 ],
  // check if imports actually resolve
 settings: {
 "import/resolver": {
webpack: {
config: "build/webpack.base.conf.js"
 }
}
         },
    "rules": {
        // don't require .vue extension when importing
  "import/extensions": ["error", "always", {
      js: "never",
       vue: "never"
     }],

 // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
 'no-param-reassign': ['error', {
   props: true,
   ignorePropertyModificationsFor: [
   'state', // for vuex state
  'acc', // for reduce accumulators
    'e' // for e.returnvalue
    ]
   }],
 // allow optionalDependencies
'import/no-extraneous-dependencies': ['error', {
optionalDependencies: ['test/unit/index.js']
}],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

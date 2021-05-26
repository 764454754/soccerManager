module.exports = {
    "env":{
        "amd": true,
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "react-app",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    "plugins": [
        "prettier"
    ],
    "parser": "babel-eslint",
    "rules": {
        "prettier/prettier": "error"
    }
}

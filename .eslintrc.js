module.exports = {
    
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            2,
            "double"
        ],
        "indent": [
            2
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undefined": [
            "error"
        ],
        "no-unused-vars": [
            "error"
        ],
        "strict": [
            "error",
            "never"
        ],
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
            2,
            80,
            {ignoreUrls: true}
        ],
        "no-trailing-spaces": [
            "error", 
            { "skipBlankLines": true }
        ],
    }
};
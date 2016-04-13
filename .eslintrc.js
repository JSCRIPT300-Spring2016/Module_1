module.exports = {
    "env": {
        "browser": true,
		"node": true
    },
    "extends": "eslint:recommended",
	"globals": {
		"google": true,
		"result": true
	},
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"eqeqeq": [
		    "error"
		],
		"comma-style": [
		    "error", 
			"first"
		],
		"object-curly-spacing": [
		    "error",
			"always"
		],
		"no-trailing-spaces": [
		    "error",
			{ "skipBlankLines": true }
		],
		"newline-before-return": [
		    "error"
		],
		"max-len": [
		    "error",
			80,
			2,
			{ "ignoreUrls": true }
		]
    }
};
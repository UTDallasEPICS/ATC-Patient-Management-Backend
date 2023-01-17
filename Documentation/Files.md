# Files Explained
## [LICENSE](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
* If a repository has no license, then all rights are reserved and it is not open-source or free
* Public repositories on GitHub are often used to share open source software
* MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software
    * As long as users include the original copy of the MIT license in their distribution, they can make any changes or modifications to the code to suit their own needs
    * most simple open source license agreement

## [.sh Files](https://stackoverflow.com/questions/13805295/whats-a-sh-file)
* bash shell script file
    * like batch files of Windows which can be executed in Linux or Unix
    * Bash is a Unix shell and command language which can run Shell Script files
    * scripting language commands file to be run by Unix shell
    * #!/bin/bash
        * uses Bourne Again Shell / bash
    * executing a .sh file is like writing the commands in the terminal

## types.ts
* Use a named [export](https://bobbyhadz.com/blog/typescript-export-types) to export a type in TypeScript
* The exported type can be imported by using a named import
* [Generic Types `<T>`](https://www.typescriptlang.org/docs/handbook/2/generics.html)
* ??? TODO

## [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* indicates that the directory is the root of a TypeScript project
* specifies the root files and the compiler options required to compile the project
* [generate tsconfig json file](https://stackoverflow.com/questions/36916989/how-can-i-generate-a-tsconfig-json-file)

## [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
* for any node project
* records important metadata about a project 
* defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package
* [generate package.json](https://docs.npmjs.com/creating-a-package-json-file#creating-a-new-packagejson-file)
    * `npm init`
    * `npm install <pkg> --save`
        * to install a dependency and automatically append it to your package.json's dependencies list
        * As of npm 5.0.0 (2017), installed modules are added as a dependency by default

## [package-lock.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)
*  automatically generated for any operations where npm modifies either the node_modules tree, or package.json
*  stores an exact, versioned dependency tree rather than using starred versioning like package.js [ref](https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json)
* package.json contains only your direct dependencies, not the dependencies of your dependencies

* [dockerfile](https://docs.docker.com/engine/reference/builder/)
    * Docker can build images automatically by reading the instructions from a Dockerfile
    *  text document that contains all the commands a user could call on the command line to assemble an image
    * `docker build .`
    * `FROM` [ref](https://docs.docker.com/engine/reference/builder/#from)
    * `ENV` [ref](https://docs.docker.com/engine/reference/builder/#environment-replacement)
    * `WORKDIR` [ref](https://docs.docker.com/engine/reference/builder/#workdir)

<br/><br/>

# Dot Files
* hidden files/folders

* [.npmignore](https://docs.npmjs.com/cli/v8/using-npm/developers#keeping-files-out-of-your-package)
    * keep stuff out of your package
    * npm will use .gitignore if no .npmignore
    * empty .npmignore file to override .gitignore
        * want to include something that is excluded by your .gitignore file

* [.gitignore](https://git-scm.com/docs/gitignore)
    * [reference](https://salferrarello.com/gitignore-hidden-files-with-exceptions/)
    * specifies intentionally untracked files that Git should ignore

* [.eslintrc.js](https://eslint.org/)
    * a configuration file for a tool named ESLINT
    * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bug [red](https://stackoverflow.com/questions/58989583/what-is-eslintrc-js-in-react-native)
    * https://eslint.org/docs/latest/user-guide/getting-started
    * https://eslint.org/docs/latest/user-guide/configuring/configuration-files
    * Lint, or a linter, is a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs

* [dot env file](https://www.npmjs.com/package/dotenv)
    *  customize your individual working environment variables
    * contains key/value pairs defining the project's required environment variables
    * In this file we set a variable with value and that you wouldn’t want to share with anyone, purpose of file is keep as secret and secure because in .env file we store our database password, username, API key etc…
    * [example](https://dev.to/aadilraza339/what-is-env-file-in-node-js-3h6c)
        * can use these variables in your Node JS porject

* dot dockerignore
    * Ignores files to speed up docker build process
    * otherwise the "Sending build context to Docker daemon" takes forever
    * [Using dockerignore](https://www.tutorialspoint.com/using-dockerignore-file)
    * [Docker Build Context (Why You Should Use Dockerignore)](https://www.howtogeek.com/devops/understanding-the-docker-build-context-why-you-should-use-dockerignore/)

* [dot vscode folder](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)
    * [Should I commit the .vscode folder to source control](https://stackoverflow.com/questions/32964920/should-i-commit-the-vscode-folder-to-source-control)
    * workspace settings
    * **launch.json**
        * [launch configs for debugging](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

# Other Files
* data.json
    * [JSON (JavaScript Object Notation)](https://stackoverflow.com/questions/383692/what-is-json-and-what-is-it-used-for)
        * A collection of name/value pairs
        * An ordered list of values
    * random data for an object fitting the therapist schema i guess?
azde-scripts
============

this tool makes it easy to compile, test, and package azure devops extensions

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/azde-scripts.svg)](https://npmjs.org/package/azde-scripts)
[![Downloads/week](https://img.shields.io/npm/dw/azde-scripts.svg)](https://npmjs.org/package/azde-scripts)
[![License](https://img.shields.io/npm/l/azde-scripts.svg)](https://github.com/davidpolaniaac/azde-scripts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g azde-scripts
$ azde-scripts COMMAND
running command...
$ azde-scripts (--version)
azde-scripts/2.0.1 darwin-x64 node-v18.18.0
$ azde-scripts --help [COMMAND]
USAGE
  $ azde-scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`azde-scripts build [COMPONENT]`](#azde-scripts-build-component)
* [`azde-scripts create TYPE`](#azde-scripts-create-type)
* [`azde-scripts hello [NAME]`](#azde-scripts-hello-name)
* [`azde-scripts help [COMMANDS]`](#azde-scripts-help-commands)
* [`azde-scripts install [COMPONENT]`](#azde-scripts-install-component)
* [`azde-scripts package [COMPONENT]`](#azde-scripts-package-component)

## `azde-scripts build [COMPONENT]`

The build command is used to invoke the build script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts build [COMPONENT] [-c <value>] [-f] [-h]

ARGUMENTS
  COMPONENT  component

FLAGS
  -c, --clean=<value>  name of the folder that will be deleted before the process
  -f, --force
  -h, --help           Show CLI help.

DESCRIPTION
  The build command is used to invoke the build script from the package.json of each component of the extension.

EXAMPLES
  $ azde-scripts build

  $ azde-scripts build tasks
```

_See code: [src/commands/build.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v2.0.1/src/commands/build.ts)_

## `azde-scripts create TYPE`

Generate project extension

```
USAGE
  $ azde-scripts create TYPE [-f] [-h]

ARGUMENTS
  TYPE  (extension|task|gate|decorator|website) [default: extension] generator type

FLAGS
  -f, --force
  -h, --help   Show CLI help.

DESCRIPTION
  Generate project extension
```

_See code: [src/commands/create.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v2.0.1/src/commands/create.ts)_

## `azde-scripts hello [NAME]`

Additional Information

```
USAGE
  $ azde-scripts hello [NAME] [-f] [-h] [-n <value>]

ARGUMENTS
  NAME  name

FLAGS
  -f, --force
  -h, --help          Show CLI help.
  -n, --name=<value>  name to print

DESCRIPTION
  Additional Information

EXAMPLES
  $ azde-scripts hello David
```

_See code: [src/commands/hello.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v2.0.1/src/commands/hello.ts)_

## `azde-scripts help [COMMANDS]`

Display help for azde-scripts.

```
USAGE
  $ azde-scripts help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for azde-scripts.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.3/src/commands/help.ts)_

## `azde-scripts install [COMPONENT]`

The install command is used to invoke the install script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts install [COMPONENT] [-c <value>] [-f] [-h] [-s <value> -n <value>]

ARGUMENTS
  COMPONENT  component

FLAGS
  -c, --clean=<value>   name of the folder that will be deleted before the process
  -f, --force
  -h, --help            Show CLI help.
  -n, --npm=<value>     [default: i] overrider the npm run command
  -s, --script=<value>  [default: custom] add the npm run command script. for example `compile`

DESCRIPTION
  The install command is used to invoke the install script from the package.json of each component of the extension.

EXAMPLES
  $ azde-scripts install

  $ azde-scripts install tasks

  $ azde-scripts install tasks -n run -s custom
```

_See code: [src/commands/install.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v2.0.1/src/commands/install.ts)_

## `azde-scripts package [COMPONENT]`

The package command is used to invoke the install script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts package [COMPONENT] [-f] [-h]

ARGUMENTS
  COMPONENT  component

FLAGS
  -f, --force
  -h, --help   Show CLI help.

DESCRIPTION
  The package command is used to invoke the install script from the package.json of each component of the extension.
```

_See code: [src/commands/package.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v2.0.1/src/commands/package.ts)_
<!-- commandsstop -->

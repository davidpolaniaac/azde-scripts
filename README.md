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
$ azde-scripts (-v|--version|version)
azde-scripts/1.0.1 darwin-x64 node-v14.17.6
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
* [`azde-scripts help [COMMAND]`](#azde-scripts-help-command)
* [`azde-scripts install [COMPONENT]`](#azde-scripts-install-component)
* [`azde-scripts package [COMPONENT]`](#azde-scripts-package-component)

## `azde-scripts build [COMPONENT]`

The build command is used to invoke the build script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts build [COMPONENT]

OPTIONS
  -c, --clean=clean  name of the folder that will be deleted before the process
  -f, --force
  -h, --help         show CLI help

EXAMPLES
  $ azde-scripts build
  $ azde-scripts build tasks
```

_See code: [src/commands/build.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v1.0.1/src/commands/build.ts)_

## `azde-scripts create TYPE`

Generate project extension

```
USAGE
  $ azde-scripts create TYPE

ARGUMENTS
  TYPE  (extension|task|gate|decorator|website) [default: extension] generator type

OPTIONS
  -f, --force
  -h, --help   show CLI help
```

_See code: [src/commands/create.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v1.0.1/src/commands/create.ts)_

## `azde-scripts hello [NAME]`

Additional Information

```
USAGE
  $ azde-scripts hello [NAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ azde-scripts hello David
```

_See code: [src/commands/hello.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v1.0.1/src/commands/hello.ts)_

## `azde-scripts help [COMMAND]`

display help for azde-scripts

```
USAGE
  $ azde-scripts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `azde-scripts install [COMPONENT]`

The install command is used to invoke the install script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts install [COMPONENT]

OPTIONS
  -c, --clean=clean    name of the folder that will be deleted before the process
  -f, --force
  -h, --help           show CLI help
  -n, --npm=npm        [default: i] overrider the npm run command
  -s, --script=script  [default: custom] add the npm run command script. for example `compile`

EXAMPLES
  $ azde-scripts install
  $ azde-scripts install tasks
  $ azde-scripts install tasks -n run -s custom
```

_See code: [src/commands/install.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v1.0.1/src/commands/install.ts)_

## `azde-scripts package [COMPONENT]`

The package command is used to invoke the install script from the package.json of each component of the extension.

```
USAGE
  $ azde-scripts package [COMPONENT]

OPTIONS
  -f, --force
  -h, --help   show CLI help
```

_See code: [src/commands/package.ts](https://github.com/davidpolaniaac/azde-scripts/blob/v1.0.1/src/commands/package.ts)_
<!-- commandsstop -->

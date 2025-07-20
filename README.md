rag-svc-cli
=================

CLI generated with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rag-svc-cli
$ rag-svc-cli COMMAND
running command...
$ rag-svc-cli (--version)
rag-svc-cli/0.1.0 linux-x64 node-v24.4.0
$ rag-svc-cli --help [COMMAND]
USAGE
  $ rag-svc-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rag-svc-cli embed TEXT`](#rag-svc-cli-embed-text)
* [`rag-svc-cli generate TEXT`](#rag-svc-cli-generate-text)
* [`rag-svc-cli help [COMMAND]`](#rag-svc-cli-help-command)
* [`rag-svc-cli plugins`](#rag-svc-cli-plugins)
* [`rag-svc-cli plugins add PLUGIN`](#rag-svc-cli-plugins-add-plugin)
* [`rag-svc-cli plugins:inspect PLUGIN...`](#rag-svc-cli-pluginsinspect-plugin)
* [`rag-svc-cli plugins install PLUGIN`](#rag-svc-cli-plugins-install-plugin)
* [`rag-svc-cli plugins link PATH`](#rag-svc-cli-plugins-link-path)
* [`rag-svc-cli plugins remove [PLUGIN]`](#rag-svc-cli-plugins-remove-plugin)
* [`rag-svc-cli plugins reset`](#rag-svc-cli-plugins-reset)
* [`rag-svc-cli plugins uninstall [PLUGIN]`](#rag-svc-cli-plugins-uninstall-plugin)
* [`rag-svc-cli plugins unlink [PLUGIN]`](#rag-svc-cli-plugins-unlink-plugin)
* [`rag-svc-cli plugins update`](#rag-svc-cli-plugins-update)

## `rag-svc-cli embed TEXT`

Execute RPC commands

```
USAGE
  $ rag-svc-cli embed TEXT -c <value> -t <value> [-k <value>] [-u <value>]

ARGUMENTS
  TEXT  Prompt text

FLAGS
  -c, --collection=<value>  (required) Collection name
  -k, --key=<value>         RPC API key
  -t, --title=<value>       (required) Chunk title
  -u, --url=<value>         RPC base url

DESCRIPTION
  Execute RPC commands

EXAMPLES
  $ rag-svc-cli embed
```

## `rag-svc-cli generate TEXT`

Generate LLM output

```
USAGE
  $ rag-svc-cli generate TEXT [-k <value>] [-u <value>]

ARGUMENTS
  TEXT  Prompt text

FLAGS
  -k, --key=<value>  RPC API key
  -u, --url=<value>  RPC base url

DESCRIPTION
  Generate LLM output

EXAMPLES
  $ rag-svc-cli generate
```

## `rag-svc-cli help [COMMAND]`

Display help for rag-svc-cli.

```
USAGE
  $ rag-svc-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rag-svc-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.31/src/commands/help.ts)_

## `rag-svc-cli plugins`

List installed plugins.

```
USAGE
  $ rag-svc-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rag-svc-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/index.ts)_

## `rag-svc-cli plugins add PLUGIN`

Installs a plugin into rag-svc-cli.

```
USAGE
  $ rag-svc-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into rag-svc-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the RAG_SVC_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the RAG_SVC_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ rag-svc-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ rag-svc-cli plugins add myplugin

  Install a plugin from a github url.

    $ rag-svc-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ rag-svc-cli plugins add someuser/someplugin
```

## `rag-svc-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rag-svc-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rag-svc-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/inspect.ts)_

## `rag-svc-cli plugins install PLUGIN`

Installs a plugin into rag-svc-cli.

```
USAGE
  $ rag-svc-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into rag-svc-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the RAG_SVC_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the RAG_SVC_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ rag-svc-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ rag-svc-cli plugins install myplugin

  Install a plugin from a github url.

    $ rag-svc-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ rag-svc-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/install.ts)_

## `rag-svc-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ rag-svc-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ rag-svc-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/link.ts)_

## `rag-svc-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ rag-svc-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rag-svc-cli plugins unlink
  $ rag-svc-cli plugins remove

EXAMPLES
  $ rag-svc-cli plugins remove myplugin
```

## `rag-svc-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ rag-svc-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/reset.ts)_

## `rag-svc-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ rag-svc-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rag-svc-cli plugins unlink
  $ rag-svc-cli plugins remove

EXAMPLES
  $ rag-svc-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/uninstall.ts)_

## `rag-svc-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ rag-svc-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rag-svc-cli plugins unlink
  $ rag-svc-cli plugins remove

EXAMPLES
  $ rag-svc-cli plugins unlink myplugin
```

## `rag-svc-cli plugins update`

Update installed plugins.

```
USAGE
  $ rag-svc-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.45/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`rag-svc-cli hello PERSON`](#rag-svc-cli-hello-person)

## `rag-svc-cli hello PERSON`

Say hello

```
USAGE
  $ rag-svc-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ rag-svc-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `rag-svc-cli help [COMMAND]`

Display help for rag-svc-cli.

```
USAGE
  $ rag-svc-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rag-svc-cli.
```

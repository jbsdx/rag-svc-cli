import { Args, Command, Flags } from '@oclif/core'

import { client } from '../rag-svc/client/index.js'

export default class Embed extends Command {
  static override args = {
    text: Args.string({ description: 'Prompt text', required: true }),
  }
  static override description = 'Execute RPC commands'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    collection: Flags.string({ char: 'c', description: 'Collection name', required: true }),
    key: Flags.string({ char: 'k', description: 'RPC API key' }),
    title: Flags.string({ char: 't', description: 'Chunk title', required: true }),
    url: Flags.string({ char: 'u', description: 'RPC base url' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Embed)

    const _client = client({
      key: flags.key,
      url: flags.url
    })

    this.log(`Embedding startetd...`)

    await _client.embedText({
      body: {
        context: {
          collection: flags.collection,
        },
        text: args.text,
        title: flags.title
      }
    })

    this.log('Embedding finished')
  }
}

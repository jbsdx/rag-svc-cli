import { Args, Command, Flags } from '@oclif/core'

import { client } from '../rag-svc/client/index.js'

export default class Generate extends Command {
  static override args = {
    text: Args.string({ description: 'Prompt text', required: true }),
  }
  static override description = 'Generate LLM output'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    key: Flags.string({ char: 'k', description: 'RPC API key' }),
    url: Flags.string({ char: 'u', description: 'RPC base url' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate)

    const _client = client({
      key: flags.key,
      url: flags.url
    })

    this.log(`Generating output...`)

    const response = await _client.generateText({
      body: {
        text: args.text
      }
    });

    const body = response.body as { choices: [{ text: string }] };

    this.log(body.choices[0]?.text);
  }
}

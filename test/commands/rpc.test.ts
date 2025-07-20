import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('rpc', () => {
  it('runs rpc cmd', async () => {
    const {stdout} = await runCommand('rpc')
    expect(stdout).to.contain('hello world')
  })

  it('runs rpc --name oclif', async () => {
    const {stdout} = await runCommand('rpc --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})

import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('embed', () => {
  it('runs embed cmd', async () => {
    const {stdout} = await runCommand('embed')
    expect(stdout).to.contain('hello world')
  })

  it('runs embed --name oclif', async () => {
    const {stdout} = await runCommand('embed --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})

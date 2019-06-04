import { Command } from '@oclif/command'

import { isEmptyCommand } from '../../helpers/checkCommandInputs'

export default class ContractCommand extends Command {
  static description = `Allows actions with contracts.`

  static examples = [
    'eth contract:deploy --ropsten 3daa79a26454a5528a3523f9e6345efdbd636e63f8c24a835204e6ccb5c88f9e ./contracts/proxy.bin',
    'eth contract:address 0x92970dbD5C0Ee6b439422bFd7cD71e1DDA921A03',
  ]

  static aliases = ['ct']

  async run() {
    const { args, flags } = this.parse(ContractCommand)

    // Show help on empty sub command
    if (isEmptyCommand(flags, args)) {
      this._help()
    }
  }
}

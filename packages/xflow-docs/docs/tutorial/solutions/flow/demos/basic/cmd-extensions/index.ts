import { ClearGraphCommand, NsClearGraphCmd } from './cmd-clear'
import { ExportGraphCmd, NsExportGraphCmd } from './cmd-export'
import { RenameNodeCommand, NsRenameNodeCmd } from './cmd-rename-node-modal'
import { ICommandContributionConfig } from '@antv/xflow'
/** 注册成为可以执行的命令 */

export const commandContributions: ICommandContributionConfig[] = [
  {
    ...NsClearGraphCmd,
    CommandHandler: ClearGraphCommand,
  },
  {
    ...NsExportGraphCmd,
    CommandHandler: ExportGraphCmd,
  },
  {
    ...NsRenameNodeCmd,
    CommandHandler: RenameNodeCommand,
  },
]

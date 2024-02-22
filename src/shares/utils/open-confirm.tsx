import { modals } from '@mantine/modals'

export type OpenConfirmProps = {
  title?: string
  message?: string
  submit?: {
    label?: string
    color?: string
    action?: () => void
  }
  cancel?: {
    label?: string
    color?: string
    action?: () => void
  }
}

export const OpenConfirm = ({
  message,
  submit,
  cancel,
  ...others
}: OpenConfirmProps) =>
  modals.openConfirmModal({
    centered: true,
    ...others,
    children: message,
    labels: {
      confirm: submit?.label ?? '確定',
      cancel: cancel?.label ?? 'キャンセル',
    },
    onConfirm: submit?.action,
    onCancel: cancel?.action,
    confirmProps: {
      color: submit?.color,
    },
    cancelProps: {
      color: cancel?.color,
    },
  })

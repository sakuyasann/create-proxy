import { useListState } from '@mantine/hooks'
import { OpenConfirm } from '~/shares/utils'

export type PrintDataType = {
  url: string
  sheet: number
}

const defaultData = [...Array(9)].map(() => ({ url: '', sheet: 0 }))

export const useProxyPrintHooks = () => {
  const [data, { setItemProp, setItem }] =
    useListState<PrintDataType>(defaultData)

  const onReset = () => {
    OpenConfirm({
      title: '内容をリセット',
      message: '入力した情報をリセットしますか？',
      submit: {
        action: () => {
          ;[...Array(9)].forEach((_, i) => {
            setItem(i, { url: '', sheet: 0 })
          })
        },
      },
    })
  }

  return { data, setItemProp, onReset }
}

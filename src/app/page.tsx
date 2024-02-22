'use client'

import {
  Box,
  Button,
  Divider,
  Group,
  Input,
  Select,
  Stack,
  Text,
} from '@mantine/core'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { ProxyPrintPage, useProxyPrintHooks } from '~/modules/proxy'

import styles from './page.module.css'
import { ProxyForm } from '~/modules/proxy/components/form'

export default function Home() {
  const { data, setItemProp, onReset } = useProxyPrintHooks()

  const ref = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  })

  const dataCreate =
    9 - data.reduce((p, c) => p + (Boolean(c.url) ? c.sheet : 0), 0)

  return (
    <>
      <Group justify="center" wrap="nowrap" gap={'xl'} align="flex-start">
        <ProxyForm {...{ data }} />
        <Box
          style={{
            position: 'sticky',
            top: 60,
          }}
        >
          <Stack>
            {data.map((d, i) => {
              const selectData =
                d.sheet > 0
                  ? ['0', ...[...Array(d.sheet)].map((_, i) => `${1 + i}`)]
                  : [
                      '0',
                      ...[...Array(dataCreate)].map((_, i) => {
                        return `${i + 1}`
                      }),
                    ]

              return (
                <Group key={i} wrap="nowrap">
                  <Input
                    placeholder="https://www.pokemon-card.com/assets/images/card_images/large/S6a/039889_P_GUREISHIAV.jpg"
                    onChange={(e) => {
                      setItemProp(i, 'url', e.target.value)
                    }}
                    value={d.url}
                  />

                  <Select
                    w={80}
                    data={selectData}
                    searchable
                    rightSection={<Text c="dimmed">枚</Text>}
                    onChange={(v) => {
                      setItemProp(i, 'sheet', Boolean(v) && v ? parseInt(v) : 0)
                    }}
                    value={d.sheet.toString()}
                  />
                </Group>
              )
            })}
          </Stack>
          {dataCreate === 0 && (
            <Text c="red.4" mt={'xs'} fz={'sm'}>
              ※登録出来るカードは9枚までです。
            </Text>
          )}
          <Divider my={'xl'} />
          <Button onClick={handlePrint} fullWidth>
            印刷
          </Button>
          <Box mt={'xs'}>
            <Button color="red" variant="subtle" fullWidth onClick={onReset}>
              リセット
            </Button>
          </Box>
        </Box>
      </Group>
      <div
        ref={ref}
        style={{
          width: `210mm`,
          aspectRatio: `210 / 297`,
        }}
        className={styles.print}
      >
        <ProxyPrintPage {...{ data }} />
      </div>
    </>
  )
}

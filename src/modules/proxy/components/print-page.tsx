import { Box, Center, Group } from '@mantine/core'
import { ProxyCard } from '.'
import { PrintDataType } from '../hooks'

type Props = {
  data: PrintDataType[]
}

export const ProxyPrintPage = ({ data }: Props) => {
  const parse = data.flatMap((d) => [...Array(d.sheet)].map((_) => d.url))

  return (
    <Center
      className=""
      style={{
        width: `100%`,
        height: `100%`,
      }}
    >
      <Group gap={0} justify="center">
        {[...Array(9)].map((_, i) => {
          const url = parse[i]

          if (!url)
            return (
              <Box
                bg={'white'}
                key={i}
                style={{
                  width: `66mm`,
                  maxWidth: `66mm`,
                  aspectRatio: `63/88`,
                }}
              ></Box>
            )

          return <ProxyCard url={url} key={i} />
        })}
      </Group>
    </Center>
  )
}

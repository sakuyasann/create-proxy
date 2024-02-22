import { Box, Image, SimpleGrid } from '@mantine/core'
import React from 'react'
import { PrintDataType } from '../hooks'

type Props = {
  data: PrintDataType[]
}

export const ProxyForm = ({ data }: Props) => {
  const parse = data.flatMap((d) => [...Array(d.sheet)].map((_) => d.url))

  return (
    <SimpleGrid cols={3}>
      {[...Array(9)].map((_, i) => {
        const url = parse[i]

        if (!url)
          return (
            <Box
              bg={'primary.7'}
              key={i}
              style={{
                width: `66mm`,
                maxWidth: `66mm`,
                aspectRatio: `63/88`,
              }}
            ></Box>
          )

        return (
          <Image
            key={i}
            style={{
              maxWidth: `66mm`,
              aspectRatio: `63/88`,
            }}
            src={url}
          />
        )
      })}
    </SimpleGrid>
  )
}

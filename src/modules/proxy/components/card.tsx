import { Box, Image } from '@mantine/core'
import React from 'react'

type Props = {
  url: string
}

export const ProxyCard = ({ url }: Props) => {
  return (
    <Box
      style={{
        width: `63mm`,
        aspectRatio: `63/88`,
      }}
    >
      <Image width={`100%`} h={`100%`} src={url} />
    </Box>
  )
}

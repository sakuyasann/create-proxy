// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  ColorSchemeScript,
  Group,
  MantineProvider,
  Text,
  Title,
} from '@mantine/core'
import { MantineTheme } from '~/shares/libs'
import { ModalsProvider } from '@mantine/modals'

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={MantineTheme}>
          <ModalsProvider>
            <AppShell
              bg={'primary.9'}
              header={{ height: 60 }}
              withBorder={false}
            >
              <AppShellHeader bg={'primary.9'}>
                <Group h={`100%`}>
                  <Group align="baseline" px={'lg'}>
                    <Title
                      style={{
                        lineHeight: 1,
                      }}
                      c={'primary.0'}
                    >
                      PokeCard.club - proxy
                    </Title>
                    <Text c={'primary.0'} fz={'sm'}>
                      ポケモンカードプロキシ作成ページ
                    </Text>
                  </Group>
                </Group>
              </AppShellHeader>
              <AppShellMain>
                <Box py={'xl'}>{children}</Box>
                <Text ta="center" bg={'gray.8'} c={'white'} fz={'xs'} p="xs">
                  ©PokeCard.club
                </Text>
              </AppShellMain>
            </AppShell>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}

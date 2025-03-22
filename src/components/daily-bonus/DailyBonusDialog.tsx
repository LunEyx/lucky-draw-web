'use client'

import { Dialog } from '@/components/ui/dialog'
import { Heading } from '@/components/ui/heading'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { Button } from '@/components/ui/button'
import DailyBonusItem from './DailyBonusItem'
import { useState } from 'react'

interface DailyBonusDialogProps {
  totalLoginDays: number
}

const DailyBonusDialog = (props: DailyBonusDialogProps) => {
  const { totalLoginDays: serverTotalLoginDays } = props
  const [totalLoginDays, setTotalLoginDays] = useState(serverTotalLoginDays)
  const [loading, setLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [open, setOpen] = useState(true)

  const onLogin = async () => {
    setLoading(true)
    const response = await fetch('/api/users/daily-bonus', { method: 'POST' })
    if (response.ok) {
      setTotalLoginDays((prev) => prev + 1)
      setIsDone(true)
    }
    setLoading(false)
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Backdrop bg="black.a5" />
      <Dialog.Positioner>
        <Dialog.Content
          aspectRatio={1}
          _landscape={{ height: '80vh' }}
          _portrait={{ width: '80vw' }}
          overflow="hidden"
          bg="rgb(246,246,236)"
        >
          <VStack p={4} h="full" justifyContent="space-evenly">
            <Heading size="4xl" color="unset">
              登入獎勵
            </Heading>
            <HStack w="full">
              <VStack w="full" flex={6}>
                <HStack w="full">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <DailyBonusItem
                      key={index}
                      w="full"
                      day={index + 1}
                      isCompleted={totalLoginDays > index}
                    />
                  ))}
                </HStack>
                <HStack w="full">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <DailyBonusItem
                      key={index}
                      w="full"
                      day={index + 7}
                      isCompleted={totalLoginDays - 6 > index}
                    />
                  ))}
                </HStack>
              </VStack>
              <Box
                flex={2}
                aspectRatio={1}
                border="1px solid rgb(116, 101, 80)"
                rounded="l2"
              ></Box>
            </HStack>
            {!isDone ? (
              <Button onClick={onLogin} loading={loading}>
                把登入獎勵交出來！
              </Button>
            ) : (
              <Button onClick={() => setOpen(false)}>好耶！</Button>
            )}
          </VStack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default DailyBonusDialog

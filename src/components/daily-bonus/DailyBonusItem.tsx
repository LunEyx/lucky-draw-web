import { CircleCheckIcon, CircleIcon } from 'lucide-react'
import { Box, BoxProps } from 'styled-system/jsx'
import { Text } from '@/components/ui/text'

interface DailyBonusItemProps extends BoxProps {
  isCompleted: boolean
  day?: number
}

const DailyBonusItem = (props: DailyBonusItemProps) => {
  const { isCompleted, day, ...boxProps } = props
  return (
    <Box
      position="relative"
      aspectRatio={1}
      border="1px solid rgb(116, 101, 80)"
      rounded="l2"
      {...boxProps}
    >
      <Box w="full" h="full" position="relative">
        <CircleIcon width="100%" height="100%" />
        {day && !isCompleted && (
          <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text size="4xl">{day}</Text>
          </Box>
        )}
      </Box>
      {isCompleted && (
        <Box position="absolute" top={0} left={0} w="full" h="full">
          <CircleCheckIcon width="100%" height="100%" />
        </Box>
      )}
    </Box>
  )
}

export default DailyBonusItem

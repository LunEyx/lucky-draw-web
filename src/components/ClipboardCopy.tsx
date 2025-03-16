import { Clipboard } from '@/components/ui/clipboard'
import { Input } from '@/components/ui/input'
import { IconButton } from '@/components/ui/icon-button'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'

type ClipboardCopyProps = {
  text?: string
} & Clipboard.RootProps

const ClipboardCopy = (props: ClipboardCopyProps) => {
  const { text } = props

  return (
    <Clipboard.Root value={text} {...props}>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}

export default ClipboardCopy

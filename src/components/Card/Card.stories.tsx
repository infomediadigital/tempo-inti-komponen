import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from './Card'
import { Button } from '../Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Status Langganan</CardTitle>
      </CardHeader>
      <CardBody className="text-sm text-neutral-500">
        Kelola paket berlangganan Tempo Plus, VIP, dan Teras dari satu tempat.
      </CardBody>
      <CardFooter>
        <Button className="w-full">Lihat Detail</Button>
      </CardFooter>
    </Card>
  ),
}

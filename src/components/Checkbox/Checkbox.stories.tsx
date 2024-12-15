//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Meta, type StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [isChecked, setIsChecked] = useState(args.defaultChecked || false);

      const handleCheckedChange = (checked: boolean) => {
        setIsChecked(checked)
        console.log('Checkbox state:', checked)
      }

      return (
        <Checkbox
          {...args}
          checked={isChecked}
          onCheckedChange={handleCheckedChange}
        />
      )
    }
    return <Wrapper />
  },
  args: {
    defaultChecked: false, // Default initial state
    disabled: false, // Enable or disable the checkbox
    required: true, // Add a required attribute
  },
}

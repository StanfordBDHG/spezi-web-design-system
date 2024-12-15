//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Meta } from '@storybook/react'
import { RadioInput, RadioItem, RadioIndicator } from './RadioInput'

const meta: Meta = {
  title: 'Components/RadioInput',
}

export default meta

export const Default = () => (
  <RadioInput
    className="RadioGroupRoot flex flex-col space-y-4"
    defaultValue="default"
    aria-label="View density"
  >
    <div className="flex items-center space-x-2">
      <RadioItem value="1" id="r1" className="border-primary">
        <RadioIndicator />
      </RadioItem>
      <label htmlFor="r1">Default</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioItem value="2" id="r2" className="border-primary">
        <RadioIndicator />
      </RadioItem>
      <label htmlFor="r2">Second Choice</label>
    </div>
  </RadioInput>
)

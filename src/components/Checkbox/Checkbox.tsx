//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react'

const CheckboxVariants = cva(
  'flex items-center justify-center w-6 h-6 rounded focus:outline-none font-medium hover:border-blue-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-6 h-6 border border-gray-500 rounded',
)

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <div className="flex h-full w-full items-center justify-center">
    <CheckboxPrimitive.Root
      ref={ref}
      className={CheckboxVariants({ className })}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon className="h-4 w-4 text-gray-700" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

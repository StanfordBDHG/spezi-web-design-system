//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import * as RadioPrimitive from '@radix-ui/react-radio-group'
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react'
import { cn } from '../utils/className'

export const RadioInput = RadioPrimitive.Root

export const RadioItem = forwardRef<
  ElementRef<typeof RadioPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioPrimitive.Item> & { label?: string }
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-4">
    <RadioPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-border focus:ring-2 focus:ring-ring focus:ring-offset-1',
        className,
      )}
      {...props}
    />
    {label && (
      <label htmlFor={props.id} className="popover-foreground">
        {label}
      </label>
    )}
  </div>
))
RadioItem.displayName = RadioPrimitive.Item.displayName

export const RadioIndicator = forwardRef<
  ElementRef<typeof RadioPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof RadioPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Indicator
    ref={ref}
    className={cn(
      'relative flex h-full w-full items-center justify-center',
      className,
    )}
    {...props}
  >
    <span className="relative block h-2.5 w-2.5 rounded-full bg-primary"></span>
  </RadioPrimitive.Indicator>
))

RadioIndicator.displayName = 'RadioInput'

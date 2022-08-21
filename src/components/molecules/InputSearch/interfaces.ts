import React, { HTMLInputTypeAttribute } from "react"

export interface InputSearchProps extends React.HTMLAttributes<HTMLInputElement> {
  tabIndex?: number
  value: string
}
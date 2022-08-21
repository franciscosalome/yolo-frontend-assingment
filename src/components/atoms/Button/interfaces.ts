
export interface ButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  tabIndex?: number
  loading?: boolean
}
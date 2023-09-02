import clsx from 'clsx'

export const GradientBackground = ({ className }) => (
  <div className={clsx('color-background opacity-30 dark:opacity-40', className)} />
)

export const GradientBackgroundBottom = ({ className }) => (
  <div className={clsx('color-background-2 opacity-20 dark:opacity-30', className)} />
)

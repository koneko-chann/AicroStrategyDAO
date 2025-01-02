import Link, { type LinkProps } from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

export interface NavLinkProps extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  children: React.ReactNode
}

const FooterLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, children, ...props }: NavLinkProps) => {
    return (
      <Link href={href} className={cn('text-muted-foreground hover:text-primary', className)} {...props}>
        {children}
      </Link>
    )
  }
)
FooterLink.displayName = 'FooterLink'

export default FooterLink

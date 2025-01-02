import { cva, type VariantProps } from 'class-variance-authority'
import Link, { type LinkProps } from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

const navLinkVariants = cva('', {
  variants: {
    linkType: {
      text: 'text-sm font-medium transition-colors hover:text-primary',
      image: 'flex items-center space-x-2'
    }
  },
  defaultVariants: {
    linkType: 'text'
  }
})

export interface NavLinkProps
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string
  className?: string
  children: React.ReactNode
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, linkType, children, ...props }: NavLinkProps) => {
    return (
      <Link href={href} className={cn(navLinkVariants({ linkType }), className)} {...props}>
        {children}
      </Link>
    )
  }
)
NavLink.displayName = 'NavLink'

export default NavLink

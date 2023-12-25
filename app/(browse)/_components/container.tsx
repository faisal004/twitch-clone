'use client'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'

import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state)
  const matches = useMediaQuery('(max-width: 1024px)')
  useEffect(() => {
    if (matches) {
      onCollapse()
    } else {
      onExpand()
    }
  }, [matches, onCollapse, onExpand])
  return (
    <div
      className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}
    >
      {children}
    </div>
  )
}

export default Container

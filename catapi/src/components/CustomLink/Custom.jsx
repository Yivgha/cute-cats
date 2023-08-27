"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CustomLink({
  children,
  href,
  prefetch = false,
  replace = false,
  shallow = false,
  ...props
}) {
  const router = useRouter()

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href)
    }
  }, [router, href, prefetch])

  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        event.preventDefault()
        if (replace) {
          router.replace(href, undefined, { shallow })
        } else {
          router.push(href, undefined, { shallow })
        }
      }}
    >
      {children}
    </a>
  )
}
import { useState, useEffect } from 'react'

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 second loading screen

    return () => clearTimeout(timer)
  }, [])

  return { isLoading }
}
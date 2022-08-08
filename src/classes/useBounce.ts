import { useState } from 'react'

export const useBounce = () => {
  const [test, setTest] = useState(0)
  return { test, setTest }
}

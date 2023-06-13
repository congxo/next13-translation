'use client'

import { useState } from 'react'

export default function ClientCompo({
  dictionary,
}: {
  dictionary: {
    increment: string
    decrement: string
  }
}) {
  const [count, setCount] = useState(0)
  return (
    <p>
      This compoment is rendered on client:{' '}<br/>
      {dictionary.increment}: {dictionary.decrement}
    </p>
  )
}

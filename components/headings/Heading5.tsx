import React from 'react'
import { headingProps } from '../../interfaces/heading'

const Heading5 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-base"> {title} </h2>
    </>
  )
}

export default Heading5
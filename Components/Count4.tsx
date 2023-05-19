'use client'
import React from 'react'
import CountUp from 'react-countup'
const Count4 = () => {
  return (
    <>
    <h1 className="font-Palatino font-bold text-[60px] leading-[81px] text-white">
        <CountUp start={0} end={100} duration={1} delay={0} enableScrollSpy/>
    </h1>
    </>
  )
}

export default Count4
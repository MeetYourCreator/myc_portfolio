import React from 'react'
import { motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
  }
}

const InitialTransition = () => {

  return (
    <>
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          className='relative -50 w-full bg-black'
          initial='initial'
          animate='animate'
          variants={blackBox}
          />
      </div>
    </>
  )
  

}
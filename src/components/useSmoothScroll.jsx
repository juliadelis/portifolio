// hooks/useSmoothScroll.js

import { useEffect } from 'react'

const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault()

      const targetId = e.target.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener('click', smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll)
      })
    }
  }, [])
}

export default useSmoothScroll

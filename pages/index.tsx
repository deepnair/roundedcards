import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'

const Home: NextPage = () => {

  // const [parentState, setParentState] = useState(styles.parent)
  const [baseDegree, setBaseDegree] = useState(0)
  const [cState, setCState] = useState(styles.c)
  const [dState, setDState] = useState(styles.d)
  const [aState, setAState] = useState(styles.a)
  const [bState, setBState] = useState(styles.b)
  const [playerClass, setPlayerClass] = useState(['a', 'b', 'c', 'd'])
  const [arrangement, setArrangement] = useState([styles.bottom, styles.left, styles.top, styles.right])



  const onNext = () => {

    setBaseDegree(baseDegree+90)
   


    const newPlayerClass = playerClass.reduce((prev: string[], curr: string, index) => {
      if(index < playerClass.length-1){
        prev.push(curr)
        return prev.slice()
      }
      prev.unshift(curr)
      return prev.slice()
    }, [])
    
    const newArrangement = arrangement.reduce((prev: string[], curr: string, index) => {
      if(index === 0){
        return prev
      }
      if(index === arrangement.length-1){
        prev.push(curr)
        prev.push(arrangement[0])
        return prev.slice()
      }
      prev.push(curr)
      return prev.slice()
    }, [])
    
    setPlayerClass(newPlayerClass)
    setArrangement(newArrangement)

  }

  const onPrevious = () => {
    const newPlayerClass = playerClass.reduce((prev: string[], curr: string, index) => {
      if(index === 0){
        return prev
      }
      if(index === playerClass.length-1){
        prev.push(curr)
        prev.push(playerClass[0])
        return prev.slice()
      }
      prev.push(curr)
      return prev.slice()
    }, [])

    const newArrangement = arrangement.reduce((prev: string[], curr: string, index) => {
      if(index < arrangement.length-1){
        prev.push(curr)
        return prev.slice()
      }
      prev.unshift(curr)
      return prev.slice()
    }, [])

    setPlayerClass(newPlayerClass)
    setArrangement(newArrangement)
    
  }
  
  return (
    <>
      <div className={styles.parent} style={{transform: 'rotate(' + baseDegree + 'deg)'}}>
        <div className={`${aState} ${arrangement[0]}`} style={{transform: 'rotate(-' + baseDegree + 'deg)'}}>
        </div>
        <div className={`${bState} ${arrangement[1]}`} style={{transform: 'rotate(-' + baseDegree + 'deg)'}}>
        </div>
        <div className={`${cState} ${arrangement[2]}`} style={{transform: 'rotate(-' + baseDegree + 'deg)'}}>
        </div>
        <div className={`${dState} ${arrangement[3]}`} style={{transform: 'rotate(-' + baseDegree + 'deg)'}}>
        </div>
      </div>
      <button onClick={onNext}>Turn</button>
    </>
  )
}

export default Home

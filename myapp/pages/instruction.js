import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import React from 'react'
import ButtonUI from '../comps/Button/index'
import TitleUI from '../comps/Title/index'
import SelectionUI from '../comps/Selection/index'


export default function home() {
    

    const router = useRouter();

    return ( 
    <div style={styles.body}>
    <TitleUI title="How it works"
    subtitle="Whole testing process"/>
    <div style={styles.containerbox}>
     <SelectionUI 
     src="/Step01.png"
     routeTo="/take01"
     title="Take the test"
     subtext="Complete the 6 Question test"/>
     <img src="/arrow.png" style={styles.arrow}/>
     <SelectionUI 
     src="/intro.png"
     routeTo="/take02"
     title="Get the result"
     subtext="Get the result base on the mental test"/>
       <img src="/arrow.png" style={styles.arrow}/>
       <SelectionUI 
     src="/Step03.png"
     routeTo="/take03"
     title="Take our suggestion"
     subtext="Result base on the mental test"/>
    </div>
    <ButtonUI title="Begin"
    routeTo='/take.js'/>
    </div>


    )
}
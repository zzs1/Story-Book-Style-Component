import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'
import ButtonUI from '../Button/index.js'
import TitleUI from '../title/index.js'
import EnlargedUI from '../comps/Enlarged'

export default function take01() {

    const router = useRouter();
    return ( 
        <div styles={styles.body}>
        <TitleUI title="How it works"
        subtitle="Take our Suggestion"/>
        <div styles={styles.containerbox}>
            <EnlargedUI src="/Step01.png" title="Take our Suggestion" subtext="General suggestion base on common mental issue<br></br> 
Our research team include professional psychologist, by study the experiences of client, we gather those information to make the suggestion part. 
The suggestion part Including:
      <ul>
      <li>Common Mental Illness</li>
      <li>Symptom Diagnosis</li>
      <li>Suggestion</li>
      <li>Reach For Help</li>
      </ul>"/>
        </div>
        <ButtonUI title="See Suggestion"
        routeTo='/suggest'/>
        </div>

    )
}
import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import ButtonUI from '../Button/index.js'
import TitleUI from '../title/index.js'
import EnlargedUI from '../comps/Enlarged';

export default function take01() {

    const router = useRouter();
    return ( 
        <div style={styles.body}>
        <TitleUI title="How it works"
        subtitle="Take our Suggestion"/>
        <div style={styles.containerbox}>
            <EnlargedUI src="/Step03.png" title="Take Our Suggestion" subtext="Designated suggestion to help you calm your mind<br></br> 
We recommend you with the next move and multiple professional website, all in hope to bring you the best possible solution for your current dilemma"/>
        </div>
        <ButtonUI title="Get Suggestions"
        routeTo='/suggestion'/>
        </div>

    )
}
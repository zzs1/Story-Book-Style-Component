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
            <EnlargedUI src="/intro.png" title="Get the result" subtext="Get your Base result in no time!<br></br> 
Get your own unique testing result to determine whether or not you have a mental issue, leveling from 20 to 100."/>
        </div>
        <ButtonUI title="Access Result"
        routeTo='/result'/>
        </div>

    )
}
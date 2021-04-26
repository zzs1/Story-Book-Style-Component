import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const UL = styled.ul `


    list-style:none;
    display: flex;
    flex-flow:row nowrap;


li {
    padding: 9px 30px 0px 0px;
}

li:hover{
    color:#54738E;
}

hr {
    border-top: 1px solid white;
    border-radius: 1px;
  }

@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #82DED9;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right:0;
    Width:180px;
    Height:430px;
    border-radius: 10px
    padding-top: 3.5rem;
    translation; transform 0.3s ease-in-out;

    li{
        color:#fff;
        font-weight:700;
        font-style:normal;
        font-size:25px;
        line-height:28.33px;
    }
}

`;

const RightNav = ({ open }) => {
    
    const router = useRouter();

   return  <UL open={open}>
           <li onClick={()=>router.push("home")}>Home<hr/></li>
           <li onClick={()=>router.push("/about")}>About<hr/></li>
           <li onClick={()=>router.push("/test")}>Test<hr/></li>
           <li onClick={()=>router.push("/learn")}>Learn<hr/></li>
           <li onClick={()=>router.push("/suggestion")}>Suggestions<hr/></li>
           <li onClick={()=>router.push("/help")}>Helpline<hr/></li>
       </UL>
}

export default RightNav
import styled from "styled-components";

export const HeaderF = styled.header`
   max-width: 100%;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: white;
   .name-logo{
      margin-left: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 11%;
      cursor: pointer;
      h1{
         color: #000;
         font-weight: 100;
         font-size: 26px;
         letter-spacing: 2px;
         
      }
   }  
   nav{
      margin-right: 3rem;
      ul{
         display: flex;
         list-style: none;
         li{
            color: #000;
            font-weight: 600;
            margin-right: 3.2rem;
            text-transform: uppercase;
            font-size: 13px;
            cursor: pointer;
            opacity: 0.6;
            letter-spacing: 1px;
            font-family: 'Quicksand', sans-serif;
         }
      }

   }
`

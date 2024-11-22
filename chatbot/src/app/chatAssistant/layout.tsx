/* eslint-disable */
"use client"
import { useState } from "react";


export default function chatlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
   

    return (
        <>
        <div>
        {children} 
        </div>
    
        </>
    )
}

import { useEffect } from "react";
import {  Fab } from '@mui/material';
import style from './Home.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DownloadIcon from '@mui/icons-material/Download';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ImageIcon from "@mui/icons-material/Image";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

export default function Home(){
    
   
  useEffect(() => {
    const boldFunctionality = document.querySelector('#boldButton');
    const italicsFunctionality = document.querySelector('#italicsButton');
    const underlineFunctionality = document.querySelector('#underlineButton');

    const newBtn=document.querySelector('#New')
    const txtBtn=document.querySelector('#txt')

    const content=document.querySelector('#content')
    const handleBoldClick = () => {
      document.execCommand('bold');
    };

    const handleItalicClick = () => {
      document.execCommand('italic');
    };

    const handleUnderlineClick = () => {
      document.execCommand('underline');
    };

    const handleNewBtn=()=>{
      content.innerHTML=''
    }

    const handleTxt=()=>{
      const a= document.createElement('a')
      const blob=new Blob([content.innerText])
      const dataUrl=URL.createObjectURL(blob)
      a.href=dataUrl
      a.download='dcoument.txt'
      a.click()
    }

    boldFunctionality.addEventListener('click', handleBoldClick);
    italicsFunctionality.addEventListener('click', handleItalicClick);
    underlineFunctionality.addEventListener('click', handleUnderlineClick);

    newBtn.addEventListener('click',handleNewBtn)
    txtBtn.addEventListener('click',handleTxt)

    return () => {
      boldFunctionality.removeEventListener('click', handleBoldClick);
      italicsFunctionality.removeEventListener('click', handleItalicClick);
      underlineFunctionality.removeEventListener('click', handleUnderlineClick);
      newBtn.removeEventListener('click',handleNewBtn);
      txtBtn.removeEventListener('click',handleTxt)
    };
  }, []);


    return(
        <div className={style.wrapper}>
        <div className={style.IconsContainer}> 
        <UndoIcon/>
        <RedoIcon/>
        <ZoomInIcon/>
        <ZoomOutIcon/>
        <FormatBoldIcon id="boldButton"/>
        <FormatItalicIcon id="italicsButton"/>
        <FormatUnderlinedIcon id="underlineButton"/>
        <FormatQuoteIcon/>
        <CodeIcon/>
        <FormatColorFillIcon/>
        <FormatListBulletedIcon/>    
        <FormatListNumberedIcon/>
        <FormatColorTextIcon/>
        <FormatIndentDecreaseIcon/>
        <FormatLineSpacingIcon/>
        <FormatSizeIcon/>
        <ImageIcon/>
      
        
   
        <div>
        <button id="New">New</button>
       </div>
                

         </div>

        <div id='content' className={style.input} contentEditable={true} spellCheck={false}></div>
        
        <div className={style.download} id="txt">
        <Fab id="txt" color="primary" aria-label="add">
        <DownloadIcon />
       </Fab>
       </div>
        </div>
    )
}
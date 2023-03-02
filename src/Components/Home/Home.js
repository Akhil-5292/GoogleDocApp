import { useState } from "react";
import Input from "../Input/Input";
import style from './Home.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ReorderIcon from '@mui/icons-material/Reorder';
import SegmentIcon from '@mui/icons-material/Segment';
export default function Home(){
    
   const [bold,setBold]=useState(false)
   const [text,setText]=useState()
   const click=()=>{
   setBold(!bold)
   }

  const change=(e)=>{
    setText(e.target.value)
  }


    return(
        <div className={style.wrapper}>
        <h3 className={style.nav}> <strong onClick={click}>B</strong>
        <em>I</em>
        <u>U</u>
        <span>"</span>    
        <span>H1</span>    
        <span>H2</span>    
        <span><FormatListBulletedIcon/></span>    
        <span><FormatListNumberedIcon/></span>
        <span>Normal</span>
        <span><UnfoldMoreIcon/></span>
        <span><ReorderIcon/></span>
        <span><SegmentIcon/></span>
         </h3>

        <Input />
        <input onChange={change}
        />
        
        </div>
    )
}
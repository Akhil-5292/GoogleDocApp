import style from './Input.module.css'

export default function Input(){
    return(
        <div className={style.wrapper}>
             <textarea
              className={style.input}
              rows={8}
              cols={60}
              
              />
        </div>
    )
}
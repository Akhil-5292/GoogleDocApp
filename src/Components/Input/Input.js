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

// import * as React from 'react';
// import './style.css';

// export default function Input() {
//   const [html, setHtml] = React.useState(
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
//   );

//   const divRef = React.useRef();

//   const createElement = (tagname, text) => {
//     const node = document.createElement(tagname);
//     node.innerText = text;
//     return node;
//   };

//   const format = ({ tagname, action }: any, event) => {
//     const selection = window.getSelection().toString();
//     const range = window.getSelection().getRangeAt(0);

//     const insertNode = (node) => {
//       range.deleteContents();
//       range.insertNode(node);
//     };

//     if (tagname) {
//       insertNode(createElement(tagname, selection));
//       return;
//     }

//     if (action === 'clear') {
//       divRef.current.innerHTML = divRef.current.innerText;
//     } else if (action === 'color') {
//       const node = createElement('span', selection);
//       node.style.color = event.target.value;
//       insertNode(node);
//     }
//   };

//   return (
//     <div className={style.wrapper}>
//       <div className={style.btn}>
//         <button onClick={() => format({ tagname: 'b' })}>
//           <b>B</b>
//         </button>
//         <button onClick={() => format({ tagname: 'i' })}>
//           <i>I</i>
//         </button>
//         <button onClick={() => format({ tagname: 'u' })}>
//           <u>U</u>
//         </button>
//         <button onClick={() => format({ tagname: 'h1' })}>H1</button>
//         <button onClick={() => format({ tagname: 'h2' })}>H2</button>
//         <button onClick={() => format({ action: 'clear' })}>clear</button>

//         <input
//           type="color"
//           onChange={(event) =>
//             format(
//               {
//                 action: 'color',
//               },
//               event
//             )
//           }
//         />
//       </div>
//       <div
//         className={style.editor}
//         ref={divRef}
//         dangerouslySetInnerHTML={{
//           __html: html,
//         }}
//         contentEditable
//       ></div>
//     </div>
//   );
// }

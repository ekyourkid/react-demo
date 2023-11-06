import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

// background, colour, title

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const background = router.query.background || 'black'
  const colour = router.query.colour || 'red'
  const title = router.query.title || 'NO title'
  const img = router.query.image || '/monkey.jpg'


  return (
    <main
    style = {{background:background,color:colour}}
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <img src={img} alt="bebas" />
     {title}
    </main>
  )
}


// representasi sistem kerja 'useState()'
// import React, {useState} from "react";

// function App(props) {

//   const [name, setName] = useState('ekyourkid')
//   const [imageSrc, setImage] = useState('/monkey.jpg')

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }
//   function handleImageChange(e) {
//     setImage(e.target.value);
//   }

//   return(
//     <div class="card">

//       <input type="text" value={name} onChange={handleNameChange} />
      
//       <input type="text" value={imageSrc} onChange={handleImageChange} />

//       <h3>{name}</h3>

//       <img src={props.imageSrc} alt="my face" height="200" width='200' />

//     </div>
//   )

// }


// representasi sistem kerja 'useEffect()'
// import React, {useEffect, useState} from "react";

// function App(props) {

//   const [name, setName] = useState('ekyourkid')
//   const [imageSrc, setImage] = useState('/monkey.jpg')

//   useEffect(
//     ()=> {
//       document.title = 'Profile' + name
//       console.log('update use effect')
//     },
//     [name]
//   )

//   useEffect(
//     ()=> {
//       console.log('image' + imageSrc)
//     },
//     [imageSrc]
//   )


//   function handleNameChange(e) {
//     setName(e.target.value);
//   }
//   function handleImageChange(e) {
//     setImage(e.target.value);
//   }

//   return(
//     <div class="card">

//       <input type="text" value={name} onChange={handleNameChange} />
      
//       <input type="text" value={imageSrc} onChange={handleImageChange} />

//       <h3>{name}</h3>

//       <img src={props.imageSrc} alt="my face" height="200" width='200' />

//     </div>
//   )

// }


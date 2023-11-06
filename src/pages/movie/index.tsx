import { useRouter } from 'next/router'

 
const anggota = [{
  id: 0,
  name: 'Albar Moerhamsa',
  profession: 'Mountainering',
},
{
  id: 1,
  name: 'Rizky Syahputra',
  profession: 'Rock Climbing',
},
{
  id: 2,
  name: 'Imam Zarkasyi',
  profession: 'Mountainering',
},
{
  id: 3,
  name: 'Irsyadillah Ghifarry',
  profession: 'Climbing',
},
{
  id: 4,
  name: 'Muhammad Juliandika',
  profession: 'Mountainering',
},
]
// export default function Page() {
//   const router = useRouter()

  export default function list(){
    const listItems = anggota.map()
    return(
        <div>
        </div>
    ) 
  }



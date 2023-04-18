import { useEffect, useState} from 'react'
import bd from "../bd.Json"
import axios from 'axios'
import { Link } from 'react-router-dom'
import './HomeStyle.css'

const ShowCourse = () => {
const [data, setData] = useState([])
const [selected, setSelected] = useState('')
  useEffect(() => {
     axios.get(bd)
     .then(response => setData(response.data.results))
    .catch(err => console.log("Your Error Phased" + err))
  })
  
  const handleSubmit = (user) => {
   setSelected(user);
  }

  return (
    <div className='Side_split'>
        <div className='medium'>
   {data.map(list => (
     <h2 key={list.id} onClick={() => handleSubmit(list)}>
      {list.title.length > "22" ? <span>{list.title.slice(0,22)}...</span>: <span>{list.title}</span>
      }
      </h2>
   ))}
        </div>
        <div className='right'>
      {selected ? <iframe 
      scrolling='no'
      allowFullScreen
       src={selected.video} /> : null}
        </div>
    </div>
  )
}

export default ShowCourse
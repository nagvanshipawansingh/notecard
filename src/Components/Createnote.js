import React, {useState} from 'react'
import '../index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note'
import { v4 as uuid } from 'uuid';

export default function Createnote() {

 

  const valueObj = {
    title:'',
    content:'',
    id:uuid()
  }
  const [item, setItem] = useState(valueObj)
  const [note, setNote] = useState([])

  const [expand, setExpand] = useState(false)

  const inputEvent = (event) =>{
    // const value = event.target.value;
    // const name = event.taraget. name;;

    const{value, name} = event.target;

    setItem({
      ...item, [name] : value
    })

  }

  const deleteItem = (ItemId) => () =>{
    const newNotes = [...note].filter(item => item.id !== ItemId);
    setNote(newNotes)
  }

  const addNote = () =>{
  if(item.title === ''){
    alert('must be filled title')
  }else if( item.content === ""){
    alert('must be enter some value in content')
  }else {
    // setNote((prevState)=>{
    //    const newValObj = {
    //     ...item,
    //     id : uuid(),
    //    }
    //    return [...prevState, newValObj]
    // })
     setNote([...note, item])
     setItem(valueObj)
  }

    
  }

  const expandTitle = () => {
    setExpand(true)
  }


  return (
    <div className='center_div'>
    <div className='main_div_createnote'>
    <form className='form'>
    {expand ? <input className='input_area' type="text" name='title' value={item.title} placeholder='Title' autoComplete='off' onChange={inputEvent}/> : null
       }
        <br />
        <textarea name="content" value={item.content} cols="30" rows="5" placeholder='Write a note...' onClick={expandTitle} onChange={inputEvent}></textarea>
       {expand ? <Button onClick={addNote}><AddIcon className='Add_button1'></AddIcon></Button> : null }
        </form>
    </div>

<div className='note_div'>
{note.map((val)=>{
  console.log(val)
      const {title, content, id} = val;
      return <Note 
        key={id}
        id = {id}
        title = {title}
        content = {content}
        deleteNote = {deleteItem(id)}
      /> 
    })}
</div>
   
    </div>
  )
}

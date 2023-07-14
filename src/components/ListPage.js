import React from 'react'
import './listpage.css'
import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const ListPage = ({Data, setData}) => {
  
  useEffect( async ()=>{
    const result = await axios('https://jsonplaceholder.typicode.com/todos/')
    console.log(result.data)
    setData([...result.data])
  }, [])
  return (
    <>
        <div style={{textAlign:"center", color: 'white', fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0rem'}}>List form fake api</div>
        <div className='list_container'>
            {
                Data.length === 0 ? "Loading" :
                Data.map((obj)=>(
                    <Card userId={obj.userId} id={obj.id} title={obj.title} completed={obj.completed} />
                )) 
            }
        </div>
    </>
  )
}

const Card = ({userId, id, title, completed}) => {
    
    return(
        <div className='card_container'>
            <h3>Title : {title}</h3>
            <h3>UserId : {userId}</h3>
            <h3>Id : {id}</h3>
            <h3>Complete : {completed?'yes':'no'}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { Data: state.data }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        setData: (quantity)=>{dispatch({type: 'ADD_DATA', payload: quantity})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)

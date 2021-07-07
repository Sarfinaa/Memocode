import React,{useEffect,useState} from 'react'
import "./Cards.css"
import Card from './Card/Card'
import { IoMdCreate } from 'react-icons/io';
import {useSelector} from "react-redux";
import { getCards } from '../../actions/cards';
import {  useDispatch} from "react-redux";
import {deleteCard} from '../../actions/cards';
import Editor from '../Editor/Editor';
import New from '../New/New';

function Cards() {
     const dispatch = useDispatch();
     const [edit,setEdit]=useState(false);
     const cards = useSelector(state => state.cards.cards)
     const [currentId,setCurrentId]=useState(cards[0]?._id);
     const card=useSelector(state=>currentId?state.cards.cards.find((p)=>p._id===currentId):null);
  useEffect(()=>{
dispatch(getCards());
  },[dispatch])
  const handleEdit=()=>{
      setEdit(true);
  }
    return (
        <div className="whole-container">
            <div>
                <button className="train-btn">
                    Train Now
                </button>
            </div>
            <div className="container-cards">
                <div className="d1">
                    <div className="create-card">
                        <h4>Create new card</h4>
                    </div>
                    <div className="cardholder">
                      {cards.map(card =>(                    
                          <Card  key={card._id} card={card} isActive={currentId==card._id} setCurrentId={setCurrentId}/>
                      ))}
                   
                    </div>
                </div>
                <div className="d2">
                    <div className="make-function">
                        <h1>{card?.wul}</h1>
                        <div className="language">{card?.language}</div>
                    </div>
                    {!edit?(
                        <>
                    <div>
                    <Editor noPlaceholder value={card?.selected}language={card?.language}/>
                </div>
                <div className="card-btn-container">
                    <button className="card-btn" onClick={handleEdit}><IoMdCreate />Edit</button>
                    <button className="card-btn" onClick={() => dispatch(deleteCard(currentId))}>Delete</button>
                </div>
                         </>
                    
                    ):(
                       <New newinCard/>

                    )}
                    
                </div>

            </div>
        </div>
    )
}

export default Cards

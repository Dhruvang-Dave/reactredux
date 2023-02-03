import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state/index';
const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney} = bindActionCreators(actionCreator, dispatch);
  return (
    <div>
      <button className='mx-2' type="button" onClick={()=>{withdrawMoney(100)}}> - </button>
      <span> Amount will be updated.</span>
      <button className='mx-2' type="button" onClick={()=>{depositMoney(100)}}> + </button>
    </div>  
  )
}

export default Shop

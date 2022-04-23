import React from 'react'
import Add from './Add';
import Show from './Show';
import {Routes,Route} from 'react-router-dom'
import Headers from './Headers'
const Crud = () => {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/add' element={ <Add/>}>  </Route>
      <Route path='/show' element={ <Show/>}> </Route>
    </Routes>
    </>
  )
}

export default Crud;

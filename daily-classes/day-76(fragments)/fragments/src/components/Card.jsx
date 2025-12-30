import React from 'react'
import Upper from './Upper';
import Lower from './Lower';

const Card = (props) => {

  // console.log(props.userData.profile);
  
  return (
    <div className='h-fit w-fit bg-purple-400 p-4 m-4 text-center rounded-2xl'>
      <Upper profile={props.userData.profile}/>

      <Lower name={props.userData.name} role={props.userData.role}/>
    </div>
  )
}

export default Card
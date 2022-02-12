import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'


const CreateUserLoading = () => {
  return (
    <div className='create-user-load'>
        <FontAwesomeIcon icon={faSync} spin className='user-loading-icon'/>
        <p className='user-loading-text'>Kullanıcı Oluşturuluyor...</p>
    </div>
  )
}

export default CreateUserLoading
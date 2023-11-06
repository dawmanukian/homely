import React from 'react'
import RecoverForm from '../../components/recover-form/RecoverForm'
import AuthImg from '../../components/auth-img/AuthImg'

const RecoverPage = () => {
  return (
    <div style={{display: 'flex', width: '100%', height: '100vh'}}>
        <AuthImg />
        <RecoverForm />
    </div>
  )
}

export default RecoverPage
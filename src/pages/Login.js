import React from 'react'

function Login() {
  return (
    <div className='login'>
        <h1 className='loginTitle'> Choose a Login Method </h1>
        <div className='wrapper'>
            <div className='left'>
                <div className='loginButton google'>
                    <img className='image' src='images/Google_Icon.webp'></img>Google
                </div>
                <div className='loginButton facebook'>
                    <img className='image' src='images/Facebook_Logo.png'></img>Facebook
                </div>
                <div className='loginButton github'>
                    <img className='image' src='images/GitHub-logo.png'></img>GitHub
                </div>
            </div>
            <div className='center'>
                <div className='line' />
                <div className='or'>OR</div>
            </div>
            <div className='right'>
                <input className='uname' type='text' placeholder='Username' />
                <input className='pword' type='text' placeholder='Password' />
                <button className='submit'> Login </button>
            </div>
        </div>
    </div>
  )
}

export default Login
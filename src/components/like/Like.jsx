import React from 'react'
import './Like.css'

function Like({display}) {
    return <i className={`fa${display?'s':'r'} fa-heart like-margin`}></i>
}

export default Like
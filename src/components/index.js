import React from 'react'
import'./main.scss'

class Box extends React.Component {

    render(){
        return(
            <section>
                <div className='box-container'>
                    <div className='box'>
                        <h1>Hello There!</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default Box
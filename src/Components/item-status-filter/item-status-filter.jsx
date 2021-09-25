import React from 'react';

class ItemStatusFilter extends React.Component {
    buttons = [
        {name:'active', label: 'Active'},
        {name:'all', label: 'All'},
        {name:'done', label: 'Done'},
    ]
    render () {
        return (
            this.buttons.map(({name, label})=>{
                const isActive=name===this.props.filterButton;
                const clazz = isActive?'btn-info':'btn-outline-secondary'
                return (
                    <button type='button' key={name} 
                    onClick={()=>this.props.onFilterButtonChange(name)} className={`btn ${clazz}`}> {label} </button>
                )
            })
        )
       
        

            // <div className='btn-group'>
            //     <button type='button' className='btn btn-info'> All </button>
            //     <button type='button' className='btn btn-outline-secondary'> Active </button>
            //     <button type='button' className='btn btn-outline-secondary'> Done </button>
    
            // </div>
        
    }
    }
  

export default ItemStatusFilter;
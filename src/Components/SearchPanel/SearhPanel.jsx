import React from 'react';
import './SearchPanel.css';


class SearhPanel extends React.Component {

    state={
        term:''
    }
    
    onInputChange=(e)=>{
        this.setState({
            term: e.target.value
        })
        this.props.onSearchChange(e.target.value)
    }

    render(){
        return (
            <div className='search-input'>
                <input onChange={this.onInputChange} value={this.state.term} placeholder={'введите цель'}/>
            </div>
             )
            }
     }

  export default SearhPanel;

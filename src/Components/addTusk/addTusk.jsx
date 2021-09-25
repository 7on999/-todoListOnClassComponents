import React  from 'react';
import './addTusk.css';


class AddTusk extends React.Component {
   state={
       text:''
   }

   onInputChange=(e)=>{
      this.setState({
           text: e.target.value
        }
       )
   }

   onSubmitForm=(e)=>{
    e.preventDefault();
    this.props.onAddTusk(this.state.text);
    this.setState({
        text:''
    })
   }

    render() {
        
        return (
            <form onSubmit={this.onSubmitForm} className='item-add-form d-flex'>
                <input onChange={this.onInputChange} value={this.state.text} type="text" className='form-control' placeholder='напишите вашу цель'/>
                <button className='btn btn-outline-secondary'> добавить задачу </button>
            </form>
        )
    }
}

export default AddTusk
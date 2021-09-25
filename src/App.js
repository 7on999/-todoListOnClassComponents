import React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader';
import SearhPanel from './Components/SearchPanel/SearhPanel';
import TodoList from './Components/TodoList/TodoList';
import ItemStatusFilter from './Components/item-status-filter/item-status-filter';
import AddTusk from './Components/addTusk/addTusk';

class App extends React.Component {

  state = {
    TodoData: [
      {label:'покормить кота', important: false, done: false, id: 1 },
      {label:'покормить собаку', important: false, done: false, id: 2 },
      {label:'покормить себя', important: false, done: true, id: 3 },
  ], 
    term: '',
    filterButton:'all',
}

 newId=4;

deleteLabel=(id)=>{
  this.setState(({TodoData})=>{
    const idx = TodoData.findIndex((el)=>el.id===id);
    return {
      TodoData: [...TodoData.slice(0,idx), ...TodoData.slice(idx+1)]
    }
  })
}

toggleProperty=(id, arr, propName)=>{
  const idx = arr.findIndex((el)=>el.id===id);
      const newItem={...arr[idx], [propName]:!arr[idx].propName }
      return [...arr.slice(0,idx), newItem, ...arr.slice(idx+1)]
      
}
onToggleImportant=(id)=>{
    this.setState(({TodoData})=>{
      return {
        TodoData: this.toggleProperty(id, TodoData, 'important')
      }
    })
}

onToggleDone=(id)=>{
  this.setState(({TodoData})=>{
    return {
      TodoData: this.toggleProperty(id, TodoData, 'done')
    }
  })
}

createLabel(label){
  return {
      label,
      important: false, 
      done: false,
      id:this.newId++
    }
  }

onAddTusk=(text)=>{
  this.setState(({TodoData})=>{
    return {
      TodoData:[
        ...TodoData,
        this.createLabel(text)
      ]
    }
  })
}

filterTusk=(items, filter)=>{
  switch(filter) {
    case 'all':
      return items;
     
    case 'active':
        return items.filter(item=>!item.done);
      
    case 'done':
        return items.filter(item=>item.done);
      default:
      return items;
     
  }
}

search=(items, term)=>{
  if(!term){
    return items
  }
  return items.filter(el=>el.label.toLowerCase().indexOf(term.toLowerCase())>-1);
}

onSearchChange=(term)=>{
  this.setState({term})
}

onFilterButtonChange=(newFilter)=>{
  this.setState({filterButton:newFilter})
}

    render() {
      const {TodoData, term, filterButton}=this.state;
      const visibleItems = this.filterTusk(this.search(TodoData, term), filterButton)

      const doneCount=this.state.TodoData.filter((el)=>el.done).length;
      const toDo = this.state.TodoData.length-doneCount;
      
      return (
      <div className = 'todo-app'>
        <AppHeader done={doneCount} toDo={toDo}/>
         <div className='top-panel d-flex'> 
            <SearhPanel onSearchChange={this.onSearchChange}/>
            <ItemStatusFilter filterButton={filterButton} onFilterButtonChange={this.onFilterButtonChange}/>
         </div>
       
        <TodoList onToggleDone={this.onToggleDone}  onToggleImportant={this.onToggleImportant}
        todos={visibleItems} deleteLabel={this.deleteLabel}/>
        <AddTusk onAddTusk={this.onAddTusk}/>
      </div>
    )
  }
} 

 



export default App;

import { useState } from 'react';

export default function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const[quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!description) return;
      
      const newItem = {description, quantity, packed: false, id: Date.now()};
      console.log(newItem);
      onAddItems(newItem);    
      
      setDescription("");
      setQuantity(1);
    }
  
    return(
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What Do You Need For Your 😍 Trip?</h3>
        <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
         {Array.from({length: 20}, (_, i) => i + 1)
         .map(num=><option value={num} key={num}>
            {num}
          </option>)}
        </select>
        <input type='text' 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          placeholder='Enter Your Items..'/>
  
        <button>Add</button>
      </form>
    )
  }
  
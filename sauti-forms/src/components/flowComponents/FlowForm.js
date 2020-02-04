import React, { useState } from "react";

const FlowForm = (props) => {

    const [menu, setMenu] = useState({
        id: "",
        menuItem: "",
        itemContent: ""
    });

    const handleChanges = e => {
        setMenu({ ...menu, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMenuItem(menu);
        console.log('this is menu', menu);
        setMenu({ 
            menuItem: "", 
            itemContent: ""
         });
      };


    return (
        <form onSubmit={ submitForm }>
            <label htmlFor='menu-item'>Menu Item</label>
            <input
                id="menu-item"
                type="text"
                name="menuItem"
                onChange={handleChanges}
                placeholder="Menu Item"
            />
            <label htmlFor='item-content'>Item Content</label>
            <input
                id="item-content"
                type="text"
                name="itemContent"
                onChange={handleChanges}
                placeholder="Item Content"
            />

            <button type="submit">Add Note</button>
        </form>
    )
}

export default FlowForm;
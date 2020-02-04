import React, { useState } from "react";

const FlowForm = (props) => {

    const [menu, setMenu] = setState({
        menuItem: "",
        itemContent: ""
    });

    const handleChanges = e => {
        setMenu({ ...menu, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewItem(note);
        setMenu({ menuItem: "", itemContent: "" });
      };


    return (
        <form>
            <label htmlFor='menu-item'>Menu Item</label>
            <input
                id="menu-item"
                type="text"
                name="menu-item"
                onChange={handleChanges}
                placeholder="Menu Item"
            />
            <label htmlFor='item-content'>Item Content</label>
            <input
                id="item-content"
                type="textarea"
                name="menu-item"
                onChange={handleChanges}
                placeholder="Item Content"
            />

            <button type="submit">Add Note</button>
        </form>
    )
}

export default FlowForm;
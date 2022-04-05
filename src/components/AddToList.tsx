import React, {useState} from "react";
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ( {people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !input.name || 
            !input.age  || 
            !input.img 
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age:  parseInt(input.age),
                url:  input.img,
                note: input.note
            }
        ])

        // clear
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                name="name"
                type="text"
                placeholder="Name" 
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
            />
            <input
                name="age"
                type="text"
                placeholder="Age" 
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
            />
            <input
                name="img"
                type="text"
                placeholder="Image Url" 
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
            />
            <textarea
                name="note"
                placeholder="Notes" 
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
            />
            <button 
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )

}

export default AddToList;
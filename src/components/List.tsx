import React from "react";
import { IState as IProps } from "../App"

// FC- functional component
// <IProps>- props of type IProps
const List: React.FC<IProps> = ({people}) => {
// : JSX.Element[]- return an array of JSX Element
  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return ( <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url}></img>
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p  className="List-note"> {person.note}</p>
      </li>
      )
    })
  }
    return (
        <ul>
          {renderList()}
        </ul>
    )
}

export default List
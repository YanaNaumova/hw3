import { useState } from "react";
import styles from "./styles.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);

  function deleteStuden(index) {
    setPeople((prevItems) => prevItems.filter((item, ind) => ind !== index));
  }

  const { container, listContainer, listItemContainer, deleteBtn } = styles;

  return (
    <div className={container}>
      <ul className={listContainer}>
        {people.map((person, index) => {
          return (
            <li key={index} className={listItemContainer}>
              <span>
                Имя: {person.name} Возраст: {person.age}
              </span>
              <button onClick={() => deleteStuden(index)} className={deleteBtn}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;

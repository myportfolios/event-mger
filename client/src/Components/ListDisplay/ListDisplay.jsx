import React, { useState, useEffect } from "react";
/**
 *
 * @param {filter} String  - to use to filter the initial list. it's gotten from userInput
 * @param {list} Array - list to be filtered
 * @param {getUserSelection} - Funtion that returns a filtered list
 */

// function ListDisplay({ filter = "", list = [], getUserSelection }) {
//   const [filteredList, setFilteredList] = useState(list);
//   const [selectedItem, setSelectedItem] = useState("");
//   const [showList, setShowList] = useState(true);

//   useEffect(() => {
//     //filter function
//     const filterList = (list = [], filter = "") => {
//       // console.log("filter", filter);
//       return list?.map((item) => {
//         if (item?.toLowerCase().includes(filter)) {
//           return item;
//         }
//       });
//     };
//     //invoke filter fn
//     const updatedList = filterList(list, filter);
//     // console.log("updated list", updatedList);
//     setFilteredList(updatedList);
//   }, [filter]);

//   const handleUserInput = (e, item) => {
//     console.log("filter", filter);
//     console.log("selectedItem", selectedItem);
//     // !showList && setShowList(true);
//     setSelectedItem(item);
//     // setShowList(false);
//   };
//   useEffect(() => {
//     if (getUserSelection) getUserSelection(selectedItem);
//   }, [selectedItem]);

//   return (
//     filter &&
//     !selectedItem && (
//       <ul>
//         {filteredList?.map((item, i) => {
//           return (
//             <li
//               key={i}
//               onClick={(e) => {
//                 handleUserInput(e, item);
//                 // setShowList(false);
//               }}
//             >
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     )
//   );
// }

const filterList = (list, filter = "") => {
  //map tru list
  const filteredList = list?.map((item) => {
    if (item?.toLowerCase()?.includes(filter)) {
      return item;
    }
  });
  return filteredList;
};
const ListDisplay = ({ list, filter, getUserSelection }) => {
  const [filtered, setFiltered] = useState([...list]);
  useEffect(() => {
    setFiltered(filterList(list, filter));
  }, [filter, list]);
  const newList = filtered?.map((item) => {
    return (
      <ul key={item}>
        {item && <li onClick={() => getUserSelection(item)}>{item}</li>}
      </ul>
    );
  });
  return newList;
};
export default ListDisplay;

/**
 * 
function ListDisplay({ filter = "", list = [], getUserSelection }) {
  const [filteredList, setFilteredList] = useState(list);
  useEffect(() => {
    //filter function
    const filterList = (list = [], filter = "") => {
      console.log("filter", filter);
      return list?.map((item) => {
        if (item?.toLowerCase().includes(filter)) {
          console.log("item", item.toLowerCase());
          return item;
        }
      });
    };
    //invoke filter fn
    const updatedList = filterList(list, filter);
    // console.log("updated list", updatedList);
    setFilteredList(updatedList);
  }, [filter]);
  console.log("filteredList", filteredList);
  return (
    <ul>
      {filteredList?.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
}

export default ListDisplay;
 */

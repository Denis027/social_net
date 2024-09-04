import { useState } from "react";
import style from "./Paginator.module.css";

const Paginator = (props) => {
  const portionSize = 15;
  const pageSize = 10;

  let pagesCount = Math.ceil(props.totalItemCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(props.currentPage / portionSize)
  );
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rirhtPortionNumber = portionNumber * portionSize;

  return (
    <div className={style.usersListWrapper}>
      {portionNumber > 1 && (
        <button
          className={style.usersListItemWrapper}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => {
          return p >= leftPortionNumber && p <= rirhtPortionNumber;
        })
        .map((p) => {
          return (
            <span
              key={p}
              onClick={() => {
                props.onPageChange(p);
              }}
              className={
                p === props.currentPage
                  ? style.usersListCurrentItem
                  : style.usersListItemWrapper
              }
            >
              {p}
            </span>
          );
        })}
      {portionsCount > portionNumber && (
        <button
          className={style.usersListItemWrapper}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;

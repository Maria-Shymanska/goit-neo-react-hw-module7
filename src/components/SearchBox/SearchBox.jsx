import { useId } from "react";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const inputId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
        <input
          id={inputId}
          className={css.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

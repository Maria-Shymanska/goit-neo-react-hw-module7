import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css["contact-list"]}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}

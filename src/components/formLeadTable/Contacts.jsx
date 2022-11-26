import { useDispatch } from "react-redux";
import { removeContacts } from "../formCreateLead/contactsSlice";

const Contacts = ({ id, contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      {contacts}
      <span className="delete" onClick={() => dispatch(removeContacts({ id }))}>
        &times;
      </span>
    </>
  );
};

export { Contacts };

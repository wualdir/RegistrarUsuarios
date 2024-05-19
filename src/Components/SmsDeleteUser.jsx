import React from "react";
import "../Components/SmsDeleteUser.css";
import { useForm } from "react-hook-form";

const SmsDeleteUser = ({
  deleteUser,
  FormisDelete,
  setFormisDelete,
  userSelect,
  setuserSelect,
  setFormisconfirmacion,
}) => {
  const { reset } = useForm();

  const handleexit = () => {
    setFormisDelete(false);

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });

    setuserSelect();
  };

  const submit = () => {
    deleteUser(userSelect?.id);
    setFormisDelete(false);

    setFormisconfirmacion(true);
  };

  return (
    <div className={`SmsDelete ${FormisDelete || "close"}`}>
      <article className="form">
        <p>
          eliminar a : {userSelect?.first_name} {userSelect?.last_name}{" "}
        </p>
        <span onClick={handleexit} className="form__exit">
          X
        </span>
        <footer className="user__footer">
          <button onClick={submit} className="user__Btn user__si">
            Si
          </button>
          <button onClick={handleexit} className="user__Btn user__no">
            No
          </button>
        </footer>
      </article>
    </div>
  );
};

export default SmsDeleteUser;

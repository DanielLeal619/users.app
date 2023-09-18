import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/FormUsers.css"

const FormUsers = ({ createUser, infoUpdate, updateUser, setInfoUpdate, style, modalWindow2, setStyle }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])

  const submit = (data) => {
    if (infoUpdate) {
      // Update
      updateUser("/users", infoUpdate.id, data)
      setInfoUpdate()
    } else {
      // Create.
      createUser("/users", data)
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    })
  }

  return (
    <div className={`${style} format`}>
      <form onSubmit={handleSubmit(submit)}>
        <div className="header__form">
          <h2 className="header__title">Create new user</h2>
          <button className="header__btn" onClick={modalWindow2}>X</button>
        </div>
        <div className="form__body">
          <div className="format__element">
            <label htmlFor="email">Email</label>
            <br />
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="format__element">
            <label htmlFor="password">Password</label>
            <br />
            <input {...register("password")} type="password" id="password" />
          </div>
          <div className="format__element">
            <label htmlFor="first_name">First name</label>
            <br />
            <input {...register("first_name")} type="text" id="first_name" />
          </div>
          <div className="format__element">
            <label htmlFor="last_name">Last name</label>
            <br />
            <input {...register("last_name")} type="text" id="last_name" />
          </div>
          <div className="format__element">
            <label htmlFor="birthday">Birthday</label>
            <br />
            <input {...register("birthday")} type="date" id="birthday" />
          </div>
          <button className="btn__format">{infoUpdate ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  )
}

export default FormUsers
const UserCard = ({ user, deleteUser, setInfoUpdate, modalWindow}) => {

    const handleDelete = () => {
        deleteUser("/users", user.id)

    }

    const handleEdit = () => {
        setInfoUpdate(user)
        modalWindow()
    }

    return (
        <article className="user__card">
            <h3 className="user__name">{user.first_name} {user.last_name}</h3>
            <ul className="user__list">
                <li className="user__item"><span className="user__element">Email: </span><span  className="user__description">{user.email}</span></li>
                <li className="user__item"><span className="user__element">Birthday: </span><span className="user__description">{user.birthday}</span></li>                
            </ul>
            <div className="btns">
            <button className="btn__delete" onClick={handleDelete}>❌</button>
            <button className="btn__edit" onClick={handleEdit}>🖋️</button>
            </div>
        </article>
    )
}

export default UserCard
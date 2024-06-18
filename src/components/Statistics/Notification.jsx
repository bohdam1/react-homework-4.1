import css from "./statistic.module.css"

export const Notification = ({ message}) =>{
    return(
        <p className={css.notification}>{message}</p>
    )
}
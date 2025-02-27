import MyButton from "../myButtons2/MyButton2";
import MyInput from "../myInput/MyInput";
import "./LoginForm.css"

function LoginForm() {
    return (
        <>
            <h4>Homework03</h4>
            <h2>Вход в aккаунт</h2>
            <MyInput
                name="username"
                type="text"
                placeholder="Введите имя пользователя"
                label="Имя пользователя  "
            />
            <MyInput
                name="email"
                type="email"
                placeholder="Введите вашу электронную почту"
                label="Электронная почта  "
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Введите пароль"
                label="Пароль  "
            />
            <MyButton type="submit">Войти</MyButton>
        </>
    )
}

export default LoginForm;
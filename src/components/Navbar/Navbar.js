import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div>
            <ul>
            <li>{t("navbar.navbar_home")}</li>
            <li>{t("navbar.navbar_about")}</li>
            </ul>
            <button onClick = {() => i18n.changeLanguage("es")}>ES</button>
            <button onClick = {() => i18n.changeLanguage("en")}>EN</button>
            <button onClick = {() => i18n.changeLanguage("jp")}>JP</button>
        </div>
    )
}

export default Navbar

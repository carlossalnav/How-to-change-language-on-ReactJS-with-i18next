import React from 'react'
import { useTranslation } from 'react-i18next'
import { HomeBg } from './HomeElements'

const Home = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <HomeBg>
            <h1>{t("home.home_title")}</h1>
            <p>{t("home.home_subtitle")}</p>
        </HomeBg>
    )
}

export default Home

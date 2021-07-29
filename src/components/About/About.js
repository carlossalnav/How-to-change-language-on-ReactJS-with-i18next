import React from 'react'
import { useTranslation } from 'react-i18next'
import { AboutBg } from './AboutElements'

const About = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <AboutBg>
            <h1>{t("about.about_title")}</h1>
            <p>{t("about.about_subtitle")}</p>
        </AboutBg>
    )
}

export default About

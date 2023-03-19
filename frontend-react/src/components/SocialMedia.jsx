import React from 'react'
import { BsLinkedin, BsDiscord, BsGithub } from "react-icons/bs"
import { FaTelegram } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://www.linkedin.com/in/danil-ilukhin-5babaa26a">
            <BsLinkedin />
        </a>
        <a href="https://t.me/durabill">
            <FaTelegram />
        </a>
        <a href="discordapp.com/users/429871727200436236">
            <BsDiscord />
        </a>
        <a href="https://github.com/tuagkcuf">
            <BsGithub />
        </a>
    </div>
  )
}

export default SocialMedia
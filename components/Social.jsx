import Link from "next/link"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
    { icon:<FaGithub/>, path:"https://github.com/Cardandom"},
    { icon:<FaLinkedinIn/>, path:"https://linkedin.com/in/carlos-daniel-dominguez-95b211188"}
]


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>{item.icon}</Link>
            )
        })}
    </div>
  )
}

export default Social
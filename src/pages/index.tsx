import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img src="https://raw.githubusercontent.com/AlbertSanSun/notion-blog/master/Demo.jpg" width="60%" alt="page top" />
      <h1>SanSun Website</h1>
      <h2></h2>

      {/* <Features /> */}

      <div className="explanation">
        <p>
          To know about the site go to its Github Repository.
        </p>
        
         <p>
          This site owner is me Sanjay but I would like you to call me SanSun or AlbertSanSun on the Internet.(Unless ur my Relatives or Friends)
          I am currently in grade 8th and currently learning python, JS, HTML. I love Maths and Science and 
          I'm really good at them. I have created many Youtube Channels (and deleted a lot of them, because I couldn't manage
          them. But I am sure I will manage the last one.) Most of them where based on Maths and Science, but this one will be special...
        </p>
      </div>
    </div>
  </>
)

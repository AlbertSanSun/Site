import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    
      />
      <h1>Hey Guys!!</h1>
      <h2>
        This is me{' '}
        <ExtLink>
          href="https://scratch.mit.edu/users/-SanSun-/"
         SanSun
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
          About the Site:
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>.
          It leverages some upcoming features in Next.js like{' '}
          <ExtLink href="https://github.com/vercel/next.js/issues/9524">
            SSG support
          </ExtLink>{' '}
          and{' '}
          <ExtLink href="https://github.com/vercel/next.js/issues/8626">
            built-in CSS support
          </ExtLink>{' '}
          which allow us to achieve all of the benefits listed above including
          blazing fast speeds, great local editing experience, and always being
          available! 
          Link of the Repository which I used to Build the Site is{''}
          <ExtLink href="https://github.com/ijjk/notion-blog">
            Here
          </ExtLink>
        </p>

        <p>
          Now about me.
          My real name is Sanjay, but I would really like you to call me SanSun or AlbertSanSun on the Internet.
          I am currently in grade 8th and currently learning python, JS, HTML. I love Maths and Science and 
          I'm really good at them. I have created many Youtube Channels (and deleted a lot of them, because I couldn't manage
          them. But I am sure I will manage the last one.) Most of them where based on Maths and Science, but this one will be special...{''}
          <ExtLink href="https://github.com/AlbertSanSun">
            Look at my Github Page for more facts and stuff...
          </ExtLink>
          I will upload my videos sometime during April and May, stay tuned. (is the word "tuned" the right word to be used in this sentence?)
          
        </p>
      </div>
  </>
)

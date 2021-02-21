import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'My Github Account Page', link: 'https://github.com/AlbertSanSun/' },
  { label: 'YouTube', link: 'https://www.youtube.com/channel/UC6zat7lWOqSETJmUq2B_Htg/about' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} SanSun Site</title>
        <meta
          name="SanSun site"
          content="The Site of Sanjay or SanSun as he would like you to call."
        />
        <meta name="og:title" content="Sanjay, SanSun, -SanSun-, AlbertSanSun, Albert, S, Joke, Hi" />
        <meta property="og:image" content="https://raw.githubusercontent.com/AlbertSanSun/notion-blog/master/Demo.jpg" />
        <meta name="twitter:site" content="@sansun" />
        <meta name="twitter:card" content="https://raw.githubusercontent.com/AlbertSanSun/notion-blog/master/Demo.jpg" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/AlbertSanSun/notion-blog/master/Demo.jpg" />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

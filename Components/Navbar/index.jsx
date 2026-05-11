import React from 'react'
import style from './nav.module.css'
import Link from 'next/link'

export default function Navbar() {
     return (
    <nav className={style.nav}>
    <ul>
     <li><Link href={'/'}>Home</Link></li>
     <li><Link href={'/about'}>About</Link></li>
     <li><Link href={'/company'}>company</Link></li>
     <li><Link href={'/personal'}>Personal</Link></li>

    </ul>
    </nav>
     )
}

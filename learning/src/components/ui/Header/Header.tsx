"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const Header: React.FC<PropsType> = ({
    ...props
}) => {

    const pathname = usePathname()

    return (
        <header className={styles.root}>
            <div className={styles.logo}>course 1</div>
            <div className={styles.menu}>
                <Link className={pathname == "/website/news" ? styles.active : ""} href="/website/news">News</Link>
                <Link className={pathname == "/website/products" ? styles.active : ""} href="/website/products">Products</Link>
                <Link className={pathname == "/website/contact" ? styles.active : ""} href="/website/contact">Contact</Link>
            </div>
            <div className={styles.sub}><i /><i /><i /></div>
        </header>
    )
};

export default Header


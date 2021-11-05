import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a className={navStyles.logo}>
                        <Image
                            src="/image/logo.png"
                            alt="main logo"
                            width={80}
                            height={80}
                        />
                        </a>
                    </Link>
                </li>
                <li className={navStyles.rightLine}>
                    <Link href="/lookAround">
                        <a>둘러보기</a>
                    </Link>
                </li>
                <li>
                    <Link href="/map">
                        <a>오시는길</a>
                    </Link>
                </li>
                <li>
                    <Link href="/notice">
                        <a>유의사항</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
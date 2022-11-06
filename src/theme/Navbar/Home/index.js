import React from 'react';
import styles from './styles.module.css'
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

export default function Home() {
  const {pathname} = useLocation();
  const isHomepage = pathname === '/';

  return (
    <Link href="/" className={
      `${styles.home} navbar__item navbar__link ${isHomepage && 'navbar__link--active'}`
    }>
      <svg className={styles.homeLogo} width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.97489 0.000530141C8.81585 0.00555257 8.66183 0.062472 8.53627 0.161244L1.42969 5.75946C0.527344 6.47095 0 7.55745 0 8.70421V18.25C0 18.9313 0.567522 19.5005 1.25056 19.5005H6.24944C6.93248 19.5005 7.5 18.9313 7.5 18.25V13.2494C7.5 13.1021 7.60212 13 7.74944 13H10.2506C10.3979 13 10.5 13.1021 10.5 13.2494V18.25C10.5 18.9313 11.0675 19.5005 11.7506 19.5005H16.7494C17.4325 19.5005 18 18.9313 18 18.25V8.70421C18 7.55745 17.4727 6.47095 16.5703 5.75946L9.46373 0.161244C9.32478 0.0507531 9.15234 -0.00616629 8.97489 0.000530141ZM9 1.70477L15.6429 6.93803C16.1853 7.36493 16.5 8.01616 16.5 8.70421V18.0005H12V13.2494C12 12.2918 11.2081 11.5 10.2506 11.5H7.74944C6.79185 11.5 6 12.2918 6 13.2494V18.0005H1.5V8.70421C1.5 8.01616 1.81473 7.36493 2.35714 6.93803L9 1.70477Z" />
      </svg>
    </Link>
  );
}
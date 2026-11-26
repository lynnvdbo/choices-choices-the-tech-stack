import styles from "@/styles/FooterNav.module.css";

export default function FooterNav() {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-top"]}>
                <a href="/"><img className={styles.logosron} src="/SRON_Academy_OnSpaceBlue-1024x422.png" alt="logo of sron academy" width="230" height="100"/></a>

                <address className="visually-hidden">
                    Niels Bohrweg 4<br/>
                    2333 CA Leiden<br/>
                    The Netherlands<br/>
                    31 (0)88 777 56 00<br/>
                </address>

                <address className="visually-hidden">
                    Landleven 12<br/>
                    9747 AD Groningen<br/>
                    The Netherlands<br/>
                    31 (0)50 363 40 74<br/>
                </address>

                <a href="https://www.sron.nl/"><img className={styles["white-logo-sron"]} src="/sron-full-white-logo.webp" alt="full white logo of sron" width="200" height="45"/></a>
            </div>

            <nav className={styles["footer-nav"]}>
                <ul className={styles["info-footer"]}>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="https://www.nwo-i.nl/en/privacy-policy/">Privacy Policy</a></li>
                </ul>

                <p>Follow nebula</p>

                <ul className={styles["social-icons"]}>
                    <li><a href="https://web-cdn.bsky.app/profile/did:plc:xskzoixc54ebxryzak45u7ra"><img src="/Social_Icon_BlueSky.png"  alt="logo of bluesky" width="25" height="25"/></a></li>
                    <li><a href="https://www.instagram.com/sron_space/"><img src="/Social_Icon_Instagram.png" alt="logo of instagram" width="25" height="25"/></a></li>
                    <li><a href="https://www.linkedin.com/company/nebula-xplorer"><img src="/Social_Icon_LinkedIn.png" alt="logo of linkedin" width="25" height="25"/></a></li>
                </ul>  
            </nav>

            <p className={styles.quote}>Ad Astra, Ingenio Iuventutis.</p>
        </footer>
    )
}
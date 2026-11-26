import LocationCard from "@/components/LocationCard";
import styles from "@/styles/FooterNav.module.css";

export default function Footer() {
    return (
        <ul className={styles.locations}>
            <LocationCard
                image="/SRON-Leiden-e1742232793581.webp"
                alt="SRON locatie Leiden"
                city="Leiden"
                street="Sorbonnelaan 2"
                postalCode="3584 CA Utrecht"
                phone="+31 88 777 00 00"
            />

            <LocationCard
                image="/SRON-Groningen.webp"
                alt="SRON locatie Groningen"
                city="Groningen"
                street="Landleven 12"
                postalCode="9747 AD Groningen"
                phone="+31 50 363 00 00"
            />
        </ul>
    )
}
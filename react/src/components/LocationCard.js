import styles from "@/styles/LocationCard.module.css";

export default function LocationCard({
  image,
  alt,
  city,
  street,
  postalCode,
  phone,
}) {
  return (
    <li className={styles.location}>
      <img src={image} alt={alt} loading="lazy" />

      <h4 className={`${styles.label} visually-hidden`}>
        {city}
      </h4>

      <address className={styles.address}>
        {street}
        <br />
        {postalCode}
        <br />
        The Netherlands
        <br />
        <a href={`tel:${phone}`}>{phone}</a>
      </address>
    </li>
  );
}

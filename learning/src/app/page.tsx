import styles from "./home.module.scss"

export default function HomePage() {
    return (
        <div className={styles.root}>
            <section className={styles.banner}>
                <div className={styles.slogan}>Less is more</div>
                <img src="/images/03.png" />
            </section>
            <section>New Products</section>
            <section>New Products</section>
        </div>
    )

};

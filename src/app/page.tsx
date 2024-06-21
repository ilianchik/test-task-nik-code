import CitiesList from "@/components/citiesList/CitiesList";
import styles from "./page.module.scss";
import { getCities } from "@/lib/api";

export default async function Home() {
  const cities = await getCities();

  return (
    <div className={styles.container}>
      <CitiesList cities={cities} />
    </div>
  );
}

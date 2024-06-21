import styles from "./page.module.scss";
import CityCard from "@/components/cityCard/CityCard";
import { getCities } from "@/lib/api";
import { city } from "@/types/types";

export default async function Home() {
  const cities = await getCities();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {cities?.map((city: city) => (
          <li className={styles.listElement} key={city.id}>
            <CityCard city={city} />
          </li>
        ))}
      </ul>
    </div>
  );
}

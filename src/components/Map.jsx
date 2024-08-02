import { useSearchParams } from "../../hooks/useSearchParams";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return <div className={styles.mapContainer}>Map</div>;
}

export default Map;

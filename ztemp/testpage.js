import dynamic from "next/dynamic";
import SpinnerLoader from "../components/SpinnerLoader";
import styles from "../styles/test.module.scss";

const DynamicComponent = dynamic(() => import("../components/SceneLoader"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});

const testpage = () => {
  return (
    <>
      <div className={styles.modelContainer}>
        <DynamicComponent />
      </div>
    </>
  );
};

export default testpage;

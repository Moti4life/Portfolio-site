import dynamic from "next/dynamic";
import SpinnerLoader from "./SpinnerLoader";

import styles from "../styles/DynamicLoader.module.css"

const DynamicComponent = dynamic(
    () => import('../components/SceneLoader'),
    { ssr: false, loading: () => <SpinnerLoader /> }
)

const DynamicLoader = () => {
    return (
        <>
            
            <div className={styles.scene}>
                <DynamicComponent />
            </div>
        </>
    );
}

export default DynamicLoader;
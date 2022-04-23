import styles from "../styles/IntroOverlay.module.css";

const IntroOverlay = () => {
  return (
    <>
      <div className={`bgDiv ${styles.bgDiv}`}>
        <div className={`brandPanels ${styles.brandPanels}`}>
          <div className={`letterContainer ${styles.letterContainer}`}>
            <h1 className={`letterPanel ${styles.letters}`}>MW</h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              oo
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              tr
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              ik
            </h1>
            <h1 className={`letterPanel letterPanelOther ${styles.letters}`}>
              .s
            </h1>
          </div>
        </div>

        <div className={`infoPanel ${styles.infoPanel}`}>
          <div className={`infoContainer ${styles.infoContainer}`}>
            <h2 className={`info ${styles.info}`}>Moti.</h2>
          </div>
          <div className={`infoContainer ${styles.infoContainer}`}>
            <h2 className={`info ${styles.info}`}>Web developer</h2>
          </div>
        </div>

        <div className={`wipePanel ${styles.wipePanel}`}></div>
      </div>
    </>
  );
};

export default IntroOverlay;

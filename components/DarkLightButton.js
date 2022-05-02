import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import styles from "../styles/DarkLightButton.module.scss";

const DarkLightButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeSwitch = useColorModeValue("#cf9ff7", "#ffc400");

  return (
    <div className={styles.darkLightBtnPosition}>
        <div onClick={toggleColorMode} className={styles.buttonContainer}>
          <div style={{backgroundColor: colorModeSwitch}} className={styles.buttonBg}></div>
          <div style={{color: "grey"}} className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faCircleHalfStroke} size="lg" />
          </div>
        </div>
    </div>
  );
};

export default DarkLightButton;

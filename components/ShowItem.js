import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

import Image from "next/image";

const ShowItem = ({ imgUrl, imgWidth, imgHeight, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Menu placement="right" isOpen={isOpen} offset={[ -140 , -200 ]} /* offset={[ 150 , -120 ]} */>
        {/* <Box
          onMouseEnter={() => onOpen()}
          onMouseLeave={() => onClose()}
          onTouchStart={() => onOpen()}
          onTouchEnd={() => onClose()}
        >
          {title}
        </Box> */}
        <MenuButton
          onMouseEnter={() => onOpen()}
          onMouseLeave={() => onClose()}
          onTouchStart={() => onOpen()}
          onTouchEnd={() => onClose()}
        >
          {children}
        </MenuButton>
        <MenuList
          shadow={"none"}
          border={"none"}
          backgroundColor={"transparent"}
          width={imgWidth}
          height={imgHeight}
        >
          <Image src={imgUrl} layout='fill' objectFit='contain' />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ShowItem;

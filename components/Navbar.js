import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const ulRef = useRef();
  const menuRef = useRef();
  const [isOpened, setOpened] = useState(false);
  return (
    <nav className="primary-nav container">
      <div className="logo">
        <Link href={"/"}>
          <Box display={"flex"} gap={"4"}>
            <img className="logo-image" src="/logo.jpg" alt="Menu" />
            <Text fontWeight={"bold"}>
              An interdisciplinary Accounting Hackathon
            </Text>
          </Box>
        </Link>
      </div>

      <ul
        className="primary-navigation"
        id="primary-navigation"
        role="list"
        data-open="false"
        ref={ulRef}
      >
        <li>
          <Link href="/">
            <Text _hover={{
              color: "purple.400"
            }} >About</Text>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <Text _hover={{
              color: "purple.400"
            }} >Events</Text></Link>
        </li>
        <li>
          <Link href="/team">
            <Text _hover={{
              color: "purple.400"
            }} >Team</Text></Link>
        </li>
        <li>
          <Link href="/contact">
            <Text _hover={{
              color: "purple.400"
            }} >Contact</Text></Link>
        </li>
      </ul>
      <button
        className="menu-icon"
        id="menu"
        ref={menuRef}
        data-open="false"
        onClick={() => {
          const value = ulRef.current.dataset.open;
          if (value == "true") {
            ulRef.current.dataset.open = "false";
            menuRef.current.dataset.open = "false";
            setOpened(false);
          } else {
            ulRef.current.dataset.open = "true";
            menuRef.current.dataset.open = "true";
            setOpened(true);
          }
        }}
      >
        {!isOpened && (
          <Image
            src={"/icon-menu.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Opening the menu"
          ></Image>
        )}
        {isOpened && (
          <Image
            src={"/icon-menu-close.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Closing the menu"
          ></Image>
        )}
      </button>
    </nav>
  );
}

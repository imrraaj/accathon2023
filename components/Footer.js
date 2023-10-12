import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="logo">
        <img className="logo-image" src="/logo.jpg" alt="Menu" />
      </div>

      <div>
        <ul className="secondary-navigation">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="socials-list">
          <li>
            <Link href={"mailto:gopikajuneja@nirmauni.ac.in"} target="_blank">
              <Text _hover={{ color: "purple.400" }}>
                <MdEmail />
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="logo">
        <Link href={"/"}>
          <img className="logo-image" src="/logo.jpg" alt="Menu" />
        </Link>
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
          <li>
            <Link href={"https://www.instagram.com/nirma_commerce/"} target="_blank">
              <Text _hover={{ color: "purple.400" }}>
                <FaInstagram />
              </Text>
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/NirmaUniCom/"} target="_blank">
              <Text _hover={{ color: "purple.400" }}>
                <FaFacebook />
              </Text>
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/company/institute-of-commerce-nirma-university/"} target="_blank">
              <Text _hover={{ color: "purple.400" }}>
                <FaLinkedin />
              </Text>
            </Link>
          </li>
          <li>
            <Link href={"https://youtube.com/@icnuofficial7653?si=Cm9oaSpkSwMhqCzz"} target="_blank">
              <Text _hover={{ color: "purple.400" }}>
                <FaYoutube />
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

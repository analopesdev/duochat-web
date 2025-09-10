import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import DuochatLogo from "../../../assets/images/duochat-logo.svg";

export function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <img src={DuochatLogo} alt="Duochat Logo" width={150} height={150} />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

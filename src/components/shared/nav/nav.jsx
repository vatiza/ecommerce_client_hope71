import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { CartIcon } from "../../../assets/icons/CartIcon ";
import { SearchIcon } from "../../../assets/icons/search_icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/team",
      label: "Team",
    },

    {
      href: "/about",
      label: "About",
    },

    {
      href: "/features",
      label: "Features",
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent>
        {/* TODO: search the  product  */}
        <Input
          type="email"
          className="max-w-xs"
          variant="bordered"
          placeholder="Search Item"
          alt="hope71 search products"
          startContent={
            <SearchIcon className=" text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
      </NavbarContent>
      <div className="hidden sm:flex p-2    ">
        <NavbarContent justify="center" className="gap-4">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? "show active" : "")}
              >
                {item.label}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
      <NavbarContent justify="end">
        <Dropdown placement=" ">
          <DropdownTrigger>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Badge color="danger" content={20} shape="circle">
                  <CartIcon size={30} />
                </Badge>
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile">My Profile</DropdownItem>

            <DropdownItem key="settings">Check Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? "show active" : "")}
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

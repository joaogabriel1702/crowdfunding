// Import necessary modules and components
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Button from "../Button";

type NavBarProps = {
    variant?: "primary" | "secondary";
    icon?: string;
    iconsActions?: string[];
  };

const NavBar = ({ variant = "primary", iconsActions }: NavBarProps) => (
  <div className="-bg--black-color text-white p-4">
    <div className="flex justify-between items-center">
      {variant === "secondary" ? (
        <>
          <div className="flex gap-10">
            {iconsActions?.map((action, index) => (
              <Icon key={index} icon={action} width="24px" />
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="secondary" className="text-white rounded-lg" iconRight="uil:user">
                Login
              </Button>
            </Link>
            <Link href="/problems/create">
              <Button variant="primary" className="rounded-lg" iconRight="uil:plus">
                Cadastrar nova ação
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <h1 className="text-xl font-semibold">
          <Icon icon="uil:home-alt" width="32px" />
        </h1>
      )}
    </div>
  </div>
);

export default NavBar;

import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import Logo from "/icon_300x300.png";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );


  const platform = typeof window !== 'undefined' ? navigator.userAgent.toUpperCase() : 'server';
  console.log(platform);


  return (
    <HeroUINavbar maxWidth="xl" position="sticky" shouldHideOnScroll >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img src={Logo} alt="Rud1" width={32} />
            <p className="font-bold text-inherit">Rud1</p>
          </Link>
        </NavbarBrand>
        {/* <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div> */}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={'https://dashboard.rud1.es'}
            // startContent={<HeartFilledIcon className="text-danger" />}
            variant="shadow"
          >
            Panel de administración
          </Button>
          <Button
            as={Link}
            className="text-sm font-normal"
            disabled={!platform.includes('WINDOWS')}
            isDisabled={!platform.includes('WINDOWS')}
            href={platform.includes('WINDOWS') ? 'https://zr8cjf8g0kr80q6m.public.blob.vercel-storage.com/Rud1Setup-0.1-H2RIxf1vCEerQujwAeIIM441c8qZar.exe' : '#'}
            // startContent={<HeartFilledIcon className="text-danger" />}
            variant="shadow"
            color={platform.includes('WINDOWS') ? "secondary" : 'warning'}
            download={platform.includes('WINDOWS')}
          >
            {(platform.includes('ANDROID') || platform.includes('IPHONE')) ? "Nuestro cliente solo esta disponible en equipos de escritorio" : (platform.includes('MAC') || platform.includes('LINUX')) ? "Nuestro cliente solo esta disponible para sistemas Windows" : "Descargar Aplicación"}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col items-center justify-center gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href={item.href}
                size="lg"
                download={item?.download ?? false}

              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar >
  );
};

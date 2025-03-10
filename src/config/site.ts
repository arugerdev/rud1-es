export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rud1",
  description: "Conexiones remotas rapidas y seguras con servicios VPN",
  navItems: [
    {
      label: "Panel de administración",
      href: "https://dashboard.rud1.es",
    },
    {
      label: "Descargar Aplicación",
      href: "https://zr8cjf8g0kr80q6m.public.blob.vercel-storage.com/Rud1Setup-0.0-RSfrwrbChW7QVRdf3wF9HQonXwfwAi.exe",
    }
  ],
  navMenuItems: [
    {
      label: "Panel de administración",
      href: "https://dashboard.rud1.es",
      download: false,
    },
    {
      label: "Descargar Aplicación",
      href: "https://zr8cjf8g0kr80q6m.public.blob.vercel-storage.com/Rud1Setup-0.0-RSfrwrbChW7QVRdf3wF9HQonXwfwAi.exe",
      download: true,
    }
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    docs: "https://heroui.com",
  },
};

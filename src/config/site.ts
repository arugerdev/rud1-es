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
      href: "https://zr8cjf8g0kr80q6m.public.blob.vercel-storage.com/Rud1Setup-0.1-H2RIxf1vCEerQujwAeIIM441c8qZar.exe",
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
      href: "https://zr8cjf8g0kr80q6m.public.blob.vercel-storage.com/Rud1Setup-0.1-H2RIxf1vCEerQujwAeIIM441c8qZar.exe",
      download: true,
    }
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    docs: "https://heroui.com",
  },
};

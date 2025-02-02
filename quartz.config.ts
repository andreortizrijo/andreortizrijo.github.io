import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "💻 My Journey",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "andreortizrijo.github.io/myjourney/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: { // Default Light Theme
          light: "#faf8f8", // Background
          lightgray: "#e5e5e5", // Search bar, Lines
          gray: "#b8b8b8", // Reading time text
          darkgray: "#4e4e4e", // Text, icons
          dark: "#2b2b2b", // Titles, Table of contents, Index
          secondary: "#284b63", // Tags, Urls, Links, Website Header
          tertiary: "#84a59d", // Graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // Tags background
          textHighlight: "#fff23688", // IDK
        },
        // lightMode: { // Default Light Theme
        //   light: "#faf8f8", // Background
        //   lightgray: "#e5e5e5", // Search bar, Lines
        //   gray: "#b8b8b8", // Reading time text
        //   darkgray: "#4e4e4e", // Text, icons
        //   dark: "#2b2b2b", // Titles, Table of contents, Index
        //   secondary: "#284b63", // Tags, Urls, Links, Website Header
        //   tertiary: "#84a59d", // Graph nodes
        //   highlight: "rgba(143, 159, 169, 0.15)", // Tags background
        //   textHighlight: "#fff23688", // IDK
        // },
        darkMode: { // DarkBlue Theme
          light: "#2A3033", // Background
          lightgray: "rgba(82, 109, 130, 1)", // Search bar, Lines
          gray: "rgba(82, 109, 130, 1)", // Reading time text
          darkgray: "rgba(221, 230, 237, 1)", // Text, icons
          dark: "rgba(221, 230, 237, 1)", // Titles, Table of contents, Index
          secondary: "rgba(157, 178, 191, 1)", // Tags, Urls, Links, Website Header
          tertiary: "rgba(82, 109, 130, 1)", // Graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // Tags background
          textHighlight: "#b3aa0288", // IDK
        },
        // darkMode: { // Default Dark Theme
        //   light: "#161618",
        //   lightgray: "#393639",
        //   gray: "#646464",
        //   darkgray: "#d4d4d4",
        //   dark: "#ebebec",
        //   secondary: "#7b97aa",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#b3aa0288",
        // },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

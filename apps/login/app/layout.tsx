import "#/styles/globals.scss";
// include styles from the ui package
import "@zitadel/react/styles.css";
import { AddressBar } from "#/ui/AddressBar";
import { GlobalNav } from "#/ui/GlobalNav";
import { Lato } from "next/font/google";
import Byline from "#/ui/Byline";
import { LayoutProviders } from "#/ui/LayoutProviders";
import { Analytics } from "@vercel/analytics/react";
import ThemeWrapper from "#/ui/ThemeWrapper";
import { getBranding } from "#/lib/zitadel";
import { server } from "../lib/zitadel";
import { LabelPolicyColors } from "#/utils/colors";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const branding = await getBranding(server);
  let partialPolicy: LabelPolicyColors | undefined;
  if (branding) {
    partialPolicy = {
      backgroundColor: branding?.backgroundColor,
      backgroundColorDark: branding?.backgroundColorDark,
      primaryColor: branding?.primaryColor,
      primaryColorDark: branding?.primaryColorDark,
      warnColor: branding?.warnColor,
      warnColorDark: branding?.warnColorDark,
      fontColor: branding?.fontColor,
      fontColorDark: branding?.fontColorDark,
    };
  }
  return (
    <html lang="en" className={`${lato.className}`} suppressHydrationWarning>
      <head />
      <body>
        <ThemeWrapper branding={partialPolicy}>
          <LayoutProviders>
            <div className="h-screen overflow-y-scroll bg-background-light-600 dark:bg-background-dark-600  bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')]">
              <GlobalNav />

              <div className="lg:pl-72 pb-4">
                <div className="mx-auto max-w-[440px] space-y-8 pt-20 lg:py-8">
                  <div className="rounded-lg bg-vc-border-gradient dark:bg-dark-vc-border-gradient p-px shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="rounded-lg bg-background-light-400 dark:bg-background-dark-500">
                      <AddressBar />
                    </div>
                  </div>

                  <div className="rounded-lg bg-vc-border-gradient dark:bg-dark-vc-border-gradient p-px shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="rounded-lg bg-background-light-400 dark:bg-background-dark-500 px-8 py-12">
                      {children}
                    </div>
                  </div>

                  <div className="rounded-lg bg-vc-border-gradient dark:bg-dark-vc-border-gradient p-px shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="rounded-lg bg-background-light-400 dark:bg-background-dark-500">
                      <Byline />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LayoutProviders>
        </ThemeWrapper>
        <Analytics />
      </body>
    </html>
  );
}

// export const metadata = () => {
//   return (
//     <>
//       <DefaultTags />
//       <title>ZITADEL Login Playground</title>
//       <meta
//         name="description"
//         content="This is a ZITADEL Login Playground to get an understanding how the login API works."
//       />
//     </>
//   );
// };

import { Fragment } from "react";
import { Footer, type FooterProps } from "./footer";
import { Header, type HeaderProps } from "./header";

export interface BaseLayoutProps {
  header: HeaderProps;
  footer: Omit<FooterProps, "socials">;
}

const socials: FooterProps["socials"] = [];

export const BaseLayout = ({
  header,
  footer,
  children,
}: React.PropsWithChildren<BaseLayoutProps>) => {
  return (
    <Fragment>
      <Header {...header} />
      {children}
      <Footer {...footer} socials={socials} />
    </Fragment>
  );
};

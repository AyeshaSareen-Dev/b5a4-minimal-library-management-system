import { Outlet, useNavigation } from "react-router";
import {SiteLoading, PageContainer, Navbar, Footer} from "../ui";
import {Providers} from "../../providers";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Providers>
      {/* Navbar */}
      <Navbar />
      <PageContainer>
        {navigation.state === "loading" ? <SiteLoading /> : <Outlet />}
      </PageContainer>
      {/* footer */}
      <Footer />
    </Providers>
  );
}

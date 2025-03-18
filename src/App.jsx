import React from "react";
import { Layout } from "antd";
import  HeaderComponent  from "./components/header/headerComponent";
import  RouteComponent  from "./components/routes/routeComponent";

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <>
      <Layout className="!bg-white h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
        <Header className="!bg-custom-white">
          <HeaderComponent />
        </Header>
        <Layout className="h-screen max-h-screen overflow-y-auto">
          <Content className="overflow-y-auto overflow-x-hidden px-4 md:px-16 py-4">
            <RouteComponent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;

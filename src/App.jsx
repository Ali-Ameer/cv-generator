import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import HomePage from "./screens/home/Home";

function App() {
  return (
    <Layout
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        backgroundColor: "transparent",
      }}
    >
      <Content>
        <HomePage />
      </Content>
    </Layout>
  );
}

export default App;

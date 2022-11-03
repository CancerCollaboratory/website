import Table from "../components/table/table";
import pageData from "../data/pages/home/home.json";

const Home = () => {
  return (
    <>
      <Table data={pageData.table} />
    </>
  );
};

export default Home;

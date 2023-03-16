import Helmet from "react-helmet";
const Page_Title = ({ page_title, name }) => {
  return (
    <Helmet>
      <title>
        {page_title} | {name}
      </title>
    </Helmet>
  );
};

export default Page_Title;

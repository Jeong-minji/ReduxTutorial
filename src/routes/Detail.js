import { useParams } from "react-router-dom";

const Detail = (props) => {
  const params = useParams();

  console.log(params);
  return "detail";
};

export default Detail;

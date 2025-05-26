import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Details.css";

export default function Details(props) {
  const { id } = useParams();
  const produit = props.data.find((item) => item.id === parseInt(id));
  return (
    <>
      <Nav />
    </>
  );
}
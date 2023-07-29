import { CreateForm } from "../components/CreateForm";
import { Nav } from "../components/Nav";
import "../styles/Create.scss";

export const Create = ({ id }: { id: string }) => {
  return (
    <section className="create__container">
      <Nav />
      <div className="create__div">
        <h1 className="create__h1">Create</h1>
        <CreateForm id={id} />
      </div>
    </section>
  );
};

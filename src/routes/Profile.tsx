import { UserInfo } from "../components/UserInfo";
import { Nav } from "../components/Nav";

export const Profile = ({ id }: { id: string }) => {
  return (
    <section>
      <Nav />
      <UserInfo id={id} />
    </section>
  );
};

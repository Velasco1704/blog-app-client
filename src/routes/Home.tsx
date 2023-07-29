import { Nav } from "../components/Nav";
import { PostsList } from "../components/PostsList";

export const Home = () => {
  return (
    <section className="home__container">
      <Nav />
      <PostsList />
    </section>
  );
};

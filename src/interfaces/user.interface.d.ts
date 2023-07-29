export interface User {
  data: {
    id: string;
    fullName: string;
    email: string;
    password: string;
    posts: {
      id: string;
      body: string;
      create_at: string;
      userId: string;
    }[];
  };
}

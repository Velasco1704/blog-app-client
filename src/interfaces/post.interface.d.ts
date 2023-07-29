export interface Post {
  result: {
    id: string;
    body: string;
    create_at: string;
    userId: string;
    user: {
      id: string;
      fullName: string;
      email: string;
    };
  }[];
}

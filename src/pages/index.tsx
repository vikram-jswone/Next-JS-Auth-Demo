import { WithAuth } from "@/components/auth";
import { Layout, Navbar } from "@/components/layout";
import { PostListing } from "@/components/post";
import { PostService } from "@/service";
import { Post } from "@/types";
import { getAuthenticationTokenFromContext, withAuthServerSide } from "@/utils";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Post CRUD Web App</title>
      </Head>
      <Layout>
        <Navbar />
        <PostListing posts={posts} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await PostService.getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;

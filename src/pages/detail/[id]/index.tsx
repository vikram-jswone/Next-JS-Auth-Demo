import { WithAuth } from "@/components/auth";
import { Layout, Navbar } from "@/components/layout";
import { PostDetail } from "@/components/post";
import { PostService } from "@/service";
import { Post, PostId } from "@/types";
import { getAuthenticationTokeFromCookie, withAuthServerSide } from "@/utils";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post Detail : {post.title}</title>
      </Head>
      <Layout>
        <Navbar />
        <PostDetail post={post} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthServerSide(
  async (context) => {
    try {
      const id = Number(context.params?.id!) as PostId;
      const post = await PostService.getPostById(id);
      return {
        props: {
          post,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
        },
        props: {},
      };
    }
  }
);

export default WithAuth(PostDetailPage);

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css"

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export function getStaticPaths() {
    // *in production, this runs only during the build time, so all the paths are created at build time
    // *during development, this runs at first, but also at every user request, to improve the developer experience 

    // *in next.js documentation: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
    // In production, getStaticPaths runs at build time.
    // In development (npm run dev or yarn dev), getStaticPaths runs on every request.
    const paths = getAllPostIds()
    console.log("getStaticPaths paths", paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log("getStaticProps params", params)
    const postData = await getPostData(params.id)
    console.log("postData", postData)
    return {
        props: {
            postData
        }
    }
}
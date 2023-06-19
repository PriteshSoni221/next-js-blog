import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnLoad"
                    onLoad={(e) => console.log(`script loaded correctly`, e)}
                />
            </Head>
            <h1>
                First post
            </h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image
                src="/profile.jpg"
                width={144}
                height={144}
                alt="profile-picture"
            />
        </Layout>
    )
}

export default FirstPost
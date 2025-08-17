import Head from "next/head";

export default function SEO({ title, description }: { title: string; description: string }) {
    return (
        <Head>
            <title>{title} | Shreem Software Solutions</title>
            <meta name="description" content={description} />
        </Head>
    );
}


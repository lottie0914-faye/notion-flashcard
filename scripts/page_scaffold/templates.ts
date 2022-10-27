export const createPageTemplate = (
    name: string
): string => `// import type { NextPage } from "next"
import Head from "next/head"
import Layout from "../components/Layout/Layout"
import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./_app"
import { css } from "@emotion/react"

const ${name}: NextPageWithLayout = () => {

    return (
        <div css={styles.container}>
            <Head>
                <title>Notion Flashcard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>
                    Title
                </h1>

            </main>

        </div>
    )
}

const styles = {
	container: css({
		backgroundColor: "pink"
	})
}

${name}.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ${name}
`

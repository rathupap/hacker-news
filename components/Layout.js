import Link from 'next/link';
import Head from'next/head';

const Layout = ({ children, title }) => {

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href="/">
                    <a>Hacker Next</a>
                </Link>
            </nav>

            { children }

            <style jsx global>
                {
                    `
                        * {
                            margin: 0;
                            padding: 0;
                        }

                        .container {

                            max-width: 800px;
                            margin: 0 auto;
                        
                        }

                    `
                    
                }
            </style>

            <style jsx>
            {
                `
                    nav {
                        background-color: #f60;
                        padding: 1rem;
                        margin-bottom: 2rem;
                    }

                    nav a {

                        color: #fff;
                        font-weight: bold;
                        text-decoration: none;
                        font-size: 2rem;

                    }
                `
            }
            </style>
        </div>
    )

}

export default Layout;
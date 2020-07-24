import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';
import ErrorPage from './_error';
import Layout from './../components/Layout';

const Story = ({ story, err, router}) => {

    console.log(router)

    if(err){

        return <ErrorPage />

    }

    const navigateBack = () => router.back()

    return (
        <Layout title={story.title}>
            <button onClick={navigateBack}>Back</button>
            <h2>{story.title}</h2>
            <span>{story.time_ago}</span> -
            <span> {story.comments_count} comments</span>
        </Layout>
    )

}

Story.getInitialProps = async ({ query }) => {

    try {
        const response = await fetch(`https://node-hnapi.herokuapp.com/item/${query.id}`);
        const story = await response.json();
    
        return { story }
    }


    catch(err){
        return { err}
    }
}

export default withRouter(Story);
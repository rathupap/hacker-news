import Link from 'next/link';
import { Fragment } from 'react';

const StoryList = ({ story }) => {

    return (
        <Fragment>
            <div className="wrapper">
                <h2><a href="">{story.title}</a></h2>
            </div>
            <div className="story-details">
                <span>{story.time_ago }</span>
                <Link href={`/story?id=${story.id}`}><a>{story.comments_count} comments</a></Link>
            </div>
            <style jsx>
                {
            
                    `

                        .wrapper h2 a {
                            color: #333;
                            text-decoration: none;
                        }

                        .story-details {
                            padding: 0 0 2rem;
                        }

                        .story-details span{
                            margin-right: 1rem;
                            color: #655664;
                        }

                        .story-details a {
                            color: #dd66ff;
                            text-decoration: none;
                        }
                    `
                }
            </style>
        </Fragment>
        
    )

}

export default StoryList;
'use client'

import Markdown from "react-markdown";

function Blog(){
    return(
        <div>
            <Markdown>
                # This is a header
                And this is a paragraph
                <br/>
                - This is a list
                <br/>
                - This is another item
            </Markdown>
        </div>
    )
}

export default Blog
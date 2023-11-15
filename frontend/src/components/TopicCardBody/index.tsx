import {Typography } from "@mui/material";
type TopicCardBodyProps = {
    content: string

}
function TopicCardBody({
content
}:TopicCardBodyProps
){
    return (
        <div id="topic-card-body" style={{marginLeft: '3rem'}}>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                minima odio incidunt at aliquid, assumenda eum nesciunt sint in doloremque totam autem, nihil distinctio explicabo quod ratione officia! Temporibus, veritatis!
            </Typography>
        </div>

    )
}

export default TopicCardBody;
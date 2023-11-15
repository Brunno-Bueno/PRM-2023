import { Button } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Repeat from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './style.css';
import { ITopic } from "../../@types";
type TopicCardActionsProps = {
    topic: ITopic
}
function TopicCardActions({
    topic
}: TopicCardActionsProps) {
    return(
        <div className="topic-card-actions">
            <Button variant="text" size="small" startIcon={<ChatBubbleIcon/>}>3</Button>
            <Button variant="text" size="small" startIcon={<Repeat />}>23</Button>
            <Button variant="text" size="small" startIcon={<FavoriteBorderIcon/>}>33</Button>
        </div>
    )
}

export default TopicCardActions;
import React from "react";
import "./Post.css";
import {Avatar} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";


function Post({p}) {
  const{name, username, post} = p;
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" />
            </div>
            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                    <h3>{name}{" "}
                      <span className="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge" /> @{username}
                      </span>
                    </h3>
                  </div>
                  <div className="post__headerDescription">
                    <p>{post}</p>
                  </div>
                </div>
                <img src="https://miro.medium.com/max/540/0*vUlSsz1sMQ38o5gd.jpg" alt="" />
                <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
              </div>
           </div>
        </div>
    );
  }


export default Post;
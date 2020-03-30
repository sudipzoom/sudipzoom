import express from "express";
import routes from "../routes";
import {
  videos,
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

//upload video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

//Video detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

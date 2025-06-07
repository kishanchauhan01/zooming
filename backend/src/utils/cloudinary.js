import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log(localFilePath);
    if (!localFilePath) return null;
    //upload local file on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "zooming",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("file not uploaded");
    return null;
  }
};

const deleteFromCloudinary = async (public_id) => {
  try {
    if (!public_id) return null;

    const response = await cloudinary.uploader.destroy(public_id, {
      use_filename: true,
      resource_type: "image",
    });

    if (response.result === "ok") {
      return response;
    } else {
      console.error("image is not delete");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };

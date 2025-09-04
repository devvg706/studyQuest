const cloudinary = require('cloudinary').v2;
require("dotenv").config();

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = {
    folder, // make sure `folder` key is lowercase (not `Folder`)
    resource_type: "auto",
    overwrite: true, //  force replace existing image if filename matches
    use_filename: true, //  makes it deterministic and overwriteable
    unique_filename: false, // disables Cloudinary from randomizing name
  };

  if (height) options.height = height;
  if (quality) options.quality = quality;

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

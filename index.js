const axios = require('axios');

const Api = {
  // Fetch audio (MP3) download link
  async ytmp3(urls) {
    try {
      const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio?url=${urls}`);
      const data = response.data;

      return {
        status: true,
        message: "Success",
        owner: "Indra dev", // Updated owner to Indra dev
        data: {
          id: data.metadata.videoId,
          title: data.metadata.title,
          desc: data.metadata.description,
          imej: data.metadata.thumbnail.url,
          thumb: data.metadata.thumbnail.url, // assuming thumbnail image URL
          uploadTime: data.metadata.duration, // Assuming duration can be treated as "uploadTime"
          views: data.metadata.likes, // Use likes as views here
          name: data.metadata.author,
          download: data.downloads.url, // MP3 download link
        },
      };
    } catch (e) {
      return {
        status: false,
        message: "Error occurred",
      };
    }
  },

  // Fetch video (MP4) download link
  async ytmp4(urls) {
    try {
      const response = await axios.get(`https://ytdl.axeel.my.id/api/download/video?url=${urls}`);
      const data = response.data;

      return {
        status: true,
        message: "Success",
        owner: "Indra dev", // Updated owner to Indra dev
        data: {
          id: data.metadata.videoId,
          title: data.metadata.title,
          desc: data.metadata.description,
          imej: data.metadata.thumbnail.url,
          thumb: data.metadata.thumbnail.url, // assuming thumbnail image URL
          uploadTime: data.metadata.duration, // Assuming duration can be treated as "uploadTime"
          views: data.metadata.likes, // Use likes as views here
          name: data.metadata.author,
          download: data.downloads.url, // MP4 download link
        },
      };
    } catch (e) {
      return {
        status: false,
        message: "Error occurred",
      };
    }
  },
};

// Export the Api object for use in other modules
module.exports = Api;

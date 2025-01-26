const axios = require('axios');
class Ytdl {
    
    static async mp3(url) {
        try {
            const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio?url=${url}`);
            return response.data.downloads.url; 
              } catch (error) {
            console.error('Failed to fetch audio', error);
            return null;
        }
    }

    
    static async mp4(url) {
        try {
            const response = await axios.get(`https://ytdl.axeel.my.id/api/download/video?url=${url}`);
            return response.data.downloads.url; 
        } catch (error) {
            console.error('Failed to fetch video', error);
            return null;
        }
    }
}

module.exports = Ytdl;

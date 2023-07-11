const axios = require('axios');
const cheerio = require('cheerio');

function extractProblemStats(text) {
    const regex = /Solved Problems(\d+)SolvedEasy(\d+)\/(\d+)Beats(\d+\.\d+)%Medium(\d+)\/(\d+)Beats(\d+\.\d+)%Hard(\d+)\/(\d+)Beats(\d+\.\d+)%/;
    const match = text.match(regex);
  
    if (match && match.length === 11) {
      const totalProblems = parseInt(match[1]);
      const easySolved = parseInt(match[2]);
      const easyTotal = parseInt(match[3]);
      const easyBeats = parseFloat(match[4]);
      const mediumSolved = parseInt(match[5]);
      const mediumTotal = parseInt(match[6]);
      const mediumBeats = parseFloat(match[7]);
      const hardSolved = parseInt(match[8]);
      const hardTotal = parseInt(match[9]);
      const hardBeats = parseFloat(match[10]);
  
      return {
        easy: {
          total: easyTotal,
          solved: easySolved,
          beats: easyBeats
        },
        medium: {
          total: mediumTotal,
          solved: mediumSolved,
          beats: mediumBeats
        },
        hard: {
          total: hardTotal,
          solved: hardSolved,
          beats: hardBeats
        },
        totalProblems
      };
    } else {
      return null; // Invalid format or no match found
    }
  }
  

const getInfoLC = async (req, res) => {
    try {
      const response = await axios.get(`https://leetcode.com/${process.env.leetcode_id}`);
      const $ = cheerio.load(response.data);
      
      // Extract the desired data using Cheerio selectors
      // const keep = $('div').text().trim();
      const allStats = $('.min-w-max').first().text().trim();
      const user_name = $('div').find('.text-xs').first().text().trim();
      const result = extractProblemStats(allStats);
        
      // Create a data object to hold the extracted information
      const data = {
        // show:keep,
        all:result,
        user: user_name,            // user name
      };
      // Send the extracted data as a JSON response
      res.json(data);
    } catch (error) {
      // Handle any errors that occur during the request or scraping process
      res.status(500).json({ error: 'An error occurred while retrieving data from Leetcode.' });
    }
}


module.exports = {getInfoLC}

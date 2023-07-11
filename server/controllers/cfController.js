const axios = require('axios');
const cheerio = require('cheerio');

const getInfoCF = async (req, res) => {
    try {
      const response = await axios.get(`https://codeforces.com/profile/${process.env.codeforces_id}`);
      const $ = cheerio.load(response.data);
      
      // Extract the desired data using Cheerio selectors
      const ques = $('._UserActivityFrame_footer').find('._UserActivityFrame_counterValue').first().text().trim();
      const rated = $('.user-rank').find('span').first().text().trim();
      const user_name = $('.main-info').find('h1').first().text().trim();
      const curr_rating = $('.info').find('li').first().find('span').first().text().trim();
      const max_rating = $('.info').find('li').first().find('.smaller').text().trim();
  
      // Create a data object to hold the extracted information
      const data = {
        problems: ques,              // problems solved
        color: rated,                // rating color
        user: user_name,             // user name
        current: curr_rating,       // curr rating
        max: max_rating             // maximum rating
      };
  
      // Send the extracted data as a JSON response
      res.json(data);
    } catch (error) {
      // Handle any errors that occur during the request or scraping process
      res.status(500).json({ error: 'An error occurred while retrieving data from Codeforces.' });
    }
}


module.exports = {getInfoCF}

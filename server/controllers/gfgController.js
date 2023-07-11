const axios = require('axios');
const cheerio = require('cheerio');

const getInfoGFG = async (req, res) => {
    try {
      const response = await axios.get(`https://auth.geeksforgeeks.org/user/${process.env.gfg_id}`);
      const $ = cheerio.load(response.data);
      
      // Extract the desired data using Cheerio selectors
      const ques = $('.score_cards_container').find('div:nth-child(2)').find('.score_card_value').first().text().trim();
      const rankGFG = $('.rankNum').text().trim();
      const user_name = $('.profile_name').text().trim();
      const codingScore = $('.score_cards_container').find('.score_card_value').first().text().trim();
      const scoreThisMonth =  $('.score_cards_container').find('div:nth-child(3)').find('.score_card_value').first().text().trim();

  
      // Create a data object to hold the extracted information
      const data = {
        problems: ques,             // problems solved
        univ_rank: rankGFG,              // rating color
        user: user_name,            // user name
        overall: codingScore,       // curr rating
        month: scoreThisMonth         // maximum rating
      };
  
      // Send the extracted data as a JSON response
      res.json(data);
    } catch (error) {
      // Handle any errors that occur during the request or scraping process
      res.status(500).json({ error: 'An error occurred while retrieving data from Codeforces.' });
    }
}


module.exports = {getInfoGFG}

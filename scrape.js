const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function scrapeData() {
  const html = await axios.get('https://db.chgk.info/tour/mos05sv');
  const data = await cheerio.load(html.data);
  const mainBlock = data('#main');

  const topicsList = [];
  const questionsList = [];
  const answersList = [];

  const topics = mainBlock.find('div[style="margin-top:20px;"]');
  topics.each(topic => {
    let topicName = topics[topic].children[1].data;
    topicName = topicName.replace(':\n\n', '');
    topicName = topicName.slice(0, -2);
    topicsList.push(topicName);
  });

  topics.each(topic => {
    let topicQuestions = topics[topic].children.filter(child => child.name === 'p');
    topicQuestions.forEach(question => {
      let questWithoutNumber = '';
      question.children
        .filter(child => child.type !== 'tag')
        .forEach(child => {
          questWithoutNumber += child.data
            .replace(/\d\. /gm, '')
            .replace(/\n/gm, ' ')
            .trim();
        });
      questionsList.push(questWithoutNumber);
    });
  });

  const answers = topics.find('div.collapsible')
  answers.each(answer => {
    const answerBlock = answers[answer].children.filter(a => a.name === 'p');
    let answerName = answerBlock[0].children[1].data;
    answerName = answerName.replace(/\n/gm, ' ').replace(/\./gm, '');
    if (answerName.endsWith('.')) {
      answerName = answerName.slice(0, -1);
    }
    answersList.push(answerName.trim());
  });

  return ({
    topics: topicsList,
    questions: questionsList,
    answers: answersList
  });
}

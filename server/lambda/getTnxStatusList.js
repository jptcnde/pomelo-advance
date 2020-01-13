
const db = require('../api');


async function getTnxStatusList() {
  try {
    const { Items = [] } = await db.scan({
      TableName: process.env.DB_TBL_POMELOTNX
    }).promise();

    return {
      statusCode: 200,
      // not recommended for real world app
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(Items)
    };

  } catch(e) {
    return {
      statusCode: 500,
      statusText: e.message
    };
  }

}

module.exports = getTnxStatusList;
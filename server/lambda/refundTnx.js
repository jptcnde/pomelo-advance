
const formatDate = require('date-fns/format');
const db = require('../api');

async function refundTnx(event) {
  try {
    const { id } = event.pathParameters;

    if (!id) {
      return {
        status: 400,
        statusText: 'Missing "id" Parameter'
      };
    }

    const status = 'REFUNDED';

    const { Item: tnxItem = {} } = await db.get({
      TableName: process.env.DB_TBL_POMELOTNX,
      Key: { id },
    }).promise();


    const { history } = tnxItem;
    const tnxDate = formatDate(Date.now(), String(process.env.DATE_TIME_FORMAT).trim());

    history.push({
      status,
      updatedDate: tnxDate,
      trigger: 'SYSTEM',
    })

    const params = {
      Key: { id },
      TableName: process.env.DB_TBL_POMELOTNX,
      UpdateExpression: 'set #history = :history, #status = :tnxstatus',
      "ExpressionAttributeNames": {
        '#history': 'history',
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':history': history,
        ':tnxstatus': status
      }
    };

    await db.update(params).promise();

    return {
      statusCode: 200,
      // not recommended for real world app
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({})
    };

  } catch(e) {
    return {
      statusCode: 500,
      statusText: e.message
    };
  }

}

module.exports = refundTnx;
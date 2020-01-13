import data from '../../mock-data.json';

export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve(data.transactions)

  })
}
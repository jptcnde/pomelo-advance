const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
/** TNX -> Transaction */

export function getTnx() {
  return fetch(`${API_ENDPOINT}/tnx-status`)
  .then(res => res.json())
}

export function getTnxById(id: string) {
  return fetch(`${API_ENDPOINT}/tnx-status/${id}`)
  .then(res => res.json())
}


export async function refundTnx(id: string) {
  const req = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  return fetch(`${API_ENDPOINT}/tnx-status/${id}`, req)
}
const ShippingMethods {
  constructor(client) {
    client = client
    const resourceUrl =  "/shipping_methods"
  }

  list(filter) {
    => client.get(resourceUrl, filter)
  }

  retrieve(id, filter) {
    => client.get(`${resourceUrl}/${id}`, filter)
  }

  create(data) {
    => client.post(`${resourceUrl}`, data)
  }

  update(id, data) {
    => client.put(`${resourceUrl}/${id}`, data)
  }

  delete(id) {
    => client.delete(`${resourceUrl}/${id}`)
  }
}

export default ShippingMethods

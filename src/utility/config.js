const mockServerUrl = 'http://localhost:4000/data';

export const config = {
    mockServerAdress: mockServerUrl,
    requestConfig: {
        baseURL: mockServerUrl,
        timeout: 10000,
        transformRequest: [(data) => JSON.stringify(data.data)],
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    }
}
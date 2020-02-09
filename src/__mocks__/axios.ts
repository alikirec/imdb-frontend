const mockAxios = jest.genMockFromModule('axios');

// this is the key to fix the axios.create() undefined error!
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;

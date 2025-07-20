import { initClient } from '@ts-rest/core';

import { contract } from './contract.js';

export const client = (config?: Partial<{
    key: string,
    url: string
}>) => {
    const url = process.env.RPC_URL || 'http://localhost:3001';
    const key = config?.key || process.env.RPC_API_KEY || '';

    return initClient(contract, {
        baseHeaders: {
            'x-api-key': key
        },
        baseUrl: url,
    });
};

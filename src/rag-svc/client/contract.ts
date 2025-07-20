import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const CollectionName = z.string().describe('The collection name');

const SuccessResponse = z.boolean();

const Collection = z.object({
    name: z.string()
});

const DeleteCollectionRequest = z.object({
    collection: CollectionName
});

const DeletePointsRequest = z.object({
    collection: CollectionName,
    key: z.string()
});

const Context = z.object({
    collection: CollectionName,
    key: z.string().optional(),
    limit: z.number().optional(),
    tags: z.array(z.string()).optional(),
    type: z.string().optional()
}).describe('Context settings');

const GenerationOptions = z.object({
    format: z.string().optional(),
    minP: z.number().optional(),
    model: z.string().optional(),
    suffix: z.string().optional(),
    temperature: z.number().optional(),
    think: z.boolean().optional(),
    topK: z.number().optional(),
    topP: z.number().optional()
}).describe('Additional LLM options');

const EmbedTextRequest = z.object({
    context: Context,
    text: z.string().nonempty(),
    title: z.string().optional()
});

const GenerateTextRequest = z.object({
    context: Context.optional(),
    options: GenerationOptions.optional(),
    text: z.string()
});

const GenerateTextResponse = z.object({
    choices: z.array(
        z.object({
            text: z.string()
        })
    )
});

const FindSimilarQuery = z.object({
    context: Context,
    text: z.string().nonempty()
});

const FindSimilarResponse = z.array(
    z.object({
        payload: z.record(z.string(), z.unknown()),
        score: z.number()
    })
);

export const contract = c.router({
    deleteCollection: {
        body: DeleteCollectionRequest,
        method: 'POST',
        path: '/deleteCollection',
        responses: {
            200: SuccessResponse,
        },
        summary: 'Delete collection by name',
    },
    deletePoints: {
        body: DeletePointsRequest,
        method: 'POST',
        path: '/deletePoints',
        responses: {
            200: SuccessResponse,
        },
        summary: 'Delete points from collection by key identifier',
    },
    embedText: {
        body: EmbedTextRequest,
        method: 'POST',
        path: '/embedText',
        responses: {
            200: SuccessResponse,
        },
        summary: 'Embed text to vector database',
    },
    findSimilar: {
        method: 'GET',
        path: '/findSimilar',
        query: FindSimilarQuery,
        responses: {
            200: FindSimilarResponse,
        },
        summary: 'Generate text complection',
    },
    generateText: {
        body: GenerateTextRequest,
        method: 'POST',
        path: '/generateText',
        responses: {
            200: GenerateTextResponse,
        },
        summary: 'Generate text complection',
    },
    getCollections: {
        method: 'GET',
        path: '/getCollections',
        responses: {
            200: z.array(Collection),
        },
        summary: 'Get all collections',
    },
});

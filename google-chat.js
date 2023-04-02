/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'my-project';
// const location = 'global';
const agentId = 'my-agent';
// const query = 'Hello';
const languageCode = 'en'

// Imports the Google Cloud Some API library
const { SessionsClient } = require('@google-cloud/dialogflow-cx');

const location = 'us-central1';
const client = new SessionsClient({ apiEndpoint: 'us-central1-dialogflow.googleapis.com' })

// const client = new SessionsClient();

async function detectIntentText(query) {
    const sessionId = Math.random().toString(36).substring(7);
    const sessionPath = client.projectLocationAgentSessionPath(
        projectId,
        location,
        agentId,
        sessionId
    );
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
            },
            languageCode,
        },
    };
    const [response] = await client.detectIntent(request);
    for (const message of response.queryResult.responseMessages) {
        if (message.text) {
            console.log(`Agent Response: ${message.text.text}`);
        }
    }
    if (response.queryResult.match.intent) {
        console.log(
            `Matched Intent: ${response.queryResult.match.intent.displayName}`
        );
    }
    console.log(
        `Current Page: ${response.queryResult.currentPage.displayName}`
    );
}

module.exports.detectIntentText = detectIntentText;
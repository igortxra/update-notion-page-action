const core = require('@actions/core');
const { Client } = require('@notionhq/client');

const NOTION_TOKEN = core.getInput('notion-token')
const PAGE_ID = core.getInput('page-id')
const notion = new Client({ auth: NOTION_TOKEN });

try {
  (async () => {
    const response = await notion.pages.update({
      page_id: PAGE_ID,
      properties: {
        'test coverage': {
          number: 1.0,
        },
      },
    });
    console.log(response);
  })();
  core.setOutput("status", "success");
} catch (error) {
  core.setOutput("status", "error");
  core.setFailed(error.message);
}

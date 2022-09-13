const core = require('@actions/core');
const { Client } = require('@notionhq/client');

const NOTION_TOKEN = core.getInput('notion-token')
const PAGE_ID = core.getInput('page-id')
const PROPERTY_NAME = core.getInput('property-name')
const PROPERTY_VALUE = core.getInput('property-value')
const PROPERTY_TYPE = core.getInput('property-type')
const notion = new Client({ auth: NOTION_TOKEN });

try {
  (async () => {
    const response = await notion.pages.update({
      page_id: PAGE_ID,
      properties: {
        [PROPERTY_NAME]: {
          [PROPERTY_TYPE]: PROPERTY_VALUE,
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

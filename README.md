# Update Notion Page

This action updates a given property from a notion page.

## Inputs

## `notion-token`
**Required** Notion API Key

## `page-id`
**Required** Notion page id

## `property-name`
**Required** Notion page property name

## `property-value`
**Required** Notion page property value

## `property-type`
**Required** Notion page property type. Default "number"

## Outputs

## `status`

Update status

## Example usage

```yml
on: [push]

jobs:
  update_test_coverage_in_notion:
    runs-on: ubuntu-latest
    name: Update Notion Page
    steps:
      - name: Update notion page properties
        id: update-page
        uses: igortxra/hello-world-javascript-action@v1.0.0
        with:
          notion-token: ${{ secrets.NOTION_TOKEN }}
          page-id: ${{ secrets.NOTION_PAGE_ID }}
          property-name: "test coverage"
          property-value: "0.9"
          property-type: "number"
          
      - name: Get the update output
        run: echo "Update executed with ${{ steps.update-page.outputs.status }}"
```

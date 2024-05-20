/** @format */

import fs from 'fs/promises'
import path from 'path'

/**
 * Function to convert Swagger JSON paths to JSDoc @swagger annotations.
 * @param {string} swaggerJsonString - The raw Swagger JSON string.
 * @returns {string} The JSDoc annotations string.
 */
export default async function convertSwaggerPathsToJsDoc(swaggerJsonString) {
  try {
    const swaggerJson = JSON.parse(swaggerJsonString)
    const jsDocLines = []

    // Iterate through paths in the Swagger JSON
    for (const route in swaggerJson.paths) {
      for (const method in swaggerJson.paths[route]) {
        const endpoint = swaggerJson.paths[route][method]
        jsDocLines.push('/**')
        jsDocLines.push(' * @swagger')

        // Construct the basic endpoint information
        jsDocLines.push(` * ${route}:`)
        jsDocLines.push(` *   ${method.toUpperCase()}:`) // Use uppercase for HTTP methods

        // Add tags if available
        if (endpoint.tags) {
          jsDocLines.push(' *   tags:')
          endpoint.tags.forEach(tag => jsDocLines.push(` *    - ${tag}`))
        }

        // Add summary and description if available
        if (endpoint.summary) {
          jsDocLines.push(` *   summary: ${endpoint.summary}`)
        }
        if (endpoint.description) {
          jsDocLines.push(` *   description: ${endpoint.description}`)
        }

        // Handle parameters if available
        if (endpoint.parameters) {
          jsDocLines.push(' *   parameters:')
          endpoint.parameters.forEach(param => {
            jsDocLines.push(` *    - in: ${param.in}`)
            jsDocLines.push(` *      name: ${param.name}`)
            jsDocLines.push(` *      required: ${param.required}`)
            if (param.description) {
              jsDocLines.push(` *      description: ${param.description}`)
            }
            // Add schema information if available
            if (param.schema) {
              jsDocLines.push(` *      schema:`)
              for (const prop in param.schema) {
                jsDocLines.push(` *        ${prop}: ${param.schema[prop]}`)
              }
            }
          })
        }

        // Handle responses if available
        if (endpoint.responses) {
          jsDocLines.push(' *   responses:')
          for (const statusCode in endpoint.responses) {
            const response = endpoint.responses[statusCode]
            jsDocLines.push(` *    ${statusCode}:`)
            if (response.description) {
              jsDocLines.push(` *      description: ${response.description}`)
            }

            // Handle content within responses
            if (response.content) {
              jsDocLines.push(' *      content:')
              for (const contentType in response.content) {
                jsDocLines.push(` *        ${contentType}:`)
                const content = response.content[contentType]
                if (content.schema) {
                  // Handle schema references
                  if (content.schema.$ref) {
                    jsDocLines.push(` *          $ref: ${content.schema.$ref}`)
                  } else {
                    // Handle schema properties
                    jsDocLines.push(` *          schema:`)
                    for (const schemaProp in content.schema) {
                      jsDocLines.push(
                        ` *            ${schemaProp}: ${content.schema[schemaProp]}`
                      )
                    }
                  }
                }
                // Add example if available
                if (content.example) {
                  jsDocLines.push(` *          example:`)
                  jsDocLines.push(
                    ` *            ${JSON.stringify(content.example, null, 2)}`
                  )
                }
              }
            }
          }
        }

        jsDocLines.push(' */')
      }
    }

    return jsDocLines.join('\n')
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing Swagger JSON: Invalid JSON format.')
    } else {
      console.error(`Error processing Swagger JSON: ${error.message}`)
    }
    throw error // Rethrow the error for the caller to handle.
  }
}

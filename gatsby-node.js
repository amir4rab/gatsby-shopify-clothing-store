const path = require('path');

const makeSlug = (inputStr) => inputStr.toLowerCase().replace(/ /g, '_');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const { data } = await graphql(`
        query getProjectsDataForCreatePages {
            allShopifyCollection {
                edges {
                    node {
                        title
                        id
                    }
                }
            }
        }
    `);

    data.allShopifyCollection.edges.forEach(({node}) => {
        createPage({
            path: makeSlug(node.title),
            component: path.resolve('./src/templates/collection/collection.template.jsx'),
            context: {
                id: node.id
            }
        });
    })

}
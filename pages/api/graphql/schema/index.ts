const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const CatalogoDatoType = require('./types/CatalogoDatoType')
const CooperanteType = require('./types/CooperanteType')
const DatoType = require('./types/DatoType')
const TestType = require('./types/TestType')
const UniversidadType = require('./types/UniversidadType')

// Import resolvers
const CatalogoDatoResolver = require('./resolvers/CatalogoDatoResolver')
const CooperanteResolver = require('./resolvers/CooperanteResolver')
const DatoResolver = require('./resolvers/DatoResolver')
const TestResolver = require('./resolvers/TestResolver')
const UniversidadResolver = require('./resolvers/UniversidadResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    CatalogoDatoType,
    CooperanteType,
    DatoType,
    TestType,
    UniversidadType
])

// Merge resolvers
const resolvers = mergeResolvers([
    CatalogoDatoResolver,
    CooperanteResolver,
    DatoResolver,
    TestResolver,
    UniversidadResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema

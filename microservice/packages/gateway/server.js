const express = require('express')
const {graphqlExpress, graphiqlExpress}=require('apollo-server-express')
const app = express()
const { makeExecutableSchema} = require('graphql-tools')
const typeDefs=`
type Query {hey:String!}
`
const resolvers={
    Query:{
        hey:()=> 'hey there'
    }
}
const schema=makeExecutableSchema({
    typeDefs,
    resolvers
})
app.use(express.json())
app.use('/graphql',graphqlExpress({schema}))
app.use('/gq',graphiqlExpress({endpointURL:'/graphql'}))
app.get('/', (req, res)=>{
    res.send("i am working as expected")

}).listen(3000,()=>{
    console.log("listening")
})
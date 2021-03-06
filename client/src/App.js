import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegisterUser from "./components/Auth/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

////FOR BETTER PERFORMANCE:
////USE CACHE INSTEAD OF RE_FETCHING DATA
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         clients: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//         projects: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//       },
//     },
//   },
// });

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/graphql': 'https://mernstack888.herokuapp.com/graphql',
  cache: new InMemoryCache()
  // cache
})

function App() {
  return (
    <>
      <ApolloProvider client={ client }>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path="/projects/:id" element={ <Project /> } />
              <Route path="/register" element={ <RegisterUser /> } />
              <Route path='*' element={ <NotFound /> } />
            </Routes>
          </div>   
        </Router>             
      </ApolloProvider>
    </>
  );
}

export default App;

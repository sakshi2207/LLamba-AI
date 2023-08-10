import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route,Routes as Switch } from 'react-router-dom';
import store from '../redux/store.tsx';
import client from '../graphql/client.tsx';
import Signup from '../screens/Signup/Signup.tsx';
import Login from "../screens/Login/Login.tsx";
import HomeScreen from '../screens/Home/Home.tsx';


const Navigation: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/home" element={<HomeScreen/>} />
        </Switch>
    </ApolloProvider>
    </Provider>

  );
};

export default Navigation;

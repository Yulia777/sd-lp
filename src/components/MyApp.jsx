import React from 'react';
import Header from './header/header.jsx';
import Categories from './main/categories/categories';
import Recommendations from './main/recommendations/recommendations';
import Examples from './main/examples/examples';
import Visualization from  './main/visualization/visualization';
import Clients from './main/clients/clients';
import Presentation from './main/presentation/presentation';
import Scheme from './main/scheme/scheme';
import Questions from './main/questions/questions';


class MyApp extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <Categories/>
                    <Recommendations/>
                    <Examples/>
                    <Visualization/>
                    <Clients/>
                    <Presentation/>
                    <Scheme/>
                    <Questions/>
                </main>
            </div>
        )
    }
}

export  default  MyApp;

import React, {useState,useEffect} from "react";
import { Layout, Spin} from 'antd';
import {Switch,Route} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";

import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {HomePage} from "./pages/home";
import {MoviePage} from "./pages/movie";
import {SchedulePage} from "./pages/schedule";
import {getMovies} from "../actions/movies";
import {Spinner} from "./Spinner";

const {Content } = Layout;

function App() {
    const [collapsed, toggleCollapsed] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.filmsData.isLoading) ;

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

  return (
      <Layout>
        <Sidebar collapsed={collapsed}/>

          <Layout className="site-layout">
            <Header collapsed={collapsed} onToggle={toggleCollapsed}/>

              <Content
                  className="site-layout-background"
                  style={{
                      margin: '24px 16px',
                      padding: 24,
                      minHeight: 280
                  }}
              >
                  {
                      isLoading ? (
                         <Spinner/>
                      ): (
                          <Switch>
                              <Route path="/" exact component={HomePage} />
                              <Route path="/movie/:id" component={MoviePage} />
                              <Route path="/schedule" component={SchedulePage} />
                          </Switch>
                      )
                  }
              </Content>
          </Layout>
      </Layout>
  );
}

export default App;

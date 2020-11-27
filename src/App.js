import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Shop from './components/shop.js';
import AboutUs from './components/aboutus.js';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  render() {
    return (
      <Router>
    <Layout>
      <Header style={{background:'#353B3F'}}>
        <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
          LIP LINER LOVE
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px'}}>SHOP</Link>
          <Link to="/aboutus" style={{margin:'8px'}}>ABOUT US</Link>
        </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inline-block'}}>
      <Switch>
      <Route path="/" exact component={Shop} />
      <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
      </Content>
      <Footer style={{background:'#D9DFE4', textAlign:'center', width:'100%'}}>
        Tugas Praktikum RSBK MODUL 3 - KELOMPOK 28 (LAURENSIA & MAHANI)
      </Footer>
    </Layout>
    </Router>
    )
  }
}
export default App;
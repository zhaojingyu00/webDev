import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppLg from './AppLg';
import AppShop from './AppShop';
import AppMy from './AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="shouye"
            icon={<i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'shouye'}
            onPress={() => {
              this.setState({
                selectedTab: 'shouye',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            title="灵感"
            key="linggan"
            icon={<i style={{fontSize:22}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-linggan'></i>
            }
            selected={this.state.selectedTab === 'linggan'}
            onPress={() => {
              this.setState({
                selectedTab: 'linggan',
              });
            }}
          >
            <AppLg/>
          </TabBar.Item>
          <TabBar.Item
            title="商城"
            key="shangcheng"
            icon={<i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
            }
            dot
            selected={this.state.selectedTab === 'shangcheng'}
            onPress={() => {
              this.setState({
                selectedTab: 'shangcheng',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="wode"
            icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'wode'}
            onPress={() => {
              this.setState({
                selectedTab: 'wode',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
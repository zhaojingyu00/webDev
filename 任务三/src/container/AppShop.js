import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import { Grid } from 'antd-mobile';
import good from '../images/goods2.png';

const tabs = [
    { title: '推荐' },
    { title: '家居'},
    { title: '餐厨' },
    { title: '床上用品' },
  ];
  const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: require('../images/'+`${i+1}`+'.png'),
    text: `name${i}`,
  }));
  
  const data1 = Array.from(new Array(10)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    // icon: require('../images/'+`${i+1}`+'.png'),
  }));
  
  
export default class AppHome extends Component {
    state = {
        value: '美食',
      };
      componentDidMount() {
        this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      };
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-gouwuche'></i>,
                    ]}
                    
                    >商城</NavBar>
                    
                    <WingBlank>
                    <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                              
                            {[banner1,banner2,banner1,banner2].map(val => (
                                <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: 200 }}
                                >
                                  {[
                                      <i style={{fontSize:22,float:'left',opacity:'0.3'}} className='iconfont icon-category'></i>,
                                  ]}
                                  <div>
                                  <WingBlank style={{opacity:'0.3'}}><div className="sub-title"></div></WingBlank>
                                  <SearchBar placeholder="请输入关键字搜索" ref={ref => this.autoFocusInst = ref} />
                                  <WhiteSpace />
                                  </div>
                                <img
                                    src={`${val}`}
                                />
                                </a>
                            
                            ))}
                            
                        </Carousel>
                    </WingBlank>

                    <div style={{ padding: '15px 0' }}>
                    <WingBlank>

                    <div>
                        <div className="sub-title"></div>
                        <Grid columnNum={5} data={data} activeStyle={false} />
                    </div>


                    <div>
                        <Grid data={data1}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={good} style={{ width: '175px', height: '155px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            </div>
                            </div>
                        )}
                        />
                    </div>

                    </WingBlank>
                    </div>

                </div>
        )
    }
}
import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import inner from '../images/inner.png';
import { Grid } from 'antd-mobile';
import { WingBlank, WhiteSpace } from 'antd-mobile';
  const data = Array.from(new Array(3)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  
  const data1 = Array.from(new Array(3)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff',height:'88px'}}
                    >住吧家居</NavBar>


                        <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                            {[banner1,banner2].map(val => (
                                <a
                                key={val}
                                // href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: 200 }}
                                >
                                <img
                                    src={`${val}`}
                                />
                                </a>
                            
                            ))}
                        </Carousel>
                        <div style={{ padding: '15px 0' }}>
                            <WingBlank>
                                <div>
                                    {/* <div className="sub-title"></div> */}
                                    <Grid data={data1}
                                    columnNum={3}
                                    renderItem={dataItem => (
                                        <div style={{ padding: '12.5px' }}>
                                        <img src={inner} style={{ width: '120px', height: '120px' }} alt="" />
                                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                        </div>
                                        </div>
                                    )}
                                    />
                                </div>
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '16px' }}>
                                    <h2>热门推荐</h2>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' }}>
                                    <img src={banner2} style={{ width: '100%', height: '200px' }} alt="" />
                                    </div> 
                                </div>
                            </WingBlank>
                        </div>
                </div>
        )
    }
}
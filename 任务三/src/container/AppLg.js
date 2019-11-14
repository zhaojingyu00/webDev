import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import img1 from '../images/lg.png';
import { WingBlank, WhiteSpace } from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
  
const data = Array.from(new Array(6)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  
  const data1 = Array.from(new Array(6)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
  const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
  );
  
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    

                    <div style={{ padding: '15px 0' }}>
                        <WingBlank>
                            <PlaceHolder />
                                <div>
                                    {/* <div className="sub-title">Always square grid item </div>
                                    <Grid data={data} activeStyle={false} /> */}

                                    {/* <div className="sub-title">Grid item adjust accroiding to img size </div>
                                    <Grid data={data} square={false} className="not-square-grid" /> */}

                                    {/* <div className="sub-title">ColumnNum=3 </div>
                                    <Grid data={data} columnNum={3} />

                                    <div className="sub-title">No border</div>
                                    <Grid data={data} hasLine={false} />

                                    <div className="sub-title">Carousel</div>
                                    <Grid data={data} isCarousel onClick={_el => console.log(_el)} /> */}

                                    {/* <div className="sub-title"></div> */}
                                    <Grid data={data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div style={{ padding: '12.5px' }}>
                                        <img src={img1} style={{ width: '165px', height: '165px' ,marginleft:'12px'}} alt="" />
                                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                            
                                        </div>
                                        </div>
                                    )}
                                    />
                                    {/* <div className="sub-title">Custom GridCell Style</div>
                                    <Grid data={data1} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} /> */}
                                </div>
                                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    Content of second tab
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    Content of third tab
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    Content of third tab
                                </div> */}
                    
                            </WingBlank>
                        </div>
                    </Tabs>



                    



            </div>
        )
    }
}
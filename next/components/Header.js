import React, {useState ,useEffect} from 'react'
import  servicePath  from '../config/apiUrl'
import Router from 'next/router'
import '../static/style/components/header.css'
import axios from 'axios'
import {Row,Col, Menu } from 'antd'
import  * as Icon from '@ant-design/icons';
// import { YoutubeOutlined, HomeOutlined, FileImageOutlined  }  from '@ant-design/icons';
const Header = () => {
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then((res) => {
                setNavArray(res.data.data)
                return res.data.data
            });
          };
          fetchData();
    },[]);
  //跳转到列表页
  const handleClick = (e)=>{
    console.log(e)
    if(e.key==0){
        Router.push('/index')
    }else{
        Router.push('/list?id='+e.key)
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
          <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
              <span className="header-logo">Logo</span>
              <span className="header-txt">header text</span>
          </Col>
          <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu
                mode="horizontal"
                onClick={handleClick}
              >
              <Menu.Item key="0">
                {React.createElement(Icon['HomeOutlined'])}
                首页
              </Menu.Item>
                  {
                    navArray.map((item) => {
                        return (
                            <Menu.Item key={item.Id}>
                                {
                                  item.icon && React.createElement(
                                    Icon[item.icon]
                                  )
                                }
                                {/* {console.log(Icon['FileImageOutlined'])} */}
                                {item.typeName}
                            </Menu.Item>
                        )
                    })
                  }
              </Menu>
          </Col>
      </Row>
   </div>
  )
}
export default Header
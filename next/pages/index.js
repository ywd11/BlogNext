import { withRouter} from 'next/router'
import React,{useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import {Row, Col , List } from 'antd'
import { YoutubeOutlined  }  from '@ant-design/icons';
import Header from '../components/Header'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'
const Home = (list) => {
  const [ mylist , setMylist ] = useState(list.data)
  return (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
      <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
            <span><YoutubeOutlined/>{item.addTime}</span>
                  <span><YoutubeOutlined /> 视频教程</span>
                  <span><YoutubeOutlined /> {item.view_count}</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
        />
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Advert />
      </Col>
    </Row>
    <Footer />
 </>
)
}
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}
export default withRouter(Home)
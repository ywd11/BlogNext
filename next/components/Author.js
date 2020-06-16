import {Avatar,Divider} from 'antd'
import { YoutubeOutlined  }  from '@ant-design/icons';
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://mirror-gold-cdn.xitu.io/1691b1a448bf41afa03?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<YoutubeOutlined />} className="account"  />
                <Avatar size={28} icon={<YoutubeOutlined />}  className="account" />
                <Avatar size={28} icon={<YoutubeOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author
import React, {Component} from 'react';
import {PageTitle} from '../../components';

const services = [
    {
        title: '专注领域',
        content: [
            '世博会、奥运会展示场馆',
            '科技馆、博物馆',
            '各类主题场馆',
            '城市规划馆、企业展示中心',
            '青少年宫、妇女儿童活动中心、校史馆、纪念馆',
        ]
    },
    {
        title: '概念策划',
        content: [
            '头脑风暴、专家咨询',
            '组织文案策划、资深设计师实地考察',
            '拟定初步大纲、图纸绘制'
        ]
    },
    {
        title: '初步设计',
        content: [
            '展馆风格定位',
            '绘制图纸、确定文字',
            '资深顾问团队打造独特设计方案',
        ]
    },
    {
        title: '深化设计',
        content: [
            '装饰设计深化、系统整合空间装饰、展品与模型、完整施工图',
            '展品文字、图形、脚本文字',
            '资格预审、展品制作、多媒体内容制作、硬件集成'
        ]
    },
    {
        title: '工程实施',
        content: [
            '基础装饰、艺术布展、模型制作、强弱电布控、灯光音响调试、硬件设备安装、美工设计',
            '项目经理进度推进,严把施工质量'
        ]
    },
    {
        title: '运营维护',
        content: [
            '主场服务、培训支持、问题指导',
            '后期服务、电话回访',
            '提供升级改造方案'
        ]
    }
];

class IndexService extends Component {
    render() {
        return (
            <div id="service">
                <div className="container">
                    <PageTitle
                        title={'我们的服务'}
                        description={'创新的策划理念 专业的实施团队 丰富的项目经验'}
                    />
                    <ServiceList data={services}/>
                </div>
            </div>
        );
    }
}

const ServiceList = ({data}) => (
    <div className="row">
        {data.map((item, index) => (
            <ServiceItem key={index} data={item}/>
        ))}
    </div>
);

const ServiceItem = ({data}) => (
    <div className="col-lg-2 col-sm-4 col-xs-6 service-item">
        <div className="service-item-icon service-item-icon1">
        </div>
        <div className="service-item-title">
            {data.title}
        </div>
        <div className="service-item-content">
            <ul>
                {data.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);


export default IndexService;

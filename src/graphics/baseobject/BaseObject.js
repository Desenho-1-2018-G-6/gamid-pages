import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.js';
import Content from '../../components/content/Content.js';

import { title, links, content, attributeList } from '../../static/baseObjectData.js';

class BaseObject extends Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar title={title} links={links} />
                </div>
                <div>
                    <Content title={title} main={content} attrList={attributeList} />
                </div>
            </div>
        );
    }
}

export default BaseObject;

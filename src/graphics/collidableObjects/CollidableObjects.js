import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.js';
import Content from '../../components/content/Content.js';

import { title, links, content, example } from '../../static/collidableObjectsData.js';

class CollidableObjects extends Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar title={title} links={links} />
                </div>
                <div>
                    <Content title={title} main={content} example={example}/>
                </div>
            </div>
        );
    }
}

export default CollidableObjects;

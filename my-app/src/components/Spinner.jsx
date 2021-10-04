import React from "react";

import { Spin} from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const spinIcon = <LoadingOutlined spin style={{ fontSize: '92px'}}/>;

export const Spinner = () => {
    return (
        <div className="spinner-wrapper">
            <Spin indicator={spinIcon}/>
        </div>
    )
}
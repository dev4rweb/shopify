import React from 'react';
import * as Icon from 'react-icons/fi';
import Checkbox from "react-custom-checkbox";
import logo from '../../../../assets/img/png/logo200x200.png';

const ReactCheckbox = () => {
    /*yarn add react-custom-checkbox*/
    /*yarn add react-icons*/
    /*https://www.npmjs.com/package/react-custom-checkbox*/
    return (
        <>
            <h4>Default: </h4>
            <Checkbox/>
            <h4>Using Custom Icon:</h4>
            <Checkbox
                icon={<Icon.FiCheck color={`#00ccff`} size={14}/>}
                name={`my-input`}
                checked={true}
/*                onChange={(value) => {
                    let p = {
                        isTrue: value,
                    };
                    return alert(value);
                }}*/
                borderColor={`#ba00ff`}
                style={{cursor: 'pointer'}}
                labelStyle={{marginLeft: 5, userSelect: 'none'}}
                label="Have you started using it?"
            />
            <h4>Using Image Icon:</h4>
            <Checkbox
                checked={true}
                icon={<img src={logo} alt="logo"
                           style={{width: 24}}/>}
                borderColor={`dodgerBlue`}
                borderRadius={10}
                size={18}
                label={`Get em!`}
            />
            <h4>More Styling:</h4>
            <Checkbox
                checked={true}
                icon={
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            backgroundColor: "#174A41",
                            alignSelf: "stretch",
                        }}
                    >
                        <Icon.FiCheck color="white" size={20} />
                    </div>
                }
                borderColor="#174A41"
                // borderWidth={0}
                borderRadius={20}
                style={{ overflow: "hidden" }}
                size={20}
                label="Coooool right?"
            />
        </>
    );
};

export default ReactCheckbox;
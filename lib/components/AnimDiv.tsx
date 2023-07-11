// Copyright StarlightX 2023. 
// This code can be governed by the General Public License v3 or the StarlightX Public License, at your discretion. Both should be included with this code tree.
// For more details, read here: https://starlightx.io/licenses

import React from "react";
import { useState, useEffect } from "react";

interface LandProps {
    children: React.ReactElement<any>[];
    preset: string;
    finish?: Function;
    tailwind: string;
    delay: number;
    anims: number;
}

export function AnimDiv (props: LandProps) {

      const tempFinish = () => {
        setFinished((prevCount) => prevCount + 1);
      }

    const [finished, setFinished] = useState(0);
    useEffect(() => {
        if(finished >= props.anims) { 
            setTimeout(() => {
                props.finish!();
            }, props.delay);
        }
      }, [finished]);

    return (
        <div className= {props.preset + " " + props.tailwind}>
            {props.children.map((object, key) => (
                <div key={key}>
                    {React.cloneElement(object, { finish: tempFinish })}
                </div>
            ))}
        </div>
    );
}

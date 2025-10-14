declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import React from "react";
    export const ReactComponent: string;

}
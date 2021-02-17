import React from "react";
import { renderToString } from "react-dom/server";
import CountUp from "./countup";

const Layout:React.FC<{children: React.ReactNode}> = ({children})=>{
    return <html>
        <head>
            <title>Count up with react and esbuild</title>
            <meta charSet="utf-8" />
        </head>
        <body>
            <div id="react-app-target">
                {children}
            </div>
        </body>
    </html>;
};

const ssr = ():string=>{
    return renderToString(<Layout><CountUp/></Layout>);
}

export default ssr;

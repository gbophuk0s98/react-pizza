import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <ContentLoader
        speed={2}
        width={298}
        height={497}
        viewBox="0 0 298 497"
        backgroundColor="#f2f2f2"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="132" cy="135" r="134" />
        <rect x="0" y="278" rx="5" ry="5" width="295" height="24" />
        <rect x="-1" y="318" rx="5" ry="5" width="296" height="97" />
        <rect x="0" y="455" rx="5" ry="5" width="130" height="35" />
        <rect x="150" y="440" rx="30" ry="30" width="148" height="55" />
    </ContentLoader>
)

export default LoadingBlock
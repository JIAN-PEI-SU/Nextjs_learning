"use client"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const Body: React.FC<PropsType> = ({
    children,
    ...props
}) => {
    return (
        <body {...props}>{children}</body>
    )
};

export default Body


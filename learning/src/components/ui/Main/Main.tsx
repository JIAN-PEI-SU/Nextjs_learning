"use client"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const Main: React.FC<PropsType> = ({
    children,
    ...props
}) => {
    return (
        <main {...props}>{children}</main>
    )
};

export default Main


"use client"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const Navigation: React.FC<PropsType> = ({
    ...props
}) => {
    return (
        <nav>Navigation</nav>
    )
};

export default Navigation


"use client"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const footer: React.FC<PropsType> = ({
    ...props
}) => {
    return (
        <footer>footer</footer>
    )
};

export default footer


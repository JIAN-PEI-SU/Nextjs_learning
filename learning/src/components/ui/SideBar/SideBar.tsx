"use client"

interface PropsType extends React.HtmlHTMLAttributes<HTMLElement> { }

const SideBar: React.FC<PropsType> = ({
    ...props
}) => {
    return (
        <aside>SideBar</aside>
    )
};

export default SideBar


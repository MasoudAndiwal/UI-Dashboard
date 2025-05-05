interface props {
    title: string;
    description: string;
}
const Header =  ({title , description } : props) => {
    return (
        <h1>{title}</h1>
        <p>{description}</p>
    )
}
export default Header ;
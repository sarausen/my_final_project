import './style.css'

export const Burger = ({ onClick, className }) => {
    return (
        <button className={`${className} burger-btn`} onClick={onClick}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    )
}
// Button.jsx
import classnames from 'classnames';

function Button ({size, children}) {
    return (
        <button className={classnames("bg-black text-white font-bold py-2 px-4 rounded", {
    "text-xs": size === 'sm',
    "text-xl": size === 'lg',
    })}>
        {children}
    </button>
    )
};

export default Button;

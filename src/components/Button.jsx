// Button.jsx
import classnames from 'classnames';

function Button ({size, children}) {
    return (
        <button className={classnames("rounded-xl transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ... px-6 py-2", {
    "text-xs": size === 'sm',
    "text-xl": size === 'lg',
    })}>
        {children}
    </button>
    )
};

export default Button;

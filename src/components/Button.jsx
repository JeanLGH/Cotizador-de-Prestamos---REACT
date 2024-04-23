function Button({ operador, fn }) {
    return (
        <button
            className='w-16 h-16 bg-indigo-600 text-white text-2xl font-bold rounded-full'
            onClick={fn}
        >
            {operador}
        </button>
    )
} export default Button;
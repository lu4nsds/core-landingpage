import '../styles/main.css'
import '../styles/buttonCta.css'

interface ButtonProps {
    label: string,
    filled: boolean,
    action: Function
}

export default function ButtonCta({ label, filled = false, action }: ButtonProps) {

    if (filled) {
        return (
            <button
                className="action filled"
                onClick={() => { action() }}
            >
                {label}
            </button>
        )
    } else {
        return (
            <button
                className="action"
                onClick={() => { action() }}
            >
                {label}
            </button>
        )
    }
}
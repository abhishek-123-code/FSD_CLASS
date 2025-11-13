import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Counter App</h2>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '20px' 
            }}>
                <button 
                    onClick={decrement}
                    style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                        backgroundColor: '#ff9900',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    -
                </button>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</span>
                <button 
                    onClick={increment}
                    style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                        backgroundColor: '#ff9900',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter

export const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
    gap: '1rem',
};

export const heading = {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#222',
};

export const buttonContainer = {
    display: 'flex', 
    gap: '1rem'
};

export const button = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
};

export const button1 = {
    ...button,
    backgroundColor: '#007bff'
};

export const button2 = {
    ...button,
    backgroundColor: '#dc3535ff'
};
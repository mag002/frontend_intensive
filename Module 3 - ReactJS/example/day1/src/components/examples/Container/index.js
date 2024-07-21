function Container({ children }) {
    // Props - State
    const darkMode = false;
    return <div className="container" style={{ backgroundColor: darkMode ? 'black' : 'lightcoral' }}>
        <h1>Title</h1>
        {children}
        <hr />
    </div>
}
export default Container
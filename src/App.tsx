
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to da app!</h1>
            <MyButton 
                title = "I'm a button"
                />
        </div>
    )
}

function MyButton({title}: {title: string}) {
    return (
        <button>{title}</button>
    );
}

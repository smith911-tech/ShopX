
export default function Cart(){
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    return(
        <>
            {
                cartItems.map((item) => (
                    <div key={item.id}>
                    <h2>{item.name}</h2>
                    </div>
                ))
            }
        </>
    )
}
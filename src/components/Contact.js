const Contact =() =>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact US Page </h1>
            <form>
       <input type="text" className="border border-black p-2 m-2" placeholder="name">

       </input  >
       <input className="border border-black p-2 m-2" placeholder="message">
       </input>
            </form>

            <button className="border border-black p-2 m-2">Submit</button>
            </div>
    )
}
export default Contact;
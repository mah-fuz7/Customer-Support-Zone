export default function Navbar(){
    return(
        <div>
         
         <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className="btn bg-[#422AD5] rounded-sm text-white font-bold ">+ New Ticket</button>
    </ul>
  </div>
</div>

        </div>
    )
}
import UserButton from "./UserButton"
import MenuButton from "./MenuButton"
import SearchButton from "./SearchButton"


function PageHeader() {
    return(
        <div className="flex flex-row">
            <div className="basis-auto"><MenuButton /></div>
            <div className="basis-2/12"></div>
            <div className="basis-8/12"><input type="text" className="size-full h-auto my-1 rounded-full border text-lg pl-3" id="searchText" placeholder="Search Here"></input></div>
            <div className="basis-auto"><SearchButton /></div>
            <div className="basis-2/12"></div>
            <div className="basis-auto"><UserButton /></div>
        </div>
    )
}

export default PageHeader
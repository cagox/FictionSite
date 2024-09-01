import UserButton from "./UserButton"
import MenuButton from "./MenuButton"
import SearchButton from "./SearchButton"


function PageFooter() {
    return(
        <div className="flex flex-row ">
            <div className="basis-1/12 bg-red-500"></div>
            <div className="basis-3/12 p-5">
                <div>Created By Cagox</div>
                <div>Powered By React</div>
                <div>Styled With Tailwind</div>
                <div>See on GitHub</div>
            </div>
            <div className="basis-full bg-red-500"></div>
            <div className="basis-3/12 p-5">
                <div>About</div>
                <div>Contact Us</div>
                <div>Help</div>
            </div>
            <div className="basis-1/12 bg-red-500"></div>
        </div>
    ) /* The red blocks are there to make the space holders visible while I design the page.*/
}

export default PageFooter
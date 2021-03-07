import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

export const Search = () => {
    const [searchText, setSearchText] = useState('')
    const onSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    return (
        <div>
            <TextField id="search" value={searchText} onChange={onSearchChange} variant="outlined" placeholder='Поиск' />
        </div>
    )
}
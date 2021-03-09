import React, {FC, useState} from "react";
import TextField from "@material-ui/core/TextField";

type propsType = {
    findCountries: (text: string)=> void
}
export const Search: FC<propsType> = (props) => {
    const [searchText, setSearchText] = useState<string>('')
    const onSearchChange = (event) => {
        setSearchText(event.target.value);
        props.findCountries(event.target.value)
    }
    return (
        <div>
            <TextField id="search" value={searchText} onChange={onSearchChange} variant="outlined" placeholder='Поиск' />
        </div>
    )
}
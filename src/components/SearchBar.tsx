import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import { useRef } from "react";

interface Props {
     onSearch: (search: string) => void;

}
const SearchBar = ({onSearch}: Props) => {
 const ref = useRef<HTMLInputElement>(null);

  return (
     <form style={{width: '100%'}} onSubmit={(e) => {
          e.preventDefault();
          if(ref.current){
               onSearch(ref.current.value);
          } 
     }}>
     <InputGroup>
     <InputLeftElement pointerEvents="none" children={<BsSearch />} />
     <Input ref={ref} borderRadius={20} placeholder={"Search games..."} variant="filled" />
     </InputGroup>
     </form>
  )
}

export default SearchBar

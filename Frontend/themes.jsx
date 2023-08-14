import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsMoonFill , BsSunFill} from "react-icons/bs"

export const colors = {
  dark: {
    background: "#483d8b",
    text: "white",
    mainColor : "#9288F8",
    hover : "a8a1e9"
  },
  light: {
    background: "#ff8c00",
    text: "black",
    mainColor : "#8062D6",
    hover : "a8a1e9"
    
  },
  Link : {
    textdecoration : "none"
  }
};
function Theme(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (

      <div className={props.className}>
        <Button variant={"ghost"} onClick={toggleColorMode}>
         {colorMode === "dark" ? <BsMoonFill color="white" /> : <BsSunFill color="black" />  }
        </Button>
      </div>

  );
}
export default Theme;
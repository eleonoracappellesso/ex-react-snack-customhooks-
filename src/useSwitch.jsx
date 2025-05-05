import { useState } from "react";

export default function useSwitch() {

    const [state, setState] = useState(false);

    const toggle = () => setState(prev => !prev);

    return [state, toggle];

}
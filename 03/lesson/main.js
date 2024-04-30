

import {renderCounter} from "./components/counter/renderCounter.js"
import {setCallback} from "./data/data.js";

renderCounter();
setCallback(renderCounter)
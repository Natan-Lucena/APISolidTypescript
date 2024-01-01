import { container } from "tsyringe";

import { IDateProvider } from "./dateProvider/IDateProvider";
import { DayJsDateProvider } from "./dateProvider/implementations/DayJsDateProvider";

container.registerSingleton<IDateProvider>("DateProvider", DayJsDateProvider);

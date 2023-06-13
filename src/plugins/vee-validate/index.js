import { Field, Form, ErrorMessage, configure } from "vee-validate";
import './rules'; 

export function setupVeeValidator(AppInstance) {
    // 掛載 Global 的 VeeValidate 元件
    AppInstance.component( "VField", Field );
    AppInstance.component( "VForm", Form );
    AppInstance.component( "VErrMsg", ErrorMessage );
};
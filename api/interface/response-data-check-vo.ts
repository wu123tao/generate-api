/* tslint:disable */
/* eslint-disable */
/**
 * V-PLUS
 * <div_style=\'font-size:14px;color:red;\'>RESTFUL_APIS</div>
 *
 * The version of the OpenAPI document: 1.0
 * Contact: xxx@qq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// 789
// @ts-ignore
import type { CheckVo } from './check-vo';

/**
 * 122
 * 
 * @export
 * @interface ResponseDataCheckVo
 */
export interface ResponseDataCheckVo {
    /**
     * 是否成功
     * @type {number}
     * @memberof ResponseDataCheckVo
     */
    'code'?: number;
    /**
     * 
     * @type {CheckVo}
     * @memberof ResponseDataCheckVo
     */
    'data'?: CheckVo;
    /**
     * 提示信息
     * @type {string}
     * @memberof ResponseDataCheckVo
     */
    'message'?: string;
}

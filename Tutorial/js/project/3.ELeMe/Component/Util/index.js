/**
 * Created by wangzhen on 17/5/26.
 */

import {
    Dimensions
} from 'react-native'

var {width, height} = Dimensions.get('window');

const basePx = 375;

function px2dp(px) {
    return px *  width / basePx
}

module.exports = {
    px2dp: px2dp,
    width: width,
    height: height
}
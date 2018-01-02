/**
 * Created by lee on 2017/12/27.
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

var Dimensions = require('Dimensions');//获取屏幕宽高
var PixelRatio = require('PixelRatio');//获取像素密度

class PictureBox extends Component {
    render() {
        return (
            <View>
                <Image source={require('./img/authorize_tick.png')}/>
                <Image style={styles.image} source={{uri:'http://s1.jikexueyuan.com/common/images/logo_c8caff4.png'}} />
            </View>
        );
    }
}

class FlexView extends Component {
    render () {
        return (
            <View>
                <View style={styles.box} >
                    <View style={[styles.circle, {
                        position: 'absolute',
                        top: 50,
                        left: 50
                    }]}>
                    </View>
                </View>

                <View style={styles.box} >
                    <View style={[styles.circle, {
                        position: 'relative',
                        top: 50,
                        left: 50,
                        marginLeft: 50
                    }]}>
                    </View>
                </View>
            </View>
        );
    }
}

class TextBox extends Component {
    render() {
        return (
            <Text style={styles.boxText}>
                {this.props.children}
            </Text>
        );
    }
}

export default class FlexBox extends Component {
    render() {
        var {
            width,
            height
        } = Dimensions.get('window'); //获取屏幕宽高

        var pr = PixelRatio.get(); //获取像素密度
        //引入图片:1.require('路径')
        //        2.网络:image必须指定宽高才能显示
        return(
            <View style={styles.container}>
                <PictureBox/>
                <View>
                    <Text style={{fontWeight: 'bold'}}>react native 样式布局{'\n'}
                    <TextBox style={styles.boxText} deparam="params is">red green yellow</TextBox>
                    </Text>
                </View>
                <Text numberOfLines={2} style={{padding: 30}}>
                    The React tab won't show up if the site doesn't use React, or if React can't communicate with the devtools. When the page loads, the devtools sets a global named __REACT_DEVTOOLS_GLOBAL_HOOK__, then React communicates with that hook during initialization. You can test this on the React website or by inspecting Facebook.
                </Text>
                <Text>
                    window.width = {width}{'\n'}
                    window.height = {height}{'\n'}
                    window.PixelRatio = {pr}
                </Text>
                <FlexView/>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#f5fcff',
    },
    box: {
        backgroundColor: '#333333',
        height: 80,
        alignSelf: 'stretch',
        marginBottom: 10
    },
    circle: {
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderRadius: 5
    },
    image: {
        width: 229,
        height: 84,
        backgroundColor: 'green'
    },
    mail: {
        width:16,
        height:16,
    },
    boxText: {
        color: 'red',
        fontSize: 12,
    }
});
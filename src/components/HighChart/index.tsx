import {useAppTheme} from '@hooks/theme';
import React, {FC, RefObject} from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import {WebView} from 'react-native-webview';
import makeStyles from './style';

type Props = {
  style: StyleProp<ViewStyle>;
  config: Record<string, any>;
  scrollViewRef?: RefObject<ScrollView>;
  webviewStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  isFixedPosition?: boolean;
  isFormatLabel?: boolean;
};

export const HighChart: FC<Props> = ({
  style: propStyle,
  config,
  scrollViewRef,
  webviewStyle,
  children,
  isFixedPosition,
  isFormatLabel,
}) => {
  const theme = useAppTheme();
  const style = makeStyles(theme);
  const highchartsConfig = `
    <!DOCTYPE html>
    <html>

    <head>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/annotations.js"></script>
        <script src="https://code.highcharts.com/highcharts-more.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <style media="screen" type="text/css">
        #container {
            width:100%;
            height:100%;
            top:0;
            left:0;
            right:0;
            bottom:0;
            position:absolute;
            user-select: none;
            -webkit-user-select: none;
        }
        </style>
    </head>

    <body>
        <figure class="highcharts-figure">
            <div id="container"></div>
        </figure>
        <script>
            Highcharts.setOptions({
                lang: {
                    thousandsSep: ','
                },

                ${
                  isFixedPosition
                    ? `tooltip: {
                  positioner: function(_, _, point) {
                    return {
                      x: point.plotX - 15,
                      y: this.chart.plotHeight + this.chart.plotBottom
                    }
                  }
                },`
                    : ''
                }

                 ${
                   isFormatLabel
                     ? `yAxis: {
                        labels: {
                          formatter: function () {
                            if(this.value >= 10000){
                              return new Intl.NumberFormat('ja-JP').format(this.value / 10000);
                            }
                            return new Intl.NumberFormat('ja-JP', {maximumFractionDigits: 1}).format(this.value / 10000);
                          }
                        },
                      },`
                     : ''
                 }

               plotOptions:{
                series: {
                  events: {
                    legendItemClick: function(e) {
                      e.preventDefault();
                    }
                  }
                },
                area: {
                  tooltip: {
                    pointFormatter: function () {
                      const formatNumber = (value) => {
                        if (value >= 10000) {
                          return new Intl.NumberFormat('ja-JP').format(Math.round(value))+'万円';
                        } else {
                          return new Intl.NumberFormat('ja-JP').format(Math.round(value*10000))+'円';
                        }
                      }
                      return '<div style="display: flex; flex-direction: row; justify-content: space-between; color: #272727; font-weight: bold; font-size: 12px; line-height: 14.4px; margin-top: 8px; font-family: Hiragino Kaku Gothic ProN;"><div style="width: 72px; display: flex; flex-direction: row; justify-content: space-between;"><div>'+this.series.name+'</div><div>：</div></div><div style="color: '+this.series.color+'; font-size: 14px;">'+formatNumber(this.y)+'</div></div>';
                    }
                  }
                }
              }
            });
            Highcharts.AST.allowedReferences.push('data:');
            Highcharts.chart('container', ${JSON.stringify(config)});
            
        </script>
    </body>

    </html>
  `;

  return (
    <View style={propStyle}>
      {children}
      <WebView
        textZoom={80}
        style={[style.full, webviewStyle]}
        source={{html: highchartsConfig}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        scrollEnabled={false}
        automaticallyAdjustContentInsets={true}
        onTouchStart={() =>
          scrollViewRef?.current?.setNativeProps({scrollEnabled: false})
        }
        onTouchEnd={() =>
          scrollViewRef?.current?.setNativeProps({scrollEnabled: true})
        }
        overScrollMode="never"
      />
    </View>
  );
};

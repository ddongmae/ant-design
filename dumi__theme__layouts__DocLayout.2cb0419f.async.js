"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{438746:function($n,ln,o){o.d(ln,{Z:function(){return cn}});var en=o(97857),y=o.n(en),sn=o(952677),z=o.n(sn),Mn=o(805574),Q=o.n(Mn),pn=o(830084),d=o(667294),c=o(302559);function _(f){return f.replace("-cn","").replace(/\/$/,"")}function cn(){var f=(0,pn.TH)(),q=f.search,En=(0,c.Z)(),u=Q()(En,2),x=u[1],w=d.useCallback(function(n,S){var Z=_(n);if(x==="cn"&&(Z="".concat(Z,"-cn")),q&&(Z="".concat(Z).concat(q)),S){var O;z()(S)==="object"?O=S[x]:O=S,Z="".concat(Z,"#").concat(O)}return Z},[x,q]);return y()(y()({},f),{},{pathname:_(f.pathname),getLink:w})}},148050:function($n,ln,o){o.d(ln,{Z:function(){return cn}});var en=o(168400),y=o.n(en),sn=o(667294),z=o(186548),Mn=o(65630),Q=o(879587),pn=o(785893),d,c="https://github.com/ant-design/ant-design/edit/master/",_=(0,Mn.kc)(function(f){var q=f.token,En=f.css,u=q.colorIcon,x=q.colorText,w=q.iconCls;return{editButton:En(d||(d=y()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),w,u,x)}});function cn(f){var q=f.title,En=f.filename,u=_(),x=u.styles;return(0,pn.jsx)(Q.Z,{title:q,children:(0,pn.jsx)("a",{className:x.editButton,href:"".concat(c).concat(En),target:"_blank",rel:"noopener noreferrer",children:(0,pn.jsx)(z.Z,{})})})}},472638:function($n,ln,o){var en=o(97857),y=o.n(en),sn=o(952677),z=o.n(sn),Mn=o(805574),Q=o.n(Mn),pn=o(513769),d=o.n(pn),c=o(667294),_=o(830084),cn=o(574865),f=o.n(cn),q=o(785893),En=["to","children"],u=(0,c.forwardRef)(function(x,w){var n=x.to,S=x.children,Z=d()(x,En),O=(0,c.useTransition)(),xn=Q()(O,2),Tn=xn[0],P=xn[1],J=(0,_.s0)(),hn=(0,_.TH)(),jn=hn.pathname,tn=(0,c.useMemo)(function(){return z()(n)==="object"?"".concat(n.pathname||jn).concat(n.search||"").concat(n.hash||""):n},[n]),Zn=function(Fn){tn.startsWith("http")||!Fn.metaKey&&!Fn.ctrlKey&&!Fn.shiftKey&&(Fn.preventDefault(),P(function(){J(tn)}))};return(0,c.useLayoutEffect)(function(){Tn?f().start():f().done()},[Tn]),(0,q.jsx)("a",y()(y()({ref:w,href:tn,onClick:Zn},Z),{},{children:S}))});ln.Z=u},334230:function($n,ln,o){o.r(ln),o.d(ln,{default:function(){return br}});var en=o(805574),y=o.n(en),sn=o(294184),z=o.n(sn),Mn=o(727484),Q=o.n(Mn),pn=o(533852),d=o(830084),c=o(667294),_=o(715778),cn=o(773036),f=o(302559),q=o(438746),En=o(168400),u=o.n(En),x=o(370917),w=o(65630),n=o(785893),S,Z={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},O=function(){var e=(0,w.Fg)(),t=function l(s){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return h<=10?`
.palette-`.concat(s,"-").concat(h,` {
  background: `).concat(e["".concat(s,"-").concat(h)],`;
}
`).concat(l(s,h+1),`
    `):""},a=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(Z[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,n.jsx)(x.xB,{styles:(0,x.iv)(S||(S=u()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},xn=O,Tn,P=function(){return(0,n.jsx)(x.xB,{styles:(0,x.iv)(Tn||(Tn=u()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},J,hn=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(J||(J=u()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},jn,tn=function(){var r=(0,w.Fg)(),e=r.headerHeight,t=r.margin;return(0,n.jsx)(x.xB,{styles:(0,x.iv)(jn||(jn=u()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      html {
        scroll-padding-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }
    `])),e+t)})},Zn=o(510274),Qn,Fn=function(){var e=(0,w.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(x.xB,{styles:(0,x.iv)(Qn||(Qn=u()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new Zn.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Zn.C(a).setAlpha(.75).toHexString(),t,t,new Zn.C(a).setAlpha(.75).toHexString(),t,t,t,t,new Zn.C(a).setAlpha(.6).toHexString(),t,t,t)})},qn=Fn,ne,ee=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(ne||(ne=u()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},zn,p=function(){var e=(0,w.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(x.xB,{styles:(0,x.iv)(zn||(zn=u()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},M=p,i,b=function(){var r=(0,w.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(x.xB,{styles:(0,x.iv)(i||(i=u()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},k,V=function(){var r=(0,w.Fg)(),e=r.iconCls;return(0,n.jsx)(x.xB,{styles:(0,x.iv)(k||(k=u()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},R,F=function(){return(0,n.jsx)(x.xB,{styles:(0,x.iv)(R||(R=u()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},W,j=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(W||(W=u()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},mn,on=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(mn||(mn=u()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},rn,fn=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(rn||(rn=u()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},vn,bn="dumi-default-",yn=function(){var r=(0,w.Fg)();return(0,n.jsx)(x.xB,{styles:(0,x.iv)(vn||(vn=u()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),bn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,bn,r.colorBgElevated,r.colorBgElevated,bn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},Y,An=function(){return(0,n.jsx)(x.xB,{styles:(0,x.iv)(Y||(Y=u()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Cn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(hn,{}),(0,n.jsx)(tn,{}),(0,n.jsx)(qn,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(M,{}),(0,n.jsx)(b,{}),(0,n.jsx)(V,{}),(0,n.jsx)(F,{}),(0,n.jsx)(j,{}),(0,n.jsx)(on,{}),(0,n.jsx)(fn,{}),(0,n.jsx)(An,{}),(0,n.jsx)(xn,{}),(0,n.jsx)(P,{}),(0,n.jsx)(yn,{})]})},dn=Cn,Kn=o(857278),Gn=o(430932),On=o(985093),Bn=o(115668),_n=o(642207),te=o(301210),an=o(13923),Dn=o(825035),Un=o(937993),le=o(448118),se=o(938545),ue=o(569980),pe=o(391298),ve=o(630770),Vn=o(438199),me=o(693399),oe="ant-where-checker",be={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Me(){var r=(0,f.Z)(be),e=y()(r,1),t=e[0],a=c.useState(!0),l=y()(a,2),s=l[0],h=l[1];return c.useEffect(function(){var g=document.createElement("p");g.className=oe,g.style.position="fixed",g.style.pointerEvents="none",g.style.visibility="hidden",g.style.width="0",document.body.appendChild(g),(0,me.updateCSS)(`
:where(.`.concat(oe,`) {
  content: "__CHECK__";
}
    `),oe);var v=getComputedStyle(g),m=v.content;h(String(m).includes("CHECK")),document.body.removeChild(g),(0,me.removeCSS)(oe)},[]),s?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var he,Te,$t={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Ut=function(){var e=(0,c.useContext)(Vn.Z),t=e.isMobile;return(0,w.kc)(function(a){var l=a.token,s=a.css,h=new Zn.C((0,ve.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:s(he||(he=u()([`
      background: `,`;
    `])),h),footer:s(Te||(Te=u()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),h,l.colorTextSecondary,l.colorText,t?60:0,t?20:0,l.marginXXL,l.fontSize)}})()},Kt=function(){var e=(0,q.Z)(),t=(0,f.Z)($t),a=y()(t,2),l=a[0],s=a[1],h=Ut(),g=h.styles,v=e.getLink,m=c.useMemo(function(){var E=s==="cn",D={title:(0,n.jsx)(d._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:E?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:E?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:E?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(d._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(d._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(d._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(d._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(d._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(d._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(d._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(d._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},C={title:(0,n.jsx)(d._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Kn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Gn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(On.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(d._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};E&&C.items.push({icon:(0,n.jsx)(_n.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.work_with_us"}),url:v("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:d.rU});var H={title:(0,n.jsx)(d._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(te.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(an.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.change-log"}),url:v("/changelog"),LinkComponent:d.rU},{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.faq"}),url:v("/docs/react/faq"),LinkComponent:d.rU},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(le.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(se.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},G={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(d._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(d._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(d._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(d._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(d._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(d._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(ue.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.theme"}),url:v("/theme-editor"),LinkComponent:d.rU}]};return[D,C,H,G]},[s,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(pe.Z,{columns:m,className:g.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(Me,{})]})},ye=Kt,Gt=o(97857),$=o.n(Gt),Vt=o(9783),we=o.n(Vt),De=o(660532),Xt=o(24569),Yt=o(469181),Jt=o(344682),Qt=o(664095),ge=o(883458),qt=o(316165),no="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",eo="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",to=function(e){return(0,n.jsx)(qt.Z,$()($()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?no:eo})})}))},Le=to,Hn=o(373638),Ne,Ae,oo=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.headerHeight,l=e.colorTextHeading,s=e.fontFamily,h=e.mobileMaxWidth;return{logo:t(Ne||(Ne=u()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,l,s,a,l,h),title:t(Ae||(Ae=u()([`
      line-height: 32px;
    `])))}}),ro=function(e){var t=e.isZhCN,a=(0,d.TH)(),l=a.search,s=oo(),h=s.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(d.rU,{to:Hn.J1("/",t,l),className:h.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:h.title,children:"Ant Design"})]})})},ao=ro,io=o(280882),lo=o(963918),Xn=o(988872),Be,Ie,Oe,He,Ze=(0,w.kc)(function(r){var e=r.css,t=r.token;return{smallStyle:e(Be||(Be=u()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Ie||(Ie=u()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Oe||(Oe=u()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(He||(He=u()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),_e=function(){var e=Ze(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(d._H,{id:"app.implementation.community"}),")"]})},Re=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(_e,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(_e,{})]}),key:"vue"}]},so=function(e){var t=e.isRTL,a=Ze(),l=a.styles;return(0,n.jsx)(lo.Z,{menu:{items:Re()},placement:"bottomRight",children:(0,n.jsxs)(Xn.ZP,{size:"small",children:[(0,n.jsx)(d._H,{id:"app.header.menu.more"}),(0,n.jsx)(io.Z,{className:z()(t?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},co=so,uo=o(719632),Yn=o.n(uo),Fe=o(923232),Wn=o(472638),We,$e,po={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},mo=(0,w.kc)(function(r){var e=r.token,t=e.antCls,a=e.iconCls,l=e.fontFamily,s=e.headerHeight,h=e.menuItemBorder,g=e.colorPrimary,v=e.colorText;return{nav:(0,w.iv)(We||(We=u()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,t,t,t,40+12*2,s,s,h,v,t,a,t,g,t,t),popoverMenuNav:(0,w.iv)($e||($e=u()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),ho=function(r){var e,t,a,l=r.isZhCN,s=r.isMobile,h=r.responsive,g=r.directionText,v=r.onLangChange,m=r.onDirectionChange,E=(0,d.TH)(),D=E.pathname,C=E.search,H=(0,f.Z)(po),G=y()(H,1),I=G[0],A=(0,d.yh)(),B=((e=A["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],L=mo(),T=L.styles,U=s?"inline":"horizontal",Sn=D.split("/").filter(function(N){return N}).slice(0,-1).join("/"),gn=Sn||"home";D.startsWith("/changelog")?gn="docs/react":D.startsWith("/docs/resources")&&(gn="docs/resources");var kn,Ln=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(d._H,{id:"app.header.lang"}),onClick:v,key:"switch-lang"},{label:g,onClick:m,key:"switch-direction"}].concat(Yn()(Re()));s?kn=Ln:h==="crowded"&&(kn=[{label:(0,n.jsx)(De.Z,{}),key:"additional",children:Yn()(Ln)}]);var In=[{label:(0,n.jsx)(Wn.Z,{to:Hn.J1("/docs/spec/introduce",l,C),children:I.design}),key:"docs/spec"},{label:(0,n.jsx)(Wn.Z,{to:Hn.J1("/docs/react/introduce",l,C),children:I.development}),key:"docs/react"},{label:(0,n.jsx)(Wn.Z,{to:Hn.J1("/components/overview/",l,C),children:I.components}),key:"components"},B.length?{label:(0,n.jsx)(Wn.Z,{to:Hn.J1(B.sort(function(N,nn){return N.frontmatter.date>nn.frontmatter.date?-1:1})[0].link,l,C),children:I.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(Wn.Z,{to:Hn.J1("/docs/resources",l,C),children:I.resources}),key:"docs/resources"},l?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(Yn()((a=kn)!==null&&a!==void 0?a:[]));return(0,n.jsx)(Fe.Z,{mode:U,selectedKeys:[gn],className:T.nav,disabledOverflow:!0,items:In,style:{borderRight:0}})},Ue=o(879587),Ke,Ge,Ve,Xe,Ye,re="1.2em",go=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.colorText,l=e.colorBorder,s=e.colorBgContainer,h=e.colorBgTextHover,g=e.borderRadius,v=e.controlHeight,m=e.motionDurationMid;return{btn:t(Ke||(Ke=u()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,l,v,v,g,m,m,h,re,re,re),innerDiv:t(Ge||(Ge=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),re,re),labelStyle:t(Ve||(Ve=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),re,a,a),label1Style:t(Xe||(Xe=u()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,s),label2Style:t(Ye||(Ye=u()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),xo=function(e){var t=e.label1,a=e.label2,l=e.tooltip1,s=e.tooltip2,h=e.value,g=e.pure,v=e.onClick,m=go(),E=m.styles,D=E.btn,C=E.innerDiv,H=E.labelStyle,G=E.label1Style,I=E.label2Style,A=(0,n.jsx)("button",{onClick:v,className:D,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[g&&(h===1?t:a),!g&&(0,n.jsxs)("div",{className:C,children:[(0,n.jsx)("span",{className:z()(H,h===1?G:I),children:t}),(0,n.jsx)("span",{className:z()(H,h===1?I:G),children:a})]})]})},"lang-button");return l||s?(0,n.jsx)(Ue.Z,{title:h===1?l:s,children:A}):A},je=xo,Je,Qe,qe,nt=1120,et=1200,fo=(0,w.kc)(function(r){var e=r.token,t=r.css,a="#ced4d9";return{header:t(Je||(Je=u()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(Qe||(Qe=u()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(qe||(qe=u()([`
      width: 16px;
    `]))),popoverMenu:we()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),vo=function(){var e=(0,f.Z)(),t=y()(e,2),a=t[1],l=(0,d.WF)(),s=l.pkg,h=(0,Hn.Is)(),g=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),v=y()(g,2),m=v[0],E=v[1],D=(0,c.useContext)(Vn.Z),C=D.direction,H=D.isMobile,G=D.updateSiteConfig,I=(0,c.useRef)(null),A=(0,d.TH)(),B=A.pathname,L=A.search,T=fo(),U=T.styles,Sn=(0,c.useCallback)(function(){E(function(un){return $()($()({},un),{},{menuVisible:!1})})},[]),gn=(0,c.useCallback)(function(){E(function(un){return $()($()({},un),{},{windowWidth:window.innerWidth})})},[]),kn=(0,c.useCallback)(function(){E(function(un){return $()($()({},un),{},{menuVisible:!0})})},[]),Ln=(0,c.useCallback)(function(un){E(function(Jn){return $()($()({},Jn),{},{menuVisible:un})})},[]),In=function(){G({direction:C!=="rtl"?"rtl":"ltr"})};(0,c.useEffect)(function(){Sn()},[A]),(0,c.useEffect)(function(){return gn(),window.addEventListener("resize",gn),function(){window.removeEventListener("resize",gn),I.current&&clearTimeout(I.current)}},[]);var N=(0,c.useCallback)(function(un){var Jn=window.location.href,Cr=window.location.pathname;if(/overview/.test(Cr)&&/0?[1-39][0-3]?x/.test(un)){window.location.href=Jn.replace(window.location.origin,un).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(un)?"":"/react","/introduce")).replace(/\/$/,"");return}var Pe=new URL(Jn.replace(window.location.origin,un));Pe.host.includes("antgroup")&&(window.location.href="".concat(Pe.href.replace(/\/$/,""),"/")),window.location.href=Pe.href.replace(/\/$/,"")},[]),nn=(0,c.useCallback)(function(){var un="".concat(window.location.protocol,"//"),Jn=window.location.href.slice(un.length);Hn.Fy()&&localStorage.setItem("locale",Hn.KE(B)?"en-US":"zh-CN"),window.location.href=un+Jn.replace(window.location.pathname,Hn.J1(B,!Hn.KE(B),L).pathname)},[A]),Pn=(0,c.useMemo)(function(){return C!=="rtl"?"RTL":"LTR"},[C]),Rn=(0,c.useMemo)(function(){return C==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[C]),Nn=m.menuVisible,ae=m.windowWidth,K=m.searching,X=$()(we()({},s.version,s.version),h==null?void 0:h.docVersions),wn=Object.keys(X).map(function(un){return{value:X[un],label:un}}),ie=["","index","index-cn"].includes(B),yr=a==="cn",wr=C==="rtl",Ee=null;ae<nt?Ee="crowded":ae<et&&(Ee="narrow");var jr=z()(U.header,"clearfix",{"home-header":ie}),ze={isZhCN:yr,isRTL:wr},Ft=(0,n.jsx)(ho,$()($()({},ze),{},{responsive:Ee,isMobile:H,directionText:Pn,onLangChange:nn,onDirectionChange:In}),"nav"),de=[Ft,(0,n.jsx)(Yt.Z,{className:"version",size:"small",defaultValue:s.version,onChange:N,dropdownStyle:Rn,popupMatchSelectWidth:!1,getPopupContainer:function(Jn){return Jn.parentNode},options:wn},"version"),(0,n.jsx)(co,$()({},ze),"more"),(0,n.jsx)(je,{onClick:nn,value:Hn.KE(B)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(je,{onClick:In,value:C==="rtl"?2:1,label1:(0,n.jsx)(Le,{className:U.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Le,{className:U.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(je,{value:1,label1:(0,n.jsx)(te.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ae<nt?de=K?[]:[Ft]:ae<et&&(de=K?[]:de);var Wt=ie?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:jr,children:[H&&(0,n.jsx)(Jt.Z,{overlayClassName:U.popoverMenu,placement:"bottomRight",content:de,trigger:"click",open:Nn,arrow:{arrowPointAtCenter:!0},onOpenChange:Ln,children:(0,n.jsx)(De.Z,{className:"nav-phone-icon",onClick:kn})}),(0,n.jsxs)(Qt.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(ge.Z,$()($()({},Wt[0]),{},{children:(0,n.jsx)(ao,$()($()({},ze),{},{location:A}))})),(0,n.jsxs)(ge.Z,$()($()({},Wt[1]),{},{className:U.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Xt.ZP,{})}),!H&&de]}))]})]})},bo=vo,Sr=o(945462),yo=o(377376),xe=o(185209),wo=function(){var e=(0,d.eL)(),t=(0,c.useMemo)(function(){var h;if(!e.frontmatter.subtitle&&!e.frontmatter.title)h="404 Not Found - Ant Design";else{var g;h="".concat(e.frontmatter.subtitle||""," ").concat(((g=e.frontmatter)===null||g===void 0?void 0:g.title)||""," - Ant Design")}var v=e.frontmatter.description||"";return[h,v]},[e]),a=y()(t,2),l=a[0],s=a[1];return(0,n.jsxs)(d.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),s&&(0,n.jsx)("meta",{name:"description",content:s})]})},tt=wo,ot=o(148050),jo=o(823493),Co=o.n(jo),So=o(468990),ko=o(658192),rt,at,it,lt=["scroll","resize"],Eo=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.boxShadowSecondary,l=e.antCls;return{affixTabs:t(rt||(rt=u()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,l,l,l),affixTabsFixed:t(at||(at=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(it||(it=u()([`
      text-transform: capitalize;
    `])))}}),st=32,zo=function(){var e=c.useRef(null),t=c.useRef([]),a=c.useState(!1),l=y()(a,2),s=l[0],h=l[1],g=c.useState(null),v=y()(g,2),m=v[0],E=v[1],D=Eo(),C=D.styles,H=C.affixTabs,G=C.affixTabsFixed,I=C.span;function A(L){var T=document.getElementById(L);if(T){var U=T.offsetTop-e.current.offsetHeight-st;(0,ko.Z)(U)}}c.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(L){var T=L.id;return T}),h(!0)},[]),c.useEffect(function(){var L=decodeURIComponent((location.hash||"").slice(1));L&&A(L)},[s]);var B=c.useMemo(function(){function L(){for(var T=window,U=T.scrollY,Sn=e.current.offsetHeight,gn=t.current.length-1;gn>=0;gn-=1){var kn=t.current[gn],Ln=document.getElementById(kn),In=Ln.offsetTop-Sn-st;if(In<=U){E(kn);return}}E(null)}return Co()(L)},[]);return c.useEffect(function(){return lt.forEach(function(L){return window.addEventListener(L,B)}),B(),function(){lt.forEach(function(L){return window.removeEventListener(L,B)})}},[]),(0,n.jsx)("div",{className:z()(H,m&&G),ref:e,children:(0,n.jsx)(So.Z,{activeKey:m,onChange:A,items:t.current.map(function(L){return{key:L,label:(0,n.jsx)("span",{className:I,children:L.replace(/-/g," ")})}})})})},Po=zo,ct,dt,ut,pt=40,fe=1208,Ce=24,Mo=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.antCls;return{resourcePage:t(ct||(ct=u()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),fe),resourceContent:t(dt||(dt=u()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),pt,fe,Ce,a),banner:t(ut||(ut=u()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),pt,fe,fe,Ce,Ce)}}),To=function(e){var t,a=e.children,l=Mo(),s=l.styles,h=(0,d.eL)();return(0,n.jsx)(cn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(yo.Z,{children:[(0,n.jsx)(tt,{}),(0,n.jsxs)("div",{id:"resources-page",className:s.resourcePage,children:[(0,n.jsx)(Po,{}),(0,n.jsxs)("div",{className:s.banner,children:[(0,n.jsxs)(xe.Z.Title,{style:{fontSize:30},children:[(t=h.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(ot.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:h.frontmatter.filename})]}),(0,n.jsx)("section",{children:h.frontmatter.description})]}),(0,n.jsx)("div",{className:s.resourceContent,children:a}),(0,n.jsx)(ye,{})]})]})})},Do=To,Lo=o(720841),No=o(538294),mt=o(575054),ht=o(796586),Ao=o(605071),Se=o(209269),Bo=o(217187),ce=o(618073),gt=o(206171),Io=o(844183),Oo=o(566254),Ho=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,d.yh)(),a=(0,q.Z)(),l=a.pathname,s=a.search,h=(0,d.tx)(),g=e.before,v=e.after,m=(0,c.useMemo)(function(){var E,D=Yn()(h!=null?h:[]);if(l.startsWith("/docs/spec")){var C=D.splice(0,1);D.push.apply(D,Yn()(C))}if(l.startsWith("/docs/react")){var H,G=(H=Object.entries(t).find(function(L){var T=y()(L,1),U=T[0];return U.startsWith("/changelog")}))===null||H===void 0?void 0:H[1];G&&D.splice(1,0,G[0])}if(l.startsWith("/changelog")){var I,A=(I=Object.entries(t).find(function(L){var T=y()(L,1),U=T[0];return U.startsWith("/docs/react")}))===null||I===void 0?void 0:I[1];A&&(D.unshift(A[0]),D.push.apply(D,Yn()(A.slice(1))))}var B=function(T){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return T&&U&&(0,n.jsx)(Io.Z,{color:T==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:T.replace("VERSION",Oo.Z)})};return(E=D==null?void 0:D.reduce(function(L,T){if(T!=null&&T.title)if(l.startsWith("/docs/spec")){var U,Sn,gn=T.children.reduce(function(N,nn){var Pn,Rn,Nn=(Pn=(Rn=nn.frontmatter)===null||Rn===void 0?void 0:Rn.type)!==null&&Pn!==void 0?Pn:"default";return N[Nn]||(N[Nn]=[]),N[Nn].push(nn),N},{}),kn=[];kn.push.apply(kn,Yn()((U=(Sn=gn.default)===null||Sn===void 0?void 0:Sn.map(function(N){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(N.link).concat(s),children:[g,N==null?void 0:N.title,v]}),key:N.link.replace(/(-cn$)/g,"")}}))!==null&&U!==void 0?U:[])),Object.entries(gn).forEach(function(N){var nn=y()(N,2),Pn=nn[0],Rn=nn[1];Pn!=="default"&&kn.push({type:"group",label:Pn,key:Pn,children:Rn==null?void 0:Rn.map(function(Nn){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(Nn.link).concat(s),children:[g,Nn==null?void 0:Nn.title,v]}),key:Nn.link.replace(/(-cn$)/g,"")}})})}),L.push({label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:kn})}else{var Ln;L.push({type:"group",label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:(Ln=T.children)===null||Ln===void 0?void 0:Ln.map(function(N){var nn,Pn;return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(N.link).concat(s),style:{display:"flex",alignItems:"center"},children:[g,(0,n.jsx)("span",{children:N==null?void 0:N.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(nn=N.frontmatter)===null||nn===void 0?void 0:nn.subtitle},"chinese"),B((Pn=N.frontmatter)===null||Pn===void 0?void 0:Pn.tag,!g&&!v),v]}),key:N.link.replace(/(-cn$)/g,"")}})})}else{var In=T.children||[];In.every(function(N){var nn;return N==null||(nn=N.frontmatter)===null||nn===void 0?void 0:nn.date})&&In.sort(function(N,nn){return N.frontmatter.date>nn.frontmatter.date?-1:1}),L.push.apply(L,Yn()(In.map(function(N){return{label:(0,n.jsxs)(Wn.Z,{to:"".concat(N.link).concat(s),style:{display:"flex",alignItems:"center"},children:[g,N==null?void 0:N.title,B(N.frontmatter.tag,!g&&!v),v]}),key:N.link.replace(/(-cn$)/g,"")}})))}return L},[]))!==null&&E!==void 0?E:[]},[h,t,l,s,e]);return[m,l]},xt=Ho,ft,vt,bt,yt,Zo=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.colorSplit,l=e.iconCls,s=e.fontSizeIcon;return{prevNextNav:t(ft||(ft=u()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(vt||(vt=u()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,s),prevNav:t(bt||(bt=u()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(yt||(yt=u()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),_o=function r(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var l;return t.concat((l=r(a.children))!==null&&l!==void 0?l:[])}return t.concat(a)},[]):null},Ro=function(e){var t=e.rtl,a=Zo(),l=a.styles,s={className:"footer-nav-icon-before"},h={className:"footer-nav-icon-after"},g=t?(0,n.jsx)(ce.Z,$()({},s)):(0,n.jsx)(gt.Z,$()({},s)),v=t?(0,n.jsx)(gt.Z,$()({},h)):(0,n.jsx)(ce.Z,$()({},h)),m=xt({before:g,after:v}),E=y()(m,2),D=E[0],C=E[1],H=(0,c.useContext)(Vn.Z),G=H.isMobile,I=(0,c.useMemo)(function(){var T=_o(D);if(!T)return[null,null];var U=-1;return T.forEach(function(Sn,gn){Sn&&Sn.key===C&&(U=gn)}),[T[U-1],T[U+1]]},[D,C]),A=y()(I,2),B=A[0],L=A[1];return G?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[B&&c.cloneElement(B.label,{className:z()(l.pageNav,l.prevNav,B.className)}),L&&c.cloneElement(L.label,{className:z()(l.pageNav,l.nextNav,L.className)})]})},Fo=Ro,Wo=o(302281),$o=o(15060),Uo=o(889812),wt,jt,Ct,Ko=(0,w.kc)(function(r){var e=r.token,t=r.css;return{history:t(wt||(wt=u()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(jt||(jt=u()([`
    // white-space: pre;
  `]))),ref:t(Ct||(Ct=u()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),Go={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function Vo(r){var e=r.changelog,t=e===void 0?"":e,a=r.refs,l=a===void 0?[]:a,s=r.styles,h=c.useMemo(function(){for(var g=[],v=!1,m="",E=0;E<t.length;E+=1){var D=t[E];if(D!=="`")m+=D;else{var C=m;v&&(C=(0,n.jsx)("code",{children:C})),g.push(C),m="",v=!v}}return g.push(m),g},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:h}),l==null?void 0:l.map(function(g){var v;return(0,n.jsxs)("a",{className:s.ref,href:g,target:"_blank",rel:"noreferrer",children:["#",(v=g.match(/^.*\/(\d+)$/))===null||v===void 0?void 0:v[1]]},g)})]})}function Xo(r,e){var t=(0,Uo.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return o.e(2104).then(o.t.bind(o,332104,19))}}:{key:"component-changelog-en",request:function(){return o.e(5212).then(o.t.bind(o,365212,19))}});return(0,c.useMemo)(function(){var a=r.replace(/-/g,""),l=Object.keys(t).find(function(s){return s.toLowerCase()===a.toLowerCase()});return t[l]},[t,r])}function Yo(r){var e,t=r.pathname,a=t===void 0?"":t,l=(0,f.Z)(Go),s=y()(l,2),h=s[0],g=s[1],v=c.useState(!1),m=y()(v,2),E=m[0],D=m[1],C=Ko(),H=C.styles,G=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",I=Xo(G,g),A=c.useMemo(function(){var B={};return I==null||I.forEach(function(L){B[L.version]=B[L.version]||[],B[L.version].push(L)}),Object.keys(B).map(function(L){var T=B[L];return{children:(0,n.jsxs)(xe.Z,{children:[(0,n.jsx)("h4",{children:L}),(0,n.jsx)("ul",{children:T.map(function(U,Sn){return(0,n.jsx)("li",{className:H.li,children:(0,n.jsx)(Vo,$()($()({},U),{},{styles:H}))},Sn)})})]})}})},[I]);return!I||!I.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Xn.ZP,{className:H.history,icon:(0,n.jsx)(an.Z,{}),onClick:function(){D(!0)},children:h.changelog}),(0,n.jsx)(Wo.Z,{title:h.changelog,extra:(0,n.jsx)(Wn.Z,{style:{fontSize:14},to:"/changelog".concat(g==="cn"?"-cn":""),children:h.full}),open:E,width:"40vw",onClose:function(){D(!1)},destroyOnClose:!0,children:(0,n.jsx)($o.Z,{items:A})})]})}var Jo=function(r){return(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsx)(Yo,$()({},r))})},Qo=o(524229),St=o(211646),qo=o(294047),kt=o(315816),nr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Et=nr,zt,Pt,Mt,Tt,Dt,Lt,Nt,ke="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",er=(0,w.kc)(function(r){var e=r.token,t=r.css;return{card:t(zt||(zt=u()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Pt||(Pt=u()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Mt||(Mt=u()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Tt||(Tt=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Dt||(Dt=u()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Lt||(Lt=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Nt||(Nt=u()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),tr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},or=function(e){var t=e.zhihuLink,a=e.yuqueLink,l=e.juejinLink,s=(0,f.Z)(tr),h=y()(s,1),g=h[0],v=er(),m=v.styles,E=m.card,D=m.bigTitle,C=m.cardBody,H=m.left,G=m.title,I=m.subTitle,A=m.btn;return!t&&!a&&!l?null:(0,n.jsxs)(qo.Z,{className:E,bordered:!1,children:[(0,n.jsx)("h3",{className:D,children:g.bigTitle}),t&&(0,n.jsxs)("div",{className:C,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:G,children:"Ant Design"}),(0,n.jsxs)("div",{className:I,children:[(0,n.jsx)(Bn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(ce.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:g.zhiHu})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Bn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:g.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(kt.Z,{}),(0,n.jsxs)("div",{className:C,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:G,children:"Ant Design"}),(0,n.jsxs)("div",{className:I,children:[(0,n.jsx)(St.Z,{className:"logo yuque-logo"}),(0,n.jsx)(ce.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:g.yuQue})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:A,icon:(0,n.jsx)(St.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:g.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(kt.Z,{}),(0,n.jsxs)("div",{className:C,children:[(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)("img",{src:ke,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:G,children:"Ant Design"}),(0,n.jsxs)("div",{className:I,children:[(0,n.jsx)(Et,{className:"logo juejin-logo"}),(0,n.jsx)(ce.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:g.junjin})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Et,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:g.buttonText})]})]})]})},rr=or,At,Bt,It,Ot,Ht,ar=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.antCls;return{contributorsList:t(At||(At=u()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),a,a,e.motionDurationSlow,a),listMobile:t(Bt||(Bt=u()([`
      margin: 1em 0 !important;
    `]))),toc:t(It||(It=u()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(Ot||(Ot=u()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(Ht||(Ht=u()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),ir=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(l,s){return(0,n.jsx)(mt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:s===0?0:-8}},s)})})},lr=function(e){var t=e.name,a=e.avatar,l=(0,c.useState)(!0),s=y()(l,2),h=s[0],g=s[1],v=(0,c.useState)(!1),m=y()(v,2),E=m[0],D=m[1];return(0,c.useLayoutEffect)(function(){var C=new Image;C.src=a,C.onload=function(){return g(!1)},C.onerror=function(){return D(!0)}},[]),E?null:h?(0,n.jsx)(mt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(ht.C,{size:"small",src:a,alt:t,children:t})},sr=function(e){var t,a,l,s,h,g,v=e.children,m=(0,d.eL)(),E=(0,d.zh)(),D=(0,q.Z)(),C=D.pathname,H=D.hash,G=(0,d.YB)(),I=G.formatMessage,A=ar(),B=A.styles,L=(0,w.Fg)(),T=(0,c.useContext)(Vn.Z),U=T.direction,Sn=T.isMobile,gn=(0,Bo.Z)(!1),kn=y()(gn,2),Ln=kn[0],In=kn[1],N=(0,c.useMemo)(function(){var K;return((K=m.toc)===null||K===void 0?void 0:K.filter(function(X){return X._debug_demo}).map(function(X){return X.id}))||[]},[m]),nn=N.includes(H.slice(1));(0,c.useLayoutEffect)(function(){In(nn)},[]);var Pn=(0,c.useMemo)(function(){return{showDebug:Ln,setShowDebug:In}},[Ln,N]),Rn=(0,c.useMemo)(function(){return((E==null?void 0:E.toc)||m.toc).reduce(function(K,X){if(X.depth===2)K.push($()({},X));else if(X.depth===3){var wn=K[K.length-1];wn&&(wn.children=wn.children||[],wn.children.push($()({},X)))}return K},[])},[E==null?void 0:E.toc,m.toc]),Nn=U==="rtl",ae=(0,c.useMemo)(function(){var K=m.frontmatter.author;return K?typeof K=="string"?K.split(",").map(function(X){return{name:X,avatar:"https://github.com/".concat(X,".png")}}):Array.isArray(K)?K:[]:[]},[m.frontmatter.author]);return(0,n.jsx)(Qo.Z.Provider,{value:Pn,children:(0,n.jsxs)(ge.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!m.frontmatter.toc&&(0,n.jsx)("section",{className:B.tocWrapper,children:(0,n.jsx)(Ao.Z,{className:B.toc,affix:!1,targetOffset:L.marginXXL,showInkInFixed:!0,items:Rn.map(function(K){var X;return{href:"#".concat(K.id),title:K.title,key:K.id,children:(X=K.children)===null||X===void 0?void 0:X.filter(function(wn){return Ln||!N.includes(wn.id)}).map(function(wn){return{key:wn.id,href:"#".concat(wn.id),title:(0,n.jsx)("span",{className:z()(N.includes(wn.id)&&"toc-debug"),children:wn==null?void 0:wn.title})}})}})})}),(0,n.jsxs)("article",{className:z()(B.articleWrapper,{rtl:Nn}),children:[(t=m.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(xe.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Se.Z,{size:"small",children:[(a=m.frontmatter)===null||a===void 0?void 0:a.title,(l=m.frontmatter)===null||l===void 0?void 0:l.subtitle,!C.startsWith("/components/overview")&&(0,n.jsx)(ot.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})]}),C.startsWith("/components/")&&(0,n.jsx)(Jo,{pathname:C})]}):null,m.frontmatter.date||m.frontmatter.author?(0,n.jsx)(xe.Z.Paragraph,{children:(0,n.jsxs)(Se.Z,{children:[m.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Lo.Z,{})," ",Q()(m.frontmatter.date).format("YYYY-MM-DD")]}),ae.map(function(K){return(0,n.jsx)("a",{href:"https://github.com/".concat(K.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Se.Z,{size:3,children:[(0,n.jsx)(lr,{name:K.name,avatar:K.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",K.name]})]})},K.name)})]})}):null,!m.frontmatter.__autoDescription&&m.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:v}),(((s=m.frontmatter)===null||s===void 0?void 0:s.zhihu_url)||((h=m.frontmatter)===null||h===void 0?void 0:h.yuque_url)||((g=m.frontmatter)===null||g===void 0?void 0:g.juejin_url))&&(0,n.jsx)(rr,{zhihuLink:m.frontmatter.zhihu_url,yuqueLink:m.frontmatter.yuque_url,juejinLink:m.frontmatter.juejin_url}),m.frontmatter.filename&&(0,n.jsx)(No.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:z()(B.contributorsList,we()({},B.listMobile,Sn)),fileName:m.frontmatter.filename,renderItem:function(X,wn){var ie;return!X||wn?(0,n.jsx)(ir,{}):(ie=X.username)!==null&&ie!==void 0&&ie.includes("github-actions")?null:(0,n.jsx)(Ue.Z,{mouseEnterDelay:.3,title:"".concat(I({id:"app.content.contributors"}),": ").concat(X.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(X.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(ht.C,{size:"small",src:X.url,alt:X.username,children:X.username})})})},X.username)}})]}),(0,n.jsx)(Fo,{rtl:Nn}),(0,n.jsx)(ye,{})]})})},cr=sr,dr=o(650010),Zt,_t,ur=(0,w.kc)(function(r){var e=r.token,t=r.css,a=e.antCls,l=e.fontFamily,s=e.colorSplit;return{asideContainer:t(Zt||(Zt=u()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,a,a,a,a,a,a,s,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(_t||(_t=u()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),pr=function(){var e=(0,d.tx)(),t=(0,c.useContext)(Vn.Z),a=t.isMobile,l=t.theme,s=ur(),h=s.styles,g=xt(),v=y()(g,2),m=v[0],E=v[1],D=l.includes("dark"),C=(0,w.Fg)(),H=C.colorBgContainer,G=(0,n.jsx)(cn.ZP,{theme:{components:{Menu:{itemBg:H,darkItemBg:H}}},children:(0,n.jsx)(Fe.Z,{items:m,inlineIndent:30,className:h.asideContainer,mode:"inline",theme:D?"dark":"light",selectedKeys:[E],defaultOpenKeys:e==null?void 0:e.map(function(I){var A=I.title;return A}).filter(function(I){return I})})});return a?(0,n.jsx)(dr.Z,{children:G},"Mobile-menu"):(0,n.jsx)(ge.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:h.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:G})})},mr=pr,Rt,hr=(0,w.kc)(function(r){var e=r.css,t=r.token;return{main:e(Rt||(Rt=u()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),gr=function(e){var t=e.children,a=hr(),l=a.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(tt,{}),(0,n.jsx)(mr,{}),(0,n.jsx)(cr,{children:t})]})},xr=gr,fr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vr=function(){var e=(0,d.pC)(),t=(0,q.Z)(),a=t.pathname,l=t.search,s=t.hash,h=(0,f.Z)(fr),g=y()(h,2),v=g[0],m=g[1],E=(0,c.useRef)(null),D=(0,c.useContext)(Vn.Z),C=D.direction,H=(0,d.WF)(),G=H.loading;(0,c.useLayoutEffect)(function(){m==="cn"?Q().locale("zh-cn"):Q().locale("en")},[]),(0,c.useEffect)(function(){var A=document.getElementById("nprogress-style");A&&(E.current=setTimeout(function(){var B;(B=A.parentNode)===null||B===void 0||B.removeChild(A)},0))},[]),(0,c.useEffect)(function(){var A,B=s.replace("#","");B&&((A=document.getElementById(decodeURIComponent(B)))===null||A===void 0||A.scrollIntoView())},[G,s]),c.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+l),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",a+l])},[t]);var I=(0,c.useMemo)(function(){return["","/"].some(function(A){return A===a})||["/index"].some(function(A){return a.startsWith(A)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ye,{})]}):a.startsWith("/docs/resource")?(0,n.jsx)(Do,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(xr,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:m==="cn"?"zh-CN":m,"data-direction":C,className:z()({rtl:C==="rtl"})}),(0,n.jsx)("title",{children:v==null?void 0:v.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:v.description}),(0,n.jsx)("meta",{property:"og:title",content:v==null?void 0:v.title}),(0,n.jsx)("meta",{property:"og:description",content:v.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(cn.ZP,{direction:C,locale:m==="cn"?_.Z:void 0,children:[(0,n.jsx)(dn,{}),(0,n.jsx)(bo,{}),I]})]})},br=vr},373638:function($n,ln,o){o.d(ln,{J1:function(){return _},Is:function(){return u},Fy:function(){return f},KE:function(){return c},qE:function(){return cn}});var en=o(661227),y=o(805574),sn=o(97857),z=o(385564),Mn=o(842348),Q=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),pn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":Q?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function d(x,w,n,S){var Z=x.map(function(P){return P.meta}).filter(function(P){return!P.skip}),O=[],xn=function(J,hn){return(J.order||0)-(hn.order||0)};Z.sort(xn).forEach(function(P){if(P.category&&(P.category=P.category[w]||P.category),P.type&&(P.type=P.type[w]||P.type),P!=null&&P.title&&(P.title=P.title[w]||P.title),!P.category){O.push(P);return}if(P.category==="Components"&&P.type){var J=O.find(function(tn){return(tn==null?void 0:tn.title)===P.type});J||(J={type:"type",title:P.type,children:[],order:S[P.type]},O.push(J)),J.children=J.children||[],J.children.push(P);return}var hn=O.find(function(tn){return(tn==null?void 0:tn.title)===P.category});if(hn||(hn={type:"category",title:P.category,children:[],order:n[P.category]},O.push(hn)),hn.children=hn.children||[],P.type){var jn=hn.children.filter(function(tn){return(tn==null?void 0:tn.title)===P.type})[0];jn||(jn={type:"type",title:P.type,children:[],order:S[P.type]},hn.children.push(jn)),jn.children=jn.children||[],jn.children.push(P)}else hn.children.push(P)});function Tn(P){return P.sort(xn).map(function(J){return J.children?_objectSpread(_objectSpread({},J),{},{children:Tn(J.children)}):J})}return Tn(O)}function c(x){return/-cn\/?$/.test(x)}function _(x,w,n,S){var Z=x.startsWith("/")?x:"/".concat(x),O;if(w?Z==="/"?O="/index-cn":Z.endsWith("/")?O=Z.replace(/\/$/,"-cn/"):(O="".concat(Z,"-cn"),O=O.replace(/(-cn)+/,"-cn")):O=/\/?index-cn/.test(Z)?"/":Z.replace("-cn",""),S){var xn=S[w?"zhCN":"enUS"];O+="#".concat(xn)}return{pathname:O,search:n}}function cn(x){var w="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",n=new Image,S,Z=function(xn){S||(S=!0,n.src="",x(xn))};return n.onload=function(){return Z("responded")},n.onerror=function(){return Z("error")},n.src=w,setTimeout(function(){return Z("timeout")},1500)}function f(){var x="test",w=window.localStorage;try{return w.setItem(x,"1"),w.removeItem(x),!0}catch(n){return!1}}function q(x){return new Promise(function(w,n){var S=document.createElement("script");S.type="text/javascript",S.src=x,S.onload=w,S.onerror=n,document.head.appendChild(S)})}function En(x){var w=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(x))return"";var n=flattenDeep(x.filter(function(S){if(Array.isArray(S)){var Z=_slicedToArray(S,1),O=Z[0];return O==="p"}return!1}).map(function(S){var Z=flatten(S),O=_toArray(Z),xn=O[0],Tn=O.slice(1),P=Tn.filter(function(J){return typeof J=="string"&&!w.includes(J)}).join("");return[xn,P]})).find(function(S){return S&&typeof S=="string"&&!w.includes(S)});return n}var u=function(){return pn}},647727:function($n,ln,o){o.d(ln,{Z:function(){return en.Z}});var en=o(332231)},302281:function($n,ln,o){o.d(ln,{Z:function(){return ee}});var en=o(97857),y=o.n(en),sn=o(9783),z=o.n(sn),Mn=o(805574),Q=o.n(Mn),pn=o(513769),d=o.n(pn),c=o(667294),_=o(294184),cn=o.n(_),f=o(650010),q=o(851863),En=o(73287),u=o(976883),x=o(578294),w=o(358245),n=o(46287),S=o(785893),Z=function(p){var M=p.prefixCls,i=p.title,b=p.footer,k=p.extra,V=p.closeIcon,R=p.closable,F=p.onClose,W=p.headerStyle,j=p.drawerStyle,mn=p.bodyStyle,on=p.footerStyle,rn=p.children,fn=c.useCallback(function(dn){return(0,S.jsx)("button",{type:"button",onClick:F,"aria-label":"Close",className:"".concat(M,"-close"),children:dn})},[F]),vn=(0,n.Z)(R,V,fn,void 0,!0),bn=Q()(vn,2),yn=bn[0],Y=bn[1],An=c.useMemo(function(){return!i&&!yn?null:(0,S.jsxs)("div",{style:W,className:cn()("".concat(M,"-header"),z()({},"".concat(M,"-header-close-only"),yn&&!i&&!k)),children:[(0,S.jsxs)("div",{className:"".concat(M,"-header-title"),children:[Y,i&&(0,S.jsx)("div",{className:"".concat(M,"-title"),children:i})]}),k&&(0,S.jsx)("div",{className:"".concat(M,"-extra"),children:k})]})},[yn,Y,k,W,M,i]),Cn=c.useMemo(function(){if(!b)return null;var dn="".concat(M,"-footer");return(0,S.jsx)("div",{className:dn,style:on,children:b})},[b,on,M]);return(0,S.jsxs)("div",{className:"".concat(M,"-wrapper-body"),style:j,children:[An,(0,S.jsx)("div",{className:"".concat(M,"-body"),style:mn,children:rn}),Cn]})},O=Z,xn=o(141035),Tn=o(986943),P=function(p){var M,i=p.componentCls,b=p.motionDurationSlow,k={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(b)}}};return z()({},i,(M={},z()(M,"".concat(i,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(b)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),z()(M,"".concat(i,"-panel-motion"),{"&-left":[k,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[k,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[k,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[k,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),M))},J=P,hn=function(p){var M,i,b=p.componentCls,k=p.zIndexPopup,V=p.colorBgMask,R=p.colorBgElevated,F=p.motionDurationSlow,W=p.motionDurationMid,j=p.padding,mn=p.paddingLG,on=p.fontSizeLG,rn=p.lineHeightLG,fn=p.lineWidth,vn=p.lineType,bn=p.colorSplit,yn=p.marginSM,Y=p.colorIcon,An=p.colorIconHover,Cn=p.colorText,dn=p.fontWeightStrong,Kn=p.footerPaddingBlock,Gn=p.footerPaddingInline,On="".concat(b,"-content-wrapper");return z()({},b,(i={position:"fixed",inset:0,zIndex:k,pointerEvents:"none","&-pure":(M={position:"relative",background:R},z()(M,"&".concat(b,"-left"),{boxShadow:p.boxShadowDrawerLeft}),z()(M,"&".concat(b,"-right"),{boxShadow:p.boxShadowDrawerRight}),z()(M,"&".concat(b,"-top"),{boxShadow:p.boxShadowDrawerUp}),z()(M,"&".concat(b,"-bottom"),{boxShadow:p.boxShadowDrawerDown}),M),"&-inline":{position:"absolute"}},z()(i,"".concat(b,"-mask"),{position:"absolute",inset:0,zIndex:k,background:V,pointerEvents:"auto"}),z()(i,On,{position:"absolute",zIndex:k,maxWidth:"100vw",transition:"all ".concat(F),"&-hidden":{display:"none"}}),z()(i,"&-left > ".concat(On),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:p.boxShadowDrawerLeft}),z()(i,"&-right > ".concat(On),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:p.boxShadowDrawerRight}),z()(i,"&-top > ".concat(On),{top:0,insetInline:0,boxShadow:p.boxShadowDrawerUp}),z()(i,"&-bottom > ".concat(On),{bottom:0,insetInline:0,boxShadow:p.boxShadowDrawerDown}),z()(i,"".concat(b,"-content"),{width:"100%",height:"100%",overflow:"auto",background:R,pointerEvents:"auto"}),z()(i,"".concat(b,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),z()(i,"".concat(b,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(j,"px ").concat(mn,"px"),fontSize:on,lineHeight:rn,borderBottom:"".concat(fn,"px ").concat(vn," ").concat(bn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),z()(i,"".concat(b,"-extra"),{flex:"none"}),z()(i,"".concat(b,"-close"),{display:"inline-block",marginInlineEnd:yn,color:Y,fontWeight:dn,fontSize:on,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(W),textRendering:"auto","&:focus, &:hover":{color:An,textDecoration:"none"}}),z()(i,"".concat(b,"-title"),{flex:1,margin:0,color:Cn,fontWeight:p.fontWeightStrong,fontSize:on,lineHeight:rn}),z()(i,"".concat(b,"-body"),{flex:1,minWidth:0,minHeight:0,padding:mn,overflow:"auto"}),z()(i,"".concat(b,"-footer"),{flexShrink:0,padding:"".concat(Kn,"px ").concat(Gn,"px"),borderTop:"".concat(fn,"px ").concat(vn," ").concat(bn)}),z()(i,"&-rtl",{direction:"rtl"}),i))},jn=(0,xn.Z)("Drawer",function(zn){var p=(0,Tn.TS)(zn,{});return[hn(p),J(p)]},function(zn){return{zIndexPopup:zn.zIndexPopupBase,footerPaddingBlock:zn.paddingXS,footerPaddingInline:zn.padding}}),tn=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],Zn=["prefixCls","style","className","placement"],Qn=null,Fn={distance:180},qn=function(p){var M=p.rootClassName,i=p.width,b=p.height,k=p.size,V=k===void 0?"default":k,R=p.mask,F=R===void 0?!0:R,W=p.push,j=W===void 0?Fn:W,mn=p.open,on=p.afterOpenChange,rn=p.onClose,fn=p.prefixCls,vn=p.getContainer,bn=p.style,yn=p.className,Y=p.visible,An=p.afterVisibleChange,Cn=d()(p,tn),dn=c.useContext(En.E_),Kn=dn.getPopupContainer,Gn=dn.getPrefixCls,On=dn.direction,Bn=dn.drawer,_n=Gn("drawer",fn),te=jn(_n),an=Q()(te,2),Dn=an[0],Un=an[1],le=vn===void 0&&Kn?function(){return Kn(document.body)}:vn,se=cn()(z()({"no-mask":!F},"".concat(_n,"-rtl"),On==="rtl"),M,Un);if(!1)var ue,pe;var ve=c.useMemo(function(){return i!=null?i:V==="large"?736:378},[i,V]),Vn=c.useMemo(function(){return b!=null?b:V==="large"?736:378},[b,V]),me={motionName:(0,q.m)(_n,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},oe=function(he){return{motionName:(0,q.m)(_n,"panel-motion-".concat(he)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},be=(0,w.H)();return Dn((0,S.jsx)(x.BR,{children:(0,S.jsx)(u.Ux,{status:!0,override:!0,children:(0,S.jsx)(f.Z,y()(y()({prefixCls:_n,onClose:rn,maskMotion:me,motion:oe},Cn),{},{open:mn!=null?mn:Y,mask:F,push:j,width:ve,height:Vn,style:y()(y()({},Bn==null?void 0:Bn.style),bn),className:cn()(Bn==null?void 0:Bn.className,yn),rootClassName:se,getContainer:le,afterOpenChange:on!=null?on:An,panelRef:be,children:(0,S.jsx)(O,y()(y()({prefixCls:_n},Cn),{},{onClose:rn}))}))})}))},ne=function(p){var M=p.prefixCls,i=p.style,b=p.className,k=p.placement,V=k===void 0?"right":k,R=d()(p,Zn),F=c.useContext(En.E_),W=F.getPrefixCls,j=W("drawer",M),mn=jn(j),on=Q()(mn,2),rn=on[0],fn=on[1],vn=cn()(j,"".concat(j,"-pure"),"".concat(j,"-").concat(V),fn,b);return rn((0,S.jsx)("div",{className:vn,style:i,children:(0,S.jsx)(O,y()({prefixCls:j},R))}))};qn._InternalPanelDoNotUseOrYouWillBeFired=ne;var ee=qn},377376:function($n,ln,o){var en=o(83996),y=o(296708),sn=en.ZP;sn.Header=en.h4,sn.Footer=en.$_,sn.Content=en.VY,sn.Sider=y.Z,ln.Z=sn},715778:function($n,ln,o){o.d(ln,{Z:function(){return f}});var en=o(174219),y=o(97857),sn=o.n(y),z=o(585369),Mn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},Q=Mn,pn={lang:sn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},z.Z),timePickerLocale:sn()({},Q)};pn.lang.ok="\u786E\u5B9A";var d=pn,c=d,_="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",cn={locale:"zh-cn",Pagination:en.Z,DatePicker:d,TimePicker:Q,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:_,method:_,array:_,object:_,number:_,date:_,boolean:_,integer:_,float:_,regexp:_,email:_,url:_,hex:_},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},f=cn},15060:function($n,ln,o){o.d(ln,{Z:function(){return p}});var en=o(97857),y=o.n(en),sn=o(805574),z=o.n(sn),Mn=o(513769),Q=o.n(Mn),pn=o(667294),d=o(294184),c=o.n(d),_=o(73287),cn=o(9783),f=o.n(cn),q=o(548073),En=o(141035),u=o(986943),x=function(i){var b,k,V,R,F,W,j=i.componentCls;return f()({},j,y()(y()({},(0,q.Wf)(i)),{},(W={margin:0,padding:0,listStyle:"none"},f()(W,"".concat(j,"-item"),{position:"relative",margin:0,paddingBottom:i.itemPaddingBottom,fontSize:i.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:i.itemHeadSize,insetInlineStart:(i.itemHeadSize-i.tailWidth)/2,height:"calc(100% - ".concat(i.itemHeadSize,"px)"),borderInlineStart:"".concat(i.tailWidth,"px ").concat(i.lineType," ").concat(i.tailColor)},"&-pending":(b={},f()(b,"".concat(j,"-item-head"),{fontSize:i.fontSizeSM,backgroundColor:"transparent"}),f()(b,"".concat(j,"-item-tail"),{display:"none"}),b),"&-head":{position:"absolute",width:i.itemHeadSize,height:i.itemHeadSize,backgroundColor:i.dotBg,border:"".concat(i.dotBorderWidth,"px ").concat(i.lineType," transparent"),borderRadius:"50%","&-blue":{color:i.colorPrimary,borderColor:i.colorPrimary},"&-red":{color:i.colorError,borderColor:i.colorError},"&-green":{color:i.colorSuccess,borderColor:i.colorSuccess},"&-gray":{color:i.colorTextDisabled,borderColor:i.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:i.itemHeadSize/2,insetInlineStart:i.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:i.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(i.fontSize*i.lineHeight-i.fontSize)+i.lineWidth,marginInlineStart:i.margin+i.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(k={},f()(k,"> ".concat(j,"-item-tail"),{display:"none"}),f()(k,"> ".concat(j,"-item-content"),{minHeight:i.controlHeightLG*1.2}),k)}),f()(W,"&".concat(j,`-alternate,
        &`).concat(j,`-right,
        &`).concat(j,"-label"),f()({},"".concat(j,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(i.marginXXS,"px"),"&-custom":{marginInlineStart:i.tailWidth/2}},"&-left":f()({},"".concat(j,"-item-content"),{insetInlineStart:"calc(50% - ".concat(i.marginXXS,"px)"),width:"calc(50% - ".concat(i.marginSM,"px)"),textAlign:"start"}),"&-right":f()({},"".concat(j,"-item-content"),{width:"calc(50% - ".concat(i.marginSM,"px)"),margin:0,textAlign:"end"})})),f()(W,"&".concat(j,"-right"),f()({},"".concat(j,"-item-right"),(V={},f()(V,"".concat(j,`-item-tail,
            `).concat(j,`-item-head,
            `).concat(j,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((i.itemHeadSize+i.tailWidth)/2,"px)")}),f()(V,"".concat(j,"-item-content"),{width:"calc(100% - ".concat(i.itemHeadSize+i.marginXS,"px)")}),V))),f()(W,"&".concat(j,`-pending
        `).concat(j,`-item-last
        `).concat(j,"-item-tail"),{display:"block",height:"calc(100% - ".concat(i.margin,"px)"),borderInlineStart:"".concat(i.tailWidth,"px dotted ").concat(i.tailColor)}),f()(W,"&".concat(j,`-reverse
        `).concat(j,`-item-last
        `).concat(j,"-item-tail"),{display:"none"}),f()(W,"&".concat(j,"-reverse ").concat(j,"-item-pending"),(R={},f()(R,"".concat(j,"-item-tail"),{insetBlockStart:i.margin,display:"block",height:"calc(100% - ".concat(i.margin,"px)"),borderInlineStart:"".concat(i.tailWidth,"px dotted ").concat(i.tailColor)}),f()(R,"".concat(j,"-item-content"),{minHeight:i.controlHeightLG*1.2}),R)),f()(W,"&".concat(j,"-label"),(F={},f()(F,"".concat(j,"-item-label"),{position:"absolute",insetBlockStart:-(i.fontSize*i.lineHeight-i.fontSize)+i.tailWidth,width:"calc(50% - ".concat(i.marginSM,"px)"),textAlign:"end"}),f()(F,"".concat(j,"-item-right"),f()({},"".concat(j,"-item-label"),{insetInlineStart:"calc(50% + ".concat(i.marginSM,"px)"),width:"calc(50% - ".concat(i.marginSM,"px)"),textAlign:"start"})),F)),f()(W,"&-rtl",f()({direction:"rtl"},"".concat(j,"-item-head-custom"),{transform:"translate(50%, -50%)"})),W)))},w=(0,En.Z)("Timeline",function(M){var i=(0,u.TS)(M,{itemHeadSize:10,customHeadPaddingVertical:M.paddingXXS,paddingInlineEnd:2});return[x(i)]},function(M){return{tailColor:M.colorSplit,tailWidth:M.lineWidthBold,dotBorderWidth:M.wireframe?M.lineWidthBold:M.lineWidth*3,dotBg:M.colorBgContainer,itemPaddingBottom:M.padding*1.25}}),n=o(785893),S=["prefixCls","className","color","dot","pending","position","label","children"],Z=function(i){var b,k=i.prefixCls,V=i.className,R=i.color,F=R===void 0?"blue":R,W=i.dot,j=i.pending,mn=j===void 0?!1:j,on=i.position,rn=i.label,fn=i.children,vn=Q()(i,S),bn=pn.useContext(_.E_),yn=bn.getPrefixCls,Y=yn("timeline",k),An=c()("".concat(Y,"-item"),f()({},"".concat(Y,"-item-pending"),mn),V),Cn=/blue|red|green|gray/.test(F||"")?void 0:F,dn=c()("".concat(Y,"-item-head"),(b={},f()(b,"".concat(Y,"-item-head-custom"),!!W),f()(b,"".concat(Y,"-item-head-").concat(F),!Cn),b));return(0,n.jsxs)("li",y()(y()({},vn),{},{className:An,children:[rn&&(0,n.jsx)("div",{className:"".concat(Y,"-item-label"),children:rn}),(0,n.jsx)("div",{className:"".concat(Y,"-item-tail")}),(0,n.jsx)("div",{className:dn,style:{borderColor:Cn,color:Cn},children:W}),(0,n.jsx)("div",{className:"".concat(Y,"-item-content"),children:fn})]}))},O=Z,xn=o(719632),Tn=o.n(xn),P=o(100628),J=o.n(P),hn=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],jn=["className"],tn=function(i){var b,k=i.prefixCls,V=i.className,R=i.pending,F=R===void 0?!1:R,W=i.children,j=i.items,mn=i.rootClassName,on=i.reverse,rn=on===void 0?!1:on,fn=i.direction,vn=i.hashId,bn=i.pendingDot,yn=i.mode,Y=yn===void 0?"":yn,An=Q()(i,hn),Cn=function(Dn,Un){return Y==="alternate"?Dn==="right"?"".concat(k,"-item-right"):Dn==="left"||Un%2===0?"".concat(k,"-item-left"):"".concat(k,"-item-right"):Y==="left"?"".concat(k,"-item-left"):Y==="right"||Dn==="right"?"".concat(k,"-item-right"):""},dn=Tn()(j||[]),Kn=typeof F=="boolean"?null:F;F&&dn.push({pending:!!F,dot:bn||(0,n.jsx)(J(),{}),children:Kn}),rn&&dn.reverse();var Gn=dn.length,On="".concat(k,"-item-last"),Bn=dn.filter(function(an){return!!an}).map(function(an,Dn){var Un,le=Dn===Gn-2?On:"",se=Dn===Gn-1?On:"",ue=an.className,pe=Q()(an,jn);return(0,pn.createElement)(O,y()(y()({},pe),{},{className:c()([ue,!rn&&F?le:se,Cn((Un=an==null?void 0:an.position)!==null&&Un!==void 0?Un:"",Dn)]),key:(an==null?void 0:an.key)||Dn}))}),_n=dn.some(function(an){return!!(an!=null&&an.label)}),te=c()(k,(b={},f()(b,"".concat(k,"-pending"),!!F),f()(b,"".concat(k,"-reverse"),!!rn),f()(b,"".concat(k,"-").concat(Y),!!Y&&!_n),f()(b,"".concat(k,"-label"),_n),f()(b,"".concat(k,"-rtl"),fn==="rtl"),b),V,mn,vn);return(0,n.jsx)("ul",y()(y()({},An),{},{className:te,children:Bn}))},Zn=tn,Qn=o(45598);function Fn(M,i){return M&&Array.isArray(M)?M:(0,Qn.default)(i).map(function(b){var k,V;return y()({children:(k=b==null||(V=b.props)===null||V===void 0?void 0:V.children)!==null&&k!==void 0?k:""},b.props)})}var qn=Fn,ne=["prefixCls","children","items","className","style"],ee=function(i){var b=pn.useContext(_.E_),k=b.getPrefixCls,V=b.direction,R=b.timeline,F=i.prefixCls,W=i.children,j=i.items,mn=i.className,on=i.style,rn=Q()(i,ne),fn=k("timeline",F);if(!1)var vn;var bn=w(fn),yn=z()(bn,2),Y=yn[0],An=yn[1],Cn=qn(j,W);return Y((0,n.jsx)(Zn,y()(y()({},rn),{},{className:c()(R==null?void 0:R.className,mn),style:y()(y()({},R==null?void 0:R.style),on),prefixCls:fn,direction:V,items:Cn,hashId:An})))};ee.Item=O;var zn=ee,p=zn}}]);

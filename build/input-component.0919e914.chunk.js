(self.webpackChunkorange_ball_strapi_cms=self.webpackChunkorange_ball_strapi_cms||[]).push([[1077],{12565:(A,C,i)=>{"use strict";i.d(C,{Z:()=>_});var l=i(13412),S=i.n(l),E=i(66004),m=i.n(E),T=m()(S());T.push([A.id,`.react-tagsinput {
  background-color: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}

.react-tagsinput--focused {
  border-color: #a5d24a;
}

.react-tagsinput-tag {
  background-color: #cde69c;
  border-radius: 2px;
  border: 1px solid #a5d24a;
  color: #638421;
  display: inline-block;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px;
}

.react-tagsinput-remove {
  cursor: pointer;
  font-weight: bold;
}

.react-tagsinput-tag a::before {
  content: " \xD7";
}

.react-tagsinput-input {
  background: transparent;
  border: 0;
  color: #777;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 6px;
  margin-top: 1px;
  outline: none;
  padding: 5px;
  width: 80px;
}
`,""]);const _=T},93301:function(A,C,i){var l,S,E;(function(m,T){if(!0)S=[C,i(27279),i(70627)],l=T,E=typeof l=="function"?l.apply(C,S):l,E!==void 0&&(A.exports=E);else var _})(this,function(m,T,_){"use strict";Object.defineProperty(m,"__esModule",{value:!0});var P=j(T),J=j(_);function j(a){return a&&a.__esModule?a:{default:a}}function k(a,r,n){return r in a?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n,a}function B(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")}var M=function(){function a(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(r,n,t){return n&&a(r.prototype,n),t&&a(r,t),r}}();function N(a,r){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:a}function K(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);a.prototype=Object.create(r&&r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(a,r):a.__proto__=r)}var I=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a};function y(a,r){var n={};for(var t in a)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);return n}function D(a){for(var r=[],n=0;n<a.length;n++)r.indexOf(a[n])===-1&&r.push(typeof a[n]=="string"?a[n].trim():a[n]);return r}function z(a){return window.clipboardData?window.clipboardData.getData("Text"):a.clipboardData?a.clipboardData.getData("text/plain"):""}function X(a){var r=a.tag,n=a.key,t=a.disabled,e=a.onRemove,u=a.classNameRemove,o=a.getTagDisplayValue,s=y(a,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return P.default.createElement("span",I({key:n},s),o(r),!t&&P.default.createElement("a",{className:u,onClick:function(v){return e(n)}}))}function L(a){var r=a.addTag,n=y(a,["addTag"]),t=n.onChange,e=n.value,u=y(n,["onChange","value"]);return P.default.createElement("input",I({type:"text",onChange:t,value:e},u))}function U(a,r){return P.default.createElement("span",null,a,r)}function g(a){return a.split(" ").map(function(r){return r.trim()})}var W={className:"react-tagsinput-input",placeholder:"Add a tag"},V=function(a){K(r,a);function r(){B(this,r);var n=N(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.state={tag:"",isFocused:!1},n.focus=n.focus.bind(n),n.blur=n.blur.bind(n),n.accept=n.accept.bind(n),n}return M(r,[{key:"_getTagDisplayValue",value:function(t){var e=this.props.tagDisplayProp;return e?t[e]:t}},{key:"_makeTag",value:function(t){var e=this.props.tagDisplayProp;return e?k({},e,t):t}},{key:"_removeTag",value:function(t){var e=this.props.value.concat([]);if(t>-1&&t<e.length){var u=e.splice(t,1);this.props.onChange(e,u,[t])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(t){var e=this,u=this.props,o=u.onChange,s=u.onValidationReject,d=u.onlyUnique,v=u.maxTags,p=u.value;d&&(t=D(t),t=t.filter(function(c){return p.every(function(h){return e._getTagDisplayValue(h)!==e._getTagDisplayValue(c)})}));var f=t.filter(function(c){return!e._validate(e._getTagDisplayValue(c))});if(t=t.filter(function(c){return e._validate(e._getTagDisplayValue(c))}),t=t.filter(function(c){var h=e._getTagDisplayValue(c);return typeof h.trim=="function"?h.trim().length>=0:h}),v>=0){var R=Math.max(v-p.length,0);t=t.slice(0,R)}if(s&&f.length>0&&s(f),t.length>0){for(var x=p.concat(t),b=[],O=0;O<t.length;O++)b.push(p.length+O);return o(x,t,b),this._clearInput(),!0}return f.length>0||this._clearInput(),!1}},{key:"_validate",value:function(t){var e=this.props,u=e.validate,o=e.validationRegex;return u(t)&&o.test(t)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(t,e,u){return t?!0:u==="Enter"?this.props.preventSubmit||!this.props.preventSubmit&&!e:!1}},{key:"focus",value:function(){this.input&&typeof this.input.focus=="function"&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&typeof this.input.blur=="function"&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var t=this.props.preventSubmit,e=this._tag();return e!==""||!t?(e=this._makeTag(e),this._addTags([e])):!1}},{key:"addTag",value:function(t){return this._addTags([t])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(t){var e=this,u=this.props,o=u.addOnPaste,s=u.pasteSplit;if(o){t.preventDefault();var d=z(t),v=s(d).map(function(p){return e._makeTag(p)});this._addTags(v)}}},{key:"handleKeyDown",value:function(t){if(!t.defaultPrevented){var e=this.props,u=e.value,o=e.removeKeys,s=e.addKeys,d=this._tag(),v=d==="",p=t.keyCode,f=t.key,R=s.indexOf(p)!==-1||s.indexOf(f)!==-1,x=o.indexOf(p)!==-1||o.indexOf(f)!==-1;if(R){var b=this.accept();this._shouldPreventDefaultEventOnAdd(b,v,f)&&t.preventDefault()}x&&u.length>0&&v&&(t.preventDefault(),this._removeTag(u.length-1))}}},{key:"handleClick",value:function(t){var e=t.target,u=t.target&&t.target.parentElement;(e===this.div||u===this.div)&&this.focus()}},{key:"handleChange",value:function(t){var e=this.props.onChangeInput,u=this.props.inputProps.onChange,o=t.target.value;u&&u(t),this.hasControlledInput()?e(o):this.setState({tag:o})}},{key:"handleOnFocus",value:function(t){var e=this.props.inputProps.onFocus;e&&e(t),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(t){var e=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),t!=null&&(e&&e(t),this.props.addOnBlur&&t.target.value)){var u=this._makeTag(t.target.value);this._addTags([u])}}},{key:"handleRemove",value:function(t){this._removeTag(t)}},{key:"inputProps",value:function(){var t=this.props.inputProps,e=t.onChange,u=t.onFocus,o=t.onBlur,s=y(t,["onChange","onFocus","onBlur"]),d=I({},W,s);return this.props.disabled&&(d.disabled=!0),d}},{key:"inputValue",value:function(t){return t.currentValue||t.inputValue||""}},{key:"hasControlledInput",value:function(){var t=this.props,e=t.inputValue,u=t.onChangeInput;return typeof u=="function"&&typeof e=="string"}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(t){this.hasControlledInput()||this.inputValue(this.props)&&this.inputValue(t)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var t=this,e=this.props,u=e.value,o=e.tagProps,s=e.renderLayout,d=e.renderTag,v=e.renderInput,p=e.className,f=e.focusedClassName,R=e.disabled,x=this.state.isFocused,b=u.map(function(c,h){return d(I({key:h,tag:c,onRemove:t.handleRemove.bind(t),disabled:R,getTagDisplayValue:t._getTagDisplayValue.bind(t)},o))}),O=v(I({ref:function(h){t.input=h},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return P.default.createElement("div",{ref:function(h){t.div=h},onClick:this.handleClick.bind(this),className:p+(x?" "+f:"")},s(b,O))}}]),r}(P.default.Component);V.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:L,renderTag:X,renderLayout:U,pasteSplit:g,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},m.default=V,A.exports=m.default})},62873:(A,C,i)=>{"use strict";i.r(C),i.d(C,{default:()=>u});var l=i(74081),S=i(93301),E=i.n(S),m=i(93379),T=i.n(m),_=i(7795),P=i.n(_),J=i(90569),j=i.n(J),k=i(3565),B=i.n(k),M=i(19216),N=i.n(M),K=i(44589),I=i.n(K),y=i(12565),D={};D.styleTagTransform=I(),D.setAttributes=B(),D.insert=j().bind(null,"head"),D.domAPI=P(),D.insertStyleElement=N();var z=T()(y.Z,D);const X=y.Z&&y.Z.locals?y.Z.locals:void 0;var L=i(27279),U=i(70627),g=i.n(U),W=i(1821),V=i(10701),a=i(2878),r=i(67588),n=i(55911),t=i(61020);const e=({attribute:o,description:s,error:d,intlLabel:v,labelAction:p,name:f,onChange:R,required:x,value:b})=>{const{formatMessage:O}=(0,t.Z)(),[c,h]=(0,L.useState)(()=>{try{return JSON.parse(b).map(Z=>Z.name)}catch{return[]}}),Y=F=>{h(F),R({target:{name:f,value:JSON.stringify(F.map(Z=>({name:Z}))),type:o.type}})};return(0,l.jsx)(W.g,{name:f,id:f,error:d,hint:s&&O(s),required:x,children:(0,l.jsxs)(V.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,l.jsx)(a.Q,{action:p,children:O(v)}),(0,l.jsx)(V.k,{children:(0,l.jsx)(E(),{value:c,onChange:Y})}),(0,l.jsx)(r.J,{}),(0,l.jsx)(n.c,{})]})})};e.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},e.propTypes={intlLabel:g().object.isRequired,onChange:g().func.isRequired,attribute:g().object.isRequired,name:g().string.isRequired,description:g().object,error:g().string,labelAction:g().object,required:g().bool,value:g().string};const u=e}}]);
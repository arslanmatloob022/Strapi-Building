"use strict";(self.webpackChunkorange_ball_strapi_cms=self.webpackChunkorange_ball_strapi_cms||[]).push([[9749],{8291:(b,m,s)=>{s.d(m,{a:()=>u,s:()=>E});var e=s(47853),t=s(38035);const a={firstname:e.Z_().trim().required(t.I0.required),lastname:e.Z_(),email:e.Z_().email(t.I0.email).lowercase().required(t.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,t.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,t.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(c,n)=>c?n.required(t.I0.required):n)},E={...a,currentPassword:e.Z_().when(["password","confirmPassword"],(c,n,M)=>c||n?M.required(t.I0.required):M),preferedLanguage:e.Z_().nullable()},d={roles:e.IX().min(1,t.I0.required).required(t.I0.required)},u=e.Ry().shape({...a,isActive:e.Xg(),...d})},44485:(b,m,s)=>{s.d(m,{f:()=>e});const e=({data:t})=>{try{return Object.keys(t).reduce((a,E)=>{const d=t[E][0];return a[E]={id:d,defaultMessage:d},a},{})}catch{return{}}}},69749:(b,m,s)=>{s.r(m),s.d(m,{default:()=>os});var e=s(74081),t=s(27279),a=s(38035),E=s(59461),d=s(51447),u=s(12847),c=s(9941),n=s(27875),M=s(48102),r=s(74758),I=s(93415),h=s(10701),A=s(32370),T=s(23298),g=s(74577),$=s(59082),N=s(76827),V=s(71563),B=s(98934),P=s(74919),l=s(47184),C=s(70627),x=s(61020),W=s(11266),K=s(45194),p=s(44485),j=s(70882),H=s(8291),J=s(40464),G=s(64797),w=s(85811),f=s(43433),_s=s(8175),cs=s(15816),ms=s(97442),Es=s(13576),gs=s(87830),us=s(364),Ms=s(49204),Ps=s(47853),ps=s(75719),fs=s(29206);const ts=async(v,i)=>{const{put:U}=(0,a.tg)(),{data:y}=await U(`/admin/users/${v}`,i);return y.data},ns=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],k=["email","firstname","lastname","username","isActive","roles"],q=({canUpdate:v})=>{const{formatMessage:i}=(0,x.Z)(),{params:{id:U}}=(0,d.$B)("/settings/users/:id"),{push:y}=(0,d.k6)(),{setUserDisplayName:Z}=(0,a.L7)(),D=(0,a.lm)(),{lockApp:Q,unlockApp:X}=(0,a.o1)(),ss=(0,K.p)(j.M,async()=>(await s.e(2916).then(s.bind(s,62916))).MagicLinkEE);(0,a.go)();const{users:[S],isLoading:rs}=(0,W.u)({id:U},{cacheTime:0,onError(o){const{status:_}=o.response;_===403?(D({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),y("/")):D({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),is=async(o,_)=>{Q();try{const O=await ts(U,P(o,"confirmPassword"));D({type:"success",message:i({id:"notification.success.saved",defaultMessage:"Saved"})});const R=a.I8.getUserInfo();if(U.toString()===R.id.toString()){a.I8.setUserInfo(O);const z=B(o,"username")||(0,u.g)(o.firstname,o.lastname);Z(z)}_.setValues(l(o,k))}catch(O){const R=(0,p.f)(O.response.data),z=Object.keys(R).reduce((Y,L)=>(Y[L]=R[L].id,Y),{});_.setErrors(z),D({type:"warning",message:B(O,"response.data.error.message","notification.error")})}X()},es=rs||!ss,ds=es?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},F=Object.keys(l(S,k)).reduce((o,_)=>_==="roles"?(o[_]=(S?.roles||[]).map(({id:O})=>O),o):(o[_]=S?.[_],o),{}),ls=F.username||(0,u.g)(F.firstname,F.lastname),as=i(ds,{name:ls});return es?(0,e.jsxs)(c.o,{"aria-busy":"true",children:[(0,e.jsx)(a.SL,{name:"Users"}),(0,e.jsx)(n.T,{primaryAction:(0,e.jsx)(M.z,{disabled:!0,startIcon:(0,e.jsx)($.Z,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.rU,{startIcon:(0,e.jsx)(N.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(r.D,{children:(0,e.jsx)(a.dO,{})})]}):(0,e.jsxs)(c.o,{children:[(0,e.jsx)(a.SL,{name:"Users"}),(0,e.jsx)(V.J9,{onSubmit:is,initialValues:F,validateOnChange:!1,validationSchema:H.a,children:({errors:o,values:_,handleChange:O,isSubmitting:R,dirty:z})=>(0,e.jsxs)(a.l0,{children:[(0,e.jsx)(n.T,{primaryAction:(0,e.jsx)(M.z,{disabled:R||!v?!0:!z,startIcon:(0,e.jsx)($.Z,{}),loading:R,type:"submit",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.rU,{startIcon:(0,e.jsx)(N.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsxs)(r.D,{children:[S?.registrationToken&&(0,e.jsx)(I.x,{paddingBottom:6,children:(0,e.jsx)(ss,{registrationToken:S.registrationToken})}),(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(I.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(A.Z,{variant:"delta",as:"h2",children:i({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,e.jsx)(T.r,{gap:5,children:ns.map(Y=>Y.map(L=>(0,e.jsx)(g.P,{...L.size,children:(0,e.jsx)(a.jm,{...L,disabled:!v,error:o[L.name],onChange:O,value:_[L.name]||""})},L.name)))})]})}),(0,e.jsx)(I.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(A.Z,{variant:"delta",as:"h2",children:i({id:"global.roles",defaultMessage:"User's role"})}),(0,e.jsx)(T.r,{gap:5,children:(0,e.jsx)(g.P,{col:6,xs:12,children:(0,e.jsx)(j.S,{disabled:!v,error:o.roles,onChange:O,value:_.roles})})})]})})]})]})]})})]})};q.propTypes={canUpdate:C.bool.isRequired};const os=()=>{const v=(0,a.lm)(),i=(0,E.v9)(u.s),U=t.useMemo(()=>({read:i.settings.users.read,update:i.settings.users.update}),[i.settings.users]),{isLoading:y,allowedActions:{canRead:Z,canUpdate:D}}=(0,a.ss)(U),{state:Q}=(0,d.TH)(),X=Q?.from??"/";return(0,t.useEffect)(()=>{y||!Z&&!D&&v({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[y,Z,D,v]),y?(0,e.jsx)(a.dO,{}):!Z&&!D?(0,e.jsx)(d.l_,{to:X}):(0,e.jsx)(q,{canUpdate:D})}},70882:(b,m,s)=>{s.d(m,{M:()=>T,S:()=>B,a:()=>A});var e=s(74081),t=s(70627),a=s(61020),E=s(45194),d=s(4987),u=s(5627),c=s(78955),n=s(38035),M=s(78031),r=s(34547),I=s(40464),h=s(72450);const A=({children:P,target:l})=>{const C=(0,n.lm)(),{formatMessage:x}=(0,a.Z)(),{copy:W}=(0,n.VP)(),K=x({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),p=async()=>{await W(l)&&C({type:"info",message:{id:"notification.link-copied"}})};return(0,e.jsx)(n.Y_,{endAction:(0,e.jsx)(d.h,{label:K,noBorder:!0,icon:(0,e.jsx)(M.Z,{}),onClick:p}),title:l,titleEllipsis:!0,subtitle:P,icon:(0,e.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})};A.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,target:t.string.isRequired};const T=({registrationToken:P})=>{const{formatMessage:l}=(0,a.Z)(),C=`${window.location.origin}${(0,E.T)()}/auth/register?registrationToken=${P}`;return(0,e.jsx)(A,{target:C,children:l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})};T.defaultProps={registrationToken:""},T.propTypes={registrationToken:t.string};const g=(0,h.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,$=h.default.div`
  animation: ${g} 2s infinite linear;
`,N=()=>(0,e.jsx)($,{children:(0,e.jsx)(r.Z,{})}),V=async()=>{const{get:P}=(0,n.tg)(),{data:l}=await P("/admin/roles");return l.data},B=({disabled:P,error:l,onChange:C,value:x})=>{const{status:W,data:K}=(0,I.useQuery)(["roles"],V,{staleTime:5e4}),{formatMessage:p}=(0,a.Z)(),j=l?p({id:l,defaultMessage:l}):"",H=p({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),J=p({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),G=p({id:"app.components.Select.placeholder",defaultMessage:"Select"}),w=W==="loading"?(0,e.jsx)(N,{}):void 0;return(0,e.jsx)(u.P,{id:"roles",disabled:P,error:j,hint:J,label:H,name:"roles",onChange:f=>{C({target:{name:"roles",value:f}})},placeholder:G,multi:!0,startIcon:w,value:x.map(f=>f.toString()),withTags:!0,required:!0,children:(K||[]).map(f=>(0,e.jsx)(c.W,{value:f.id.toString(),children:p({id:`global.${f.code}`,defaultMessage:f.name})},f.id))})};B.defaultProps={disabled:!1,error:void 0},B.propTypes={disabled:t.bool,error:t.string,onChange:t.func.isRequired,value:t.array.isRequired}},11266:(b,m,s)=>{s.d(m,{u:()=>E});var e=s(27279),t=s(38035),a=s(40464);function E(d={},u={}){const{id:c="",...n}=d,{get:M}=(0,t.kY)(),{data:r,isError:I,isLoading:h,refetch:A}=(0,a.useQuery)(["users",c,n],async()=>{const{data:{data:g}}=await M(`/admin/users/${c}`,{params:n});return g},u);return{users:e.useMemo(()=>{let g=[];return r&&("results"in r?Array.isArray(r.results)&&(g=r.results):g=[r]),g},[r]),pagination:e.useMemo(()=>(r&&"pagination"in r)??null,[r]),isLoading:h,isError:I,refetch:A}}}}]);

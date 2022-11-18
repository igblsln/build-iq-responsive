"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[456],{3456:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var r=n(969),o=n(734),a=n(55),i=n(9367),c="contract",u="Contract",l=function(e,t){return(0,a.E7)("/".concat(i.o,"/").concat(e)+(t?"/comming-soon":""))},s=[{label:"Transactions",items:[{label:"Contract",icon:"pi ml-3",template:l(c)},{label:"Contract Invoice",icon:"pi ml-3",template:l("contractinvoice")}]}],d=n(2723),m=n(6234),p=n(3665),f=n(7765),v=n(6770),y=n(8301),g=n(8224),E=n(4756),h=n(3127),T=n(4576),b=n(1943),C=n(8079),S="/contract/contractor/",I=b.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContract:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,b.DS)(S,"?page=".concat(t||1,"&page_size=").concat(n||b.IV))}},providesTags:function(e){return e?[].concat((0,C.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:b.pJ.CONTRACT,key:t}}))),[{type:b.pJ.CONTRACT,id:"LIST"}]):[{type:b.pJ.CONTRACT,id:"LIST"}]}}),addContract:e.mutation({query:function(e){return{url:S,method:"POST",body:e}},invalidatesTags:[{type:b.pJ.CONTRACT,id:"LIST"}]}),getContract:e.query({query:function(e){return"".concat(S).concat(e)},providesTags:function(e,t,n){return[{type:b.pJ.CONTRACT,id:n}]}}),updateContract:e.mutation({query:function(e){var t=e;return{url:"".concat(S),method:"POST",body:t}},invalidatesTags:[{type:b.pJ.CONTRACT,id:"LIST"}]}),deleteContract:e.mutation({query:function(e){return{url:"".concat(S).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:b.pJ.CONTRACT,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),_=I.useAddContractMutation,L=I.useDeleteContractMutation,N=I.useGetContractQuery,P=I.useListContractQuery,w=I.useUpdateContractMutation,x=(I.useGetErrorProneQuery,I.endpoints.getContract,(0,r.forwardRef)((function(e,t){var n=e.data,o=e.isLoading,i=e.disableTable,l=void 0!==i&&i,s=e.onChange,d=void 0===s?function(){}:s,p=(0,r.useState)([]),f=(0,m.Z)(p,2),y=f[0],E=f[1],h=(0,r.useRef)(y),T=(0,r.useRef)([]),C=(0,b.DY)({}),S=C.data;C.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return y}}})),(0,r.useEffect)((function(){E(n),h.current=n}),[n]),(0,r.useEffect)((function(){T.current=(null===S||void 0===S?void 0:S.results)||[]}),[S]);return r.createElement(a.PS,{baseRoute:"/contract/".concat(c),description:u,isLoading:o,data:y,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:l,actionBodyTemplate:function(e){return r.createElement(v.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=h.current.filter((function(t){return t!==e}));h.current=t,E(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!l,newRowDefaults:{netamt:0,qty:0,unitprice:0},OnRowsChanged:function(e){console.log("row -change",e);var t=e.map((function(e){return Object.assign(Object.assign({},e),{netamt:e.qty*e.unitprice})}));E(t),h.current=t,d(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(a._P,{field:"item_descr",header:"Task",type:"text",editorType:!l&&"text"}),r.createElement(a._P,{field:"itemuom_key",header:"UOM",editorType:!l&&function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(g.L,{autoFocus:!0,className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:T.current,onChange:function(e){t[n.key]=e.value,o(t,!0)},tabIndex:-1})}}),r.createElement(a._P,{field:"qty",header:"Quantiy",type:"number",editorType:!l&&"number"}),r.createElement(a._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!l&&"number"}),r.createElement(a._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,r.createElement(a.JK,{value:t||0})}}))}))),A=(0,r.forwardRef)((function(e,t){var n=e.data,o=e.isLoading,i=e.disableTable,l=void 0!==i&&i,s=(e.onChange,(0,r.useState)([])),d=(0,m.Z)(s,2),p=d[0],f=d[1],y=(0,r.useRef)(p),g=(0,r.useRef)([]),E=(0,b.DY)({}),h=E.data;E.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return p}}})),(0,r.useEffect)((function(){f(n),y.current=n}),[n]),(0,r.useEffect)((function(){g.current=(null===h||void 0===h?void 0:h.results)||[]}),[h]);return r.createElement(a.PS,{baseRoute:"/contract/".concat(c),description:u,isLoading:o,data:p,newTable:!0,tableLayoutClass:"h-full",hideActionColumn:l,allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(v.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=y.current.filter((function(t){return t!==e}));y.current=t,f(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!l,newRowDefaults:{netamt:0},OnRowsChanged:function(e){f(e),y.current=e},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(a._P,{field:"item_descr",header:"Stagewise Payment",editorType:!l&&"text"}),r.createElement(a._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,editorType:!l&&"currency",summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,r.createElement(a.JK,{value:t||0})}}))})),R=b.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getNextDocNo:e.query({query:function(e){return{url:(0,b.DS)("/transaction/doc/id/next?docid=".concat(e))}}}),getActivePurchaseTemplates:e.query({query:function(){return{url:"/transaction/purchase/template/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.PURCHASE_TEMPLATE,id:t}}))),[{type:b.pJ.PURCHASE_TEMPLATE,id:"LIST"}])}}),getActiveProjects:e.query({query:function(){return{url:"/project/project/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.PROJECT,id:t}}))),[{type:b.pJ.PROJECT,id:"LIST"}])}}),getActiveContractors:e.query({query:function(){return{url:"/vendor/vendor/all/active/contractor"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.VENDOR,id:t}}))),[{type:b.pJ.VENDOR,id:"LIST"}])}}),getModeOfPayments:e.query({query:function(){return{url:"/transaction/payment/mode/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.MODE_OF_PAYMENT,id:t}}))),[{type:b.pJ.MODE_OF_PAYMENT,id:"LIST"}])}}),getGRNNumbers:e.query({query:function(){return{url:"/transaction/goods/receipts/?only_grn_number=True"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.GRN_NUMBER,id:t}}))),[{type:b.pJ.GRN_NUMBER,id:"LIST"}])}}),listAPTerm:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,b.DS)("/vendor/ap_term/","?page=".concat(t||1,"&page_size=").concat(n||b.IV))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.AP_TERM,id:t}}))),[{type:b.pJ.AP_TERM,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),O=(R.useGetErrorProneQuery,R.useGetNextDocNoQuery),k=(R.useGetActiveProjectsQuery,R.useGetActivePurchaseTemplatesQuery,R.useGetActiveContractorsQuery,R.useGetModeOfPaymentsQuery,R.useListAPTermQuery),D=(R.useGetGRNNumbersQuery,function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}),q=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},V=function(e){(0,p.Z)(e);var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,l=(0,r.useState)(!1),s=(0,m.Z)(l,2),C=s[0],S=s[1],I=(0,r.useState)({}),L=(0,m.Z)(I,2),P=L[0],R=L[1],k=(0,r.useState)(!1),V=(0,m.Z)(k,2),Z=V[0],j=V[1],J=(0,r.useState)(!1),M=(0,m.Z)(J,2),W=M[0],F=M[1],U=(0,r.useState)("S"),B=(0,m.Z)(U,2),G=B[0],Q=B[1],H=(0,r.useState)("SAVE"),z=(0,m.Z)(H,2),Y=z[0],$=z[1],K=(0,o.UO)().id,X=parseInt(K||""),ee=isNaN(X)||X<=0,te=(0,r.useRef)(),ne=(0,r.useRef)(),re=(0,r.useRef)(),oe=N(X,{skip:ee}),ae=oe.data,ie=oe.isLoading,ce=oe.refetch,ue=O("VCN",{skip:!ee}),le=ue.data,se=ue.isLoading,de=(0,o.s0)(),me=(0,b.JB)(),pe=me.data,fe=me.isLoading,ve=(0,b.rC)(),ye=ve.data,ge=ve.isLoading,Ee=w(),he=(0,m.Z)(Ee,2),Te=he[0],be=he[1].isLoading,Ce=_(),Se=(0,m.Z)(Ce,2),Ie=Se[0],_e=Se[1].isLoading;(0,r.useEffect)((function(){R(ae||Object.assign(Object.assign({},b.Y$),{contractdate:q(new Date,!0),docid:"VCN",contractno:null===le||void 0===le?void 0:le.next_doc_id,loctyp:"PR"}))}),[ae,le]);var Le=function(){return["U","R","C"].includes(null===ae||void 0===ae?void 0:ae.docstatus)},Ne=function(e,t){return D(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q(e);case 2:return n.next=4,$(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(a.Rm,{ref:re,baseRoute:"/contract/".concat(c),description:u,id:X,data:P,disableSaveBtn:Le(),isItemsTableChanged:Z||W,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(v.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===ae||void 0===ae?void 0:ae.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=re.current)||void 0===t?void 0:t.getIsDirty())||Z||W?(0,T.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ne("U","SUBMIT_WITH_SAVE")},reject:function(){return Ne("U","SUBMIT_WITHOUT_SAVE")}}):Ne("U","SUBMIT_WITH_SAVE")}}),r.createElement(v.z,{label:"Cancel",disabled:ee||["R","C"].includes(null===ae||void 0===ae?void 0:ae.docstatus),className:"p-button-plain",onClick:function(e){return $("CANCEL"),Q("C"),!0}})),isUpdating:_e||be||C,isLoading:ie,onSubmit:function(e){return D(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r,o,a,u,l,s;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null===(r=te.current)||void 0===r?void 0:r.getItems(),u=null===(o=ne.current)||void 0===o?void 0:o.getItems(),l=Object.assign(Object.assign({},e),{contractdate:(0,b.p6)(e.contractdate,"yyyy-MM-dd"),docstatus:G,action:Y,vend_contract_tasks:a,vend_contract_stages:u}),console.log(l),t.prev=4,!ee){t.next=11;break}return t.next=8,Ie(Object.assign(Object.assign({},l),b.Y$)).unwrap();case 8:s=t.sent,t.next=14;break;case 11:return t.next=13,Te(Object.assign(Object.assign({},l),b.Y$)).unwrap();case 13:s=t.sent;case 14:console.log("submit resp",s),ce(),n("Success",s.detail),S(!0),setTimeout((function(){de("/contract/".concat(c))}),b.P7),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(4),i("An error occurred","We couldn't save your post, try again!");case 24:case"end":return t.stop()}}),t,null,[[4,21]])})))},renderForm:function(e,t,n){var o,i;return r.createElement("div",{className:"pl-4 pt-4 pb-3 grid p-fluid h-full"},r.createElement("div",{className:"col-12 md:col-6 grid grid-nogutter p-fluid",style:{alignContent:"flex-start"}},r.createElement(a.Wi,{label:"Doc ID",name:"docid",className:(0,E.AK)("col-12 md:col-6"),control:e,errors:n,formItem:{component:f.o,componentProps:{disabled:!0}}})),r.createElement(a.Wi,{label:"Contract Number",name:"contractno",isLoading:se,className:"col-10 md:col-6",control:e,errors:n,formItem:{component:y.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(a.Wi,{label:"Contractor",name:"vend_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:ge,required:"Select a Contractor",leftSpan:3,rightSpan:9,formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ye}}}),r.createElement(a.Wi,{label:"Contract Date",name:"contractdate",className:"col-10 md:col-6",useExplicit:!0,control:e,errors:n,convertValue:q,required:"Select a Date",formItem:{component:h.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(a.Wi,{label:"Project",name:"proj_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:fe,required:"Select a Project",leftSpan:3,rightSpan:9,formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:pe}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(x,{data:(null===ae||void 0===ae?void 0:ae.vend_contract_tasks)||(null===(o=te.current)||void 0===o?void 0:o.getItems())||[],isLoading:ie,ref:te,disableTable:Le(),onChange:function(e){return!Z&&j(e)}})),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(A,{data:(null===ae||void 0===ae?void 0:ae.vend_contract_stages)||(null===(i=ne.current)||void 0===i?void 0:i.getItems())||[],isLoading:ie,ref:ne,disableTable:Le(),onChange:function(e){return!W&&F(e)}})),r.createElement(a.Wi,{label:"Notes",name:"notes",className:"col-12",control:e,errors:n,leftSpan:2,rightSpan:10,formItem:{component:f.o,componentProps:{maxLength:255}}}))}}))},Z=function(e){var t=P({},{refetchOnMountOrArgChange:!0}),n=t.data,o=t.isLoading,l=L(),s=(0,m.Z)(l,2),d=s[0],p=s[1].isLoading;return r.createElement(a.PS,{baseRoute:"/".concat(i.o,"/").concat(c),description:u,isLoading:o||p,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return d(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"contractno",header:"Contract No",filteringType:"number"}),r.createElement(a._P,{field:"contractdate",header:"Contract Date",filteringType:"date"}),r.createElement(a._P,{field:"vendor.name",header:"Contractor",filteringType:"text"}),r.createElement(a._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(a._P,{field:"status.descr",header:"Status",filteringType:"text"}))},j=r.createElement(o.AW,{path:c},r.createElement(o.AW,{path:"new",element:r.createElement(V,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(V,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(Z,null)})),J="/contract/invoice/",M=b.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContractInvoice:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,b.DS)(J,"?page=".concat(t||1,"&page_size=").concat(n||b.IV))}},providesTags:function(e){return e?[].concat((0,C.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:b.pJ.CONTRACT_INVOICE,key:t}}))),[{type:b.pJ.CONTRACT_INVOICE,id:"LIST"}]):[{type:b.pJ.CONTRACT_INVOICE,id:"LIST"}]}}),addContractInvoice:e.mutation({query:function(e){return{url:J,method:"POST",body:e}},invalidatesTags:[{type:b.pJ.CONTRACT_INVOICE,id:"LIST"}]}),getContractInvoice:e.query({query:function(e){return"".concat(J).concat(e)},providesTags:function(e,t,n){return[{type:b.pJ.CONTRACT_INVOICE,id:n}]}}),updateContractInvoice:e.mutation({query:function(e){var t=e;return{url:"".concat(J),method:"POST",body:t}},invalidatesTags:[{type:b.pJ.CONTRACT_INVOICE,id:"LIST"}]}),deleteContractInvoice:e.mutation({query:function(e){return{url:"".concat(J).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:b.pJ.CONTRACT_INVOICE,id:null===e||void 0===e?void 0:e.id}]}}),getSubmittedContract:e.query({query:function(){return{url:(0,b.DS)("contract/contractor/?only_submitted_contracts=True")}},providesTags:function(e){return e?[].concat((0,C.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:b.pJ.CONTRACT_INVOICE,key:t}}))),[{type:b.pJ.CONTRACT,id:"LIST"}]):[{type:b.pJ.CONTRACT,id:"LIST"}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),W=M.useAddContractInvoiceMutation,F=M.useDeleteContractInvoiceMutation,U=M.useGetContractInvoiceQuery,B=M.useListContractInvoiceQuery,G=M.useUpdateContractInvoiceMutation,Q=M.useGetSubmittedContractQuery,H=(M.useGetErrorProneQuery,M.endpoints.getContractInvoice,"contractinvoice"),z="Contract Invoice",Y=(0,r.forwardRef)((function(e,t){var n=e.data,o=e.isLoading,i=e.disableTable,c=void 0!==i&&i,u=e.onChange,l=void 0===u?function(){}:u,s=(0,r.useState)([]),d=(0,m.Z)(s,2),p=d[0],f=d[1],y=(0,r.useRef)(p),E=(0,r.useRef)([]),h=(0,r.useRef)([]),C=(0,b.Zp)({}),S=C.data,I=(C.isLoading,(0,b.DY)({})),_=I.data;I.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return p}}})),(0,r.useEffect)((function(){f(n),y.current=n}),[n]),(0,r.useEffect)((function(){E.current=(null===S||void 0===S?void 0:S.results)||[],h.current=(null===_||void 0===_?void 0:_.results)||[]}),[S,_]);var L=function(e){return r.createElement(a.JK,{value:e||0})};return r.createElement(a.PS,{baseRoute:"/purchase/".concat(H),description:z,isLoading:o,data:p,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:c,actionBodyTemplate:function(e){return r.createElement(v.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,T.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=y.current.filter((function(t){return t!==e}));y.current=t,f(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!c,newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){f(e),y.current=e,l(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(a._P,{field:"item_key",header:"Item",editorType:!c&&function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(g.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:E.current,onChange:function(e){t[n.key]=e.value,o(t,!0)},tabIndex:-1})}}),r.createElement(a._P,{field:"itemuom_key",header:"UOM",editorType:!c&&function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(g.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:h.current,onChange:function(e){t[n.key]=e.value,o(t,!0)},tabIndex:-1})}}),r.createElement(a._P,{field:"qty",header:"Quantiy",type:"number",editorType:!c&&"number"}),r.createElement(a._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!c&&"number"}),r.createElement(a._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,editorType:!c&&"currency",summaryFormatter:function(e){var t=e.row;return L(null===t||void 0===t?void 0:t.netamt)}}),r.createElement(a._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:!c&&"currency",summaryFormatter:function(e){var t=e.row;return L(null===t||void 0===t?void 0:t.taxamt)}}),r.createElement(a._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!c&&"currency",summaryFormatter:function(e){var t=e.row;return L(null===t||void 0===t?void 0:t.totalamt)}}))})),$=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},K=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},X=function(e){(0,p.Z)(e);var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,m.Z)(c,2),l=u[0],s=u[1],C=(0,r.useState)({}),S=(0,m.Z)(C,2),I=S[0],_=S[1],L=(0,o.UO)().id,N=parseInt(L||""),P=isNaN(N)||N<=0,w=(0,r.useRef)(),x=(0,r.useState)("S"),A=(0,m.Z)(x,2),R=A[0],D=A[1],q=(0,r.useState)("SAVE"),V=(0,m.Z)(q,2),Z=V[0],j=V[1],J=(0,r.useState)(!1),M=(0,m.Z)(J,2),F=M[0],B=M[1],X=(0,r.useRef)(),ee=U(N,{skip:P}),te=ee.data,ne=ee.isLoading,re=ee.refetch,oe=O("VCI",{skip:!P}),ae=oe.data,ie=oe.isLoading,ce=k({}),ue=ce.data,le=ce.isLoading,se=(0,r.useState)(P?0:null===te||void 0===te?void 0:te.apterm_days),de=(0,m.Z)(se,2),me=de[0],pe=de[1],fe=(0,r.useState)(P?new Date:new Date(null===te||void 0===te?void 0:te.invoicedate)),ve=(0,m.Z)(fe,2),ye=ve[0],ge=ve[1],Ee=(0,r.useState)(new Date),he=(0,m.Z)(Ee,2),Te=he[0],be=he[1],Ce=(0,o.s0)(),Se=(0,b.JB)(),Ie=Se.data,_e=Se.isLoading,Le=(0,b.rC)(),Ne=Le.data,Pe=(Le.isLoading,Q()),we=Pe.data,xe=Pe.isLoading,Ae=G(),Re=(0,m.Z)(Ae,2),Oe=Re[0],ke=Re[1].isLoading,De=W(),qe=(0,m.Z)(De,2),Ve=qe[0],Ze=qe[1].isLoading;(0,r.useEffect)((function(){_(te||Object.assign(Object.assign({},b.Y$),{invoicedate:K(new Date,!0),docid:"VCI",vouchno:null===ae||void 0===ae?void 0:ae.next_doc_id,loctyp:"PR"}))}),[te,ae]);(0,r.useEffect)((function(){pe(P?0:null===te||void 0===te?void 0:te.apterm_days),ge(P?new Date:new Date(null===te||void 0===te?void 0:te.invoicedate))}),[te]),(0,r.useEffect)((function(){var e=new Date(ye);e.setDate(e.getDate()+parseInt(me)),be(e)}),[me,ye]);var je=function(){return["U","R","C"].includes(null===te||void 0===te?void 0:te.docstatus)},Je=function(e,t){return $(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D(e);case 2:return n.next=4,j(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(a.Rm,{baseRoute:"/contract/".concat(H),description:z,id:N,data:I,ref:X,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(v.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===te||void 0===te?void 0:te.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=X.current)||void 0===t?void 0:t.getIsDirty())||F?(0,T.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Je("U","SUBMIT_WITH_SAVE")},reject:function(){return Je("U","SUBMIT_WITHOUT_SAVE")}}):Je("U","SUBMIT_WITH_SAVE")}}),r.createElement(v.z,{label:"Cancel",disabled:P||["R","C"].includes(null===te||void 0===te?void 0:te.docstatus),className:"p-button-plain",onClick:function(e){return j("CANCEL"),D("C"),!0}})),isUpdating:Ze||ke||l,isLoading:ne,onSubmit:function(e){return $(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r,o,a,c;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=null===(r=w.current)||void 0===r?void 0:r.getItems(),a=Object.assign(Object.assign({},e),{invoicedate:(0,b.p6)(e.invoicedate,"yyyy-MM-dd"),duedate:(0,b.p6)(Te,"yyyy-MM-dd"),loctyp:"PR",docstatus:R,action:Z,invamt:1e4,apterm_days:me,invoice_items:o}),t.prev=2,!P){t.next=9;break}return t.next=6,Ve(Object.assign(Object.assign({},a),b.Y$)).unwrap();case 6:c=t.sent,t.next=12;break;case 9:return t.next=11,Oe(Object.assign(Object.assign({},a),b.Y$)).unwrap();case 11:c=t.sent;case 12:console.log("submit resp",c),re(),n("Success",c.detail),s(!0),setTimeout((function(){Ce("/contract/".concat(H))}),b.P7),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),i("An error occurred","We couldn't save your post, try again!");case 22:case"end":return t.stop()}}),t,null,[[2,19]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-4 pt-4 pb-3 grid p-fluid h-full"},r.createElement("div",{className:"col-12 md:col-6 grid grid-nogutter p-fluid",style:{alignContent:"flex-start"}},r.createElement(a.Wi,{label:"Doc ID",name:"docid",className:(0,E.AK)("col-12 md:col-6"),control:e,errors:n,formItem:{component:f.o,componentProps:{disabled:!0}}})),r.createElement(a.Wi,{label:"Voucher Number",name:"vouchno",isLoading:ie,className:"col-10 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:8,formItem:{component:y.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(a.Wi,{label:"Vendor",name:"vend_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:_e,required:"Select a Vendor",leftSpan:3,rightSpan:9,formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Ne}}}),r.createElement(a.Wi,{label:"Invoice No",name:"invoiceno",className:"col-10 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:8,formItem:{component:f.o,componentProps:{maxLength:25}}}),r.createElement(a.Wi,{label:"Contract No",name:"contract_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:xe,required:"Select a Contract",leftSpan:3,rightSpan:9,formItem:{component:g.L,componentProps:{optionLabel:"contractno",optionValue:"key",filter:!0,filterBy:"contractno",options:null===we||void 0===we?void 0:we.results}}}),r.createElement(a.Wi,{label:"Invoice Date",name:"invoicedate",className:"col-10 md:col-6",useExplicit:!0,control:e,errors:n,convertValue:K,required:"Select a Date",leftSpan:4,rightSpan:8,onChange:function(e){ge(e.value)},formItem:{component:h.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(a.Wi,{label:"Project",name:"proj_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:_e,required:"Select a Project",leftSpan:3,rightSpan:9,formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Ie}}}),r.createElement(a.Wi,{label:"Terms",name:"apterm_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:le,required:"Select a Term",useExplicit:!0,leftSpan:4,rightSpan:8,onChange:function(e){var t=null===ue||void 0===ue?void 0:ue.filter((function(t){return t.key===e.value}))[0].days;pe(t)},formItem:{component:g.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:ue}}}),r.createElement("div",{className:"field col-6"}),r.createElement(a.Wi,{label:"Due Date",name:"duedate",className:"col-10 md:col-6",useExplicit:!0,control:e,errors:n,convertValue:K,leftSpan:4,rightSpan:8,formItem:{component:h.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd",value:Te}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(Y,{data:(null===te||void 0===te?void 0:te.invoice_items)||[],isLoading:ne,ref:w,disableTable:je(),onChange:function(e){return!F&&B(e)}})))}}))},ee=function(e){var t=B({},{refetchOnMountOrArgChange:!0}),n=t.data,o=t.isLoading,c=F(),u=(0,m.Z)(c,2),l=u[0],s=u[1].isLoading;return r.createElement(a.PS,{baseRoute:"/".concat(i.o,"/").concat(H),description:z,isLoading:o||s,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return l(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"invoiceno",header:"Invoice No",filteringType:"number"}),r.createElement(a._P,{field:"invoicedate",header:"Invoice Date",filteringType:"date"}),r.createElement(a._P,{field:"vendor.name",header:"Contractor",filteringType:"text"}),r.createElement(a._P,{field:"vouchno",header:"Voucher No",filteringType:"number"}),r.createElement(a._P,{field:"duedate",header:"Due Date",filteringType:"date"}),r.createElement(a._P,{field:"invamt",type:"currency",header:"Invoice Amt",filteringType:"currency"}),r.createElement(a._P,{field:"status.descr",header:"Status",filteringType:"text"}))},te=r.createElement(o.AW,{path:H},r.createElement(o.AW,{path:"new",element:r.createElement(X,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(X,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(ee,null)})),ne=function(){return r.createElement(o.Z5,null,r.createElement(o.AW,{path:"/",element:r.createElement(a.SV,{navItems:s})},r.createElement(o.AW,{index:!0,element:r.createElement(o.Fg,{to:c,replace:!0})}),j,te,r.createElement(o.AW,{path:":page/comming-soon",element:r.createElement(a.hg,null)}),r.createElement(o.AW,{path:"*",element:r.createElement(a.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=456.fde26849.chunk.js.map
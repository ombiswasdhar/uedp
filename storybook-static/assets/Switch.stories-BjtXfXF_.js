import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-CF25lsy-.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";var i,a,o;function s(){return(s=t((()=>{i=e(n(),1),a=r(),o=({defaultSelected:e=!1,selected:t,disabled:n=!1,onChange:r})=>{let[o,s]=(0,i.useState)(e),[c,l]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),[f,p]=(0,i.useState)(!1),m=t!==void 0,h=m?t:o,g=()=>{if(n)return;let e=!h;m||s(e),r?.(e)};return(0,a.jsx)(`div`,{className:`switch-container ${h?`selected`:`unselected`} ${n?`disabled`:``}`,onClick:g,onMouseDown:()=>!n&&l(!0),onMouseUp:()=>!n&&l(!1),onMouseLeave:()=>{!n&&d(!1),l(!1)},onMouseEnter:()=>!n&&d(!0),onFocus:()=>!n&&p(!0),onBlur:()=>!n&&p(!1),onKeyDown:e=>{n||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),g())},tabIndex:n?-1:0,role:`switch`,"aria-checked":h,"aria-disabled":n,children:(0,a.jsx)(`div`,{className:`switch-track`,children:(0,a.jsxs)(`div`,{className:`switch-thumb-container ${c?`pressed`:``}`,children:[(0,a.jsx)(`div`,{className:`switch-state-layer ${u?`hovered`:``} ${f?`focused`:``} ${c?`pressed`:``}`}),(0,a.jsx)(`div`,{className:`switch-thumb`})]})})})},o.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{defaultSelected:{required:!1,tsType:{name:`boolean`},description:`Initial state of the switch. If provided, acts as uncontrolled component initial state.`,defaultValue:{value:`false`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:`Controlled state of the switch.`},disabled:{required:!1,tsType:{name:`boolean`},description:`If true, the switch is disabled.`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:`Callback fired when the state changes.`}}}})))()}var c,l,u,d,f,p;function m(){return(m=t((()=>{s(),c={title:`Figma Components/Switch`,component:o,parameters:{layout:`centered`,docs:{description:{component:"High-fidelity Switch component mapped from Figma node `37:671`. Fully interactive with hover, focus, and pressed states driven natively by React and CSS transitions."}}},tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},defaultSelected:{control:`boolean`}}},l={args:{defaultSelected:!1,disabled:!1}},u={args:{defaultSelected:!0,disabled:!1}},d={args:{defaultSelected:!1,disabled:!0}},f={args:{defaultSelected:!0,disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: false,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: true,
    disabled: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: false,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Selected`,`DisabledUnselected`,`DisabledSelected`]})))()}m();export{l as Default,f as DisabledSelected,d as DisabledUnselected,u as Selected,p as __namedExportsOrder,c as default};
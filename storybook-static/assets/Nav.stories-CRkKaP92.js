import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-CMZhqCtW.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Nav-CVfwiDQ-.js";var o,s,c,l,u,d,f;function p(){return(p=t((()=>{o=e(n(),1),i(),s=r(),c={title:`Figma Components/Nav`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:"High-fidelity Nav component mapped from Figma node `17:1960`. Showcases exact Flexbox conversions from absolute positioning, active state red buttons (`rgba(255, 81, 89, 1)`), and strict typography using `Barlow Condensed` with precise letter-spacing."}}},tags:[`autodocs`],argTypes:{activeItem:{control:`select`,options:[`Shop`,`Vehicles`,`Taxis`,`About`,`search`]}},render:function(e){let[t,n]=(0,o.useState)(e.activeItem||`Shop`);return(0,s.jsx)(a,{...e,activeItem:t,onItemClick:e=>n(e)})}},l={args:{activeItem:`Shop`}},u={args:{activeItem:`Vehicles`}},d={args:{activeItem:`search`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: 'Shop'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: 'Vehicles'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: 'search'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`VehiclesActive`,`SearchActive`]})))()}p();export{l as Default,d as SearchActive,u as VehiclesActive,f as __namedExportsOrder,c as default};
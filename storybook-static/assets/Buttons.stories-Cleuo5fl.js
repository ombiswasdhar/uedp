import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DgxPaWgT.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r,i;function a(){return(a=e((()=>{t(),r=n(),i=({testId:e=`button`,variant:t=`Fill`,forceState:n,children:i,className:a=``,disabled:o,...s})=>{let c=o||n===`disabled`;return(0,r.jsx)(`button`,{className:`buttons-root variant-${t.toLowerCase()} ${n?`force-${n}`:``} ${a}`,"data-testid":e,disabled:c,...s,children:i||`Button`})},i.__docgenInfo={description:``,methods:[],displayName:`Buttons`,props:{testId:{required:!1,tsType:{name:`string`},description:`Figma Node ID: 51:584`,defaultValue:{value:`'button'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'Fill' | 'Outline' | 'Ghost'`,elements:[{name:`literal`,value:`'Fill'`},{name:`literal`,value:`'Outline'`},{name:`literal`,value:`'Ghost'`}]},description:``,defaultValue:{value:`'Fill'`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'default' | 'hover' | 'active' | 'focus' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'disabled'`}]},description:`Force a state for Storybook preview`},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),o={title:`Figma Components/Buttons`,component:i,parameters:{layout:`centered`,docs:{description:{component:"High-fidelity Buttons component mapped perfectly from Figma node `51:584`. Includes precise pixel measurements, border radius, Rajdhani typography, and strict RGBA color variants extracted directly from the Figma API for Fill, Outline, and Ghost buttons."}}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`Fill`,`Outline`,`Ghost`]},forceState:{control:`select`,options:[void 0,`default`,`hover`,`active`,`focus`,`disabled`],description:`Force a specific visual state to match Figma variants.`},disabled:{control:`boolean`},children:{control:`text`,description:`Text inside the button`}}},s={args:{variant:`Fill`,children:`Action`}},c={args:{variant:`Outline`,forceState:`hover`,children:`Action`}},l={args:{variant:`Ghost`,forceState:`active`,children:`Action`}},u={args:{variant:`Fill`,disabled:!0,children:`Action`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Fill',
    children: 'Action'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Outline',
    forceState: 'hover',
    children: 'Action'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Ghost',
    forceState: 'active',
    children: 'Action'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Fill',
    disabled: true,
    children: 'Action'
  }
}`,...u.parameters?.docs?.source}}},d=[`FillDefault`,`OutlineHover`,`GhostActive`,`FillDisabled`]})))()}f();export{s as FillDefault,u as FillDisabled,l as GhostActive,c as OutlineHover,d as __namedExportsOrder,o as default};
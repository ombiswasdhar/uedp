import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Buttons-BZJVdHlJ.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Figma Components/Buttons`,component:n,parameters:{layout:`centered`,docs:{description:{component:"High-fidelity Buttons component mapped perfectly from Figma node `51:584`. Includes precise pixel measurements, border radius, Rajdhani typography, and strict RGBA color variants extracted directly from the Figma API for Fill, Outline, and Ghost buttons."}}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`Fill`,`Outline`,`Ghost`]},forceState:{control:`select`,options:[void 0,`default`,`hover`,`active`,`focus`,`disabled`],description:`Force a specific visual state to match Figma variants.`},disabled:{control:`boolean`},children:{control:`text`,description:`Text inside the button`}}},i={args:{variant:`Fill`,children:`Action`}},a={args:{variant:`Outline`,forceState:`hover`,children:`Action`}},o={args:{variant:`Ghost`,forceState:`active`,children:`Action`}},s={args:{variant:`Fill`,disabled:!0,children:`Action`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Fill',
    children: 'Action'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Outline',
    forceState: 'hover',
    children: 'Action'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Ghost',
    forceState: 'active',
    children: 'Action'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Fill',
    disabled: true,
    children: 'Action'
  }
}`,...s.parameters?.docs?.source}}},c=[`FillDefault`,`OutlineHover`,`GhostActive`,`FillDisabled`]})))()}l();export{i as FillDefault,s as FillDisabled,o as GhostActive,a as OutlineHover,c as __namedExportsOrder,r as default};
import { c as create_ssr_component, v as validate_component, b as add_attribute, l as each, a as subscribe, s as setContext, f as escape, n as add_styles, d as compute_rest_props, g as getContext, e as spread, h as escape_attribute_value, i as escape_object, k as compute_slots, j as createEventDispatcher } from './ssr-QcpZni2m.js';
import { T as TabGroup, p as prefersReducedMotionStore, a as slide, g as getModalStore } from './TabGroup-jS5De9vw.js';
import { d as derived, r as readable, w as writable } from './index-ogegri_B.js';
import 'lodash';

const storeHighlightJs = writable(void 0);
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$5 = "";
const cControl = "text-start w-full flex items-center space-x-4";
const cControlIcons = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesControlIcons;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const svgCaretIcon = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class={classesControlCaret}>
			<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
		</svg>`;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id,
      panelId: `accordion-panel-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase$5} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlIcons} ${regionCaret} ${classesCaretState}`;
  classesControlIcons = `${cControlIcons} ${regionCaret}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}"${add_attribute("id", id, 0)}${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  ${$$slots.iconClosed || $$slots.iconOpen ? `  <div class="${"accordion-summary-icons " + escape(classesControlIcons, true)}">${openState ? `${slots.iconClosed ? slots.iconClosed({}) : `<!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END -->`}` : `${slots.iconOpen ? slots.iconOpen({}) : `<!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END -->`}`}</div>` : ` <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"><!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END --></div>`}</button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)}${add_attribute("aria-labelledby", id, 0)}>${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const cBase$4 = "flex flex-col items-center space-y-4 w-";
const cCaption = "text-center";
const cLegend = "text-sm w-full";
const cSwatch = "block aspect-square bg-black w-5 rounded-full mr-2";
const ConicGradient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesCaption;
  let classesLegend;
  let $$slots = compute_slots(slots);
  let { stops = [
    {
      color: ["neutral", 500],
      start: 0,
      end: 100
    }
  ] } = $$props;
  let { legend = false } = $$props;
  let { spin = false } = $$props;
  let { width = "w-24" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { digits = 0 } = $$props;
  let { regionCaption = "" } = $$props;
  let { regionCone = "" } = $$props;
  let { regionLegend = "" } = $$props;
  let generatedLegendList;
  if ($$props.stops === void 0 && $$bindings.stops && stops !== void 0)
    $$bindings.stops(stops);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.digits === void 0 && $$bindings.digits && digits !== void 0)
    $$bindings.digits(digits);
  if ($$props.regionCaption === void 0 && $$bindings.regionCaption && regionCaption !== void 0)
    $$bindings.regionCaption(regionCaption);
  if ($$props.regionCone === void 0 && $$bindings.regionCone && regionCone !== void 0)
    $$bindings.regionCone(regionCone);
  if ($$props.regionLegend === void 0 && $$bindings.regionLegend && regionLegend !== void 0)
    $$bindings.regionLegend(regionLegend);
  classesBase = `${cBase$4} ${$$props.class ?? ""}`;
  classesCaption = `${cCaption} ${regionCaption}`;
  classesLegend = `${cLegend} ${regionLegend}`;
  return `<figure class="${"conic-gradient " + escape(classesBase, true)}" data-testid="conic-gradient"> ${$$slots.default ? `<figcaption class="${"conic-caption " + escape(classesCaption, true)}">${slots.default ? slots.default({}) : ``}</figcaption>` : ``}  ${``}  ${legend && generatedLegendList ? `<ul class="${"conic-list list " + escape(classesLegend, true)}">${each(generatedLegendList, ({ color, label, value }) => {
    return `  <li class="${"conic-item " + escape(hover, true)}"><span class="${"conic-swatch " + escape(cSwatch, true)}"${add_styles({ "background": color })}></span> <span class="conic-label flex-auto">${escape(label)}</span> <strong class="conic-value">${escape(value)}%</strong> </li>`;
  })}</ul>` : ``}</figure>`;
});
const cBase$3 = "p-1";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { display = "inline-flex" } = $$props;
  let { flexDirection = "flex-row" } = $$props;
  let { gap = "gap-1" } = $$props;
  let { background = "bg-surface-200-700-token" } = $$props;
  let { border = "border-token border-surface-400-500-token" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { padding = "px-4 py-1" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { color = "" } = $$props;
  let { fill = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("rounded", rounded);
  setContext("padding", padding);
  setContext("active", active);
  setContext("hover", hover);
  setContext("color", color);
  setContext("fill", fill);
  setContext("regionLabel", regionLabel);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$3} ${display} ${flexDirection} ${gap} ${background} ${border} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"radio-group " + escape(classesBase, true)}" data-testid="radio-group" role="radiogroup"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$2 = "flex-auto";
const cWrapper = "text-base text-center cursor-pointer";
const cDisabled = "opacity-50 cursor-not-allowed";
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let classesActive;
  let classesDisabled;
  let classsBase;
  let classesWrapper;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "label",
    "rounded",
    "padding",
    "active",
    "hover",
    "color",
    "fill",
    "regionLabel"
  ]);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { color = getContext("color") } = $$props;
  let { fill = getContext("fill") } = $$props;
  let { regionLabel = getContext("regionLabel") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  checked = value === group;
  classesActive = checked ? `${active} ${color} ${fill}` : hover;
  classesDisabled = $$props.disabled ? cDisabled : "";
  classsBase = `${cBase$2}`;
  classesWrapper = `${cWrapper} ${padding} ${rounded} ${classesActive} ${classesDisabled} ${$$props.class ?? ""}`;
  return `<label class="${"radio-label " + escape(classsBase, true) + " " + escape(regionLabel, true)}"> <div class="${"radio-item " + escape(classesWrapper, true)}" data-testid="radio-item" role="radio"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)} tabindex="0"${add_attribute("title", title, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div> ${slots.default ? slots.default({}) : ``}</div></label>`;
});
const cBase$1 = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase$1} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}${add_attribute("title", title, 0)}> <div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const cBase = "overflow-hidden shadow";
const cHeader = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";
function languageFormatter(lang) {
  if (lang === "js")
    return "javascript";
  if (lang === "ts")
    return "typescript";
  if (lang === "shell")
    return "terminal";
  return lang;
}
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $storeHighlightJs, $$unsubscribe_storeHighlightJs;
  $$unsubscribe_storeHighlightJs = subscribe(storeHighlightJs, (value) => $storeHighlightJs = value);
  createEventDispatcher();
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { lineNumbers = false } = $$props;
  let { background = "bg-neutral-900/90" } = $$props;
  let { blur = "" } = $$props;
  let { text = "text-sm" } = $$props;
  let { color = "text-white" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow" } = $$props;
  let { button = "btn btn-sm variant-soft !text-white" } = $$props;
  let { buttonLabel = "Copy" } = $$props;
  let { buttonCopied = "👍" } = $$props;
  let formatted = false;
  let displayCode = code;
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.lineNumbers === void 0 && $$bindings.lineNumbers && lineNumbers !== void 0)
    $$bindings.lineNumbers(lineNumbers);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.buttonCopied === void 0 && $$bindings.buttonCopied && buttonCopied !== void 0)
    $$bindings.buttonCopied(buttonCopied);
  {
    if ($storeHighlightJs !== void 0) {
      displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
      formatted = true;
    }
  }
  {
    if (lineNumbers) {
      displayCode = displayCode.replace(/^/gm, () => {
        return '<span class="line"></span>	';
      });
      formatted = true;
    }
  }
  classesBase = `${cBase} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${$$props.class ?? ""}`;
  $$unsubscribe_storeHighlightJs();
  return ` ${language && code ? `<div class="${"codeblock " + escape(classesBase, true)}" data-testid="codeblock"> <header class="${"codeblock-header " + escape(cHeader, true)}"> <span class="codeblock-language">${escape(languageFormatter(language))}</span>  <button class="${"codeblock-btn " + escape(button, true)}">${escape(buttonLabel)}</button></header>  <pre class="${"codeblock-pre " + escape(cPre, true)}"><code class="${"codeblock-code language-" + escape(language, true) + " lineNumbers"}">${formatted ? `<!-- HTML_TAG_START -->${displayCode}<!-- HTML_TAG_END -->` : `${escape(code.trim())}`}</code></pre></div>` : ``}`;
});
const css$4 = {
  code: "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$4);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("viewBox", viewBox, 0)} class="svelte-c8tyih">${title ? `<title>${escape(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const IoIosInformationCircleOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path> <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>`;
    }
  })}`;
});
const IoMdAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"></path>`;
    }
  })}`;
});
const Details = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const conicStops = [
    { color: "transparent", start: 0, end: 25 },
    {
      color: "rgb(var(--color-primary-500))",
      start: 75,
      end: 100
    }
  ];
  createEventDispatcher();
  let { layer_details } = $$props;
  let { layername } = $$props;
  if ($$props.layer_details === void 0 && $$bindings.layer_details && layer_details !== void 0)
    $$bindings.layer_details(layer_details);
  if ($$props.layername === void 0 && $$bindings.layername && layername !== void 0)
    $$bindings.layername(layername);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${layer_details.length ? each(layer_details, (param) => {
      return `${param.cantakeValuesType == "" ? `${String(param.datatype).trim() == "int" || String(param.datatype).trim() == "float" ? `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input${add_attribute("id", param.name, 0)} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="number"${add_attribute("placeholder", param.name, 0)}${add_attribute("value", param.default ? param.default : "", 0)}>` : `${String(param.datatype).trim() == "bool" ? `<label${add_attribute("for", param.name, 0)} class="text-sm">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> ${validate_component(RadioGroup, "RadioGroup").$$render(
        $$result,
        {
          id: param.name,
          class: "mb-4 mt-0 variant-form-material"
        },
        {},
        {
          default: () => {
            return `${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                name: "justify",
                value: false,
                class: "pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material",
                group: param.default
              },
              {
                group: ($$value) => {
                  param.default = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `False`;
                }
              }
            )} ${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                name: "justify",
                value: true,
                class: "pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material",
                group: param.default
              },
              {
                group: ($$value) => {
                  param.default = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `True`;
                }
              }
            )} `;
          }
        }
      )}` : `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input${add_attribute("id", param.name, 0)} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="text"${add_attribute("placeholder", param.name, 0)}${add_attribute("value", param.default ? param.default : "", 0)}>`}`}` : `${param.cantakeValuesType == "string" ? `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1 ">${escape(param.name)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <select class="select rounded-md text-xs p-2 mb-4 variant-form-material">${each(param.cantakeValues, (opt) => {
        return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
      })}</select>` : `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1 ">${escape(param.name)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input type="range" class="rounded-md text-xs p-2 mb-4 variant-form-material"${add_attribute("value", param.values[0], 0)}${add_attribute("max", param.values[1], 0)}>`}`}`;
    }) : `${validate_component(ConicGradient, "ConicGradient").$$render(
      $$result,
      {
        stops: conicStops,
        spin: true,
        width: "w-10"
      },
      {},
      {
        default: () => {
          return `Loading`;
        }
      }
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const PUBLIC_API_URL = "http://127.0.0.1:8000/";
const selectedLayers = writable([]);
const lossFunction = writable([]);
const optFunction = writable([]);
const lrScheduleFunction = writable([]);
const epoch = writable(25);
const batchSize = writable(32);
const lr = writable(0.01);
const alloptLayers = readable(["Adadelta", "Adagrad", "Adam", "AdamW", "SparseAdam", "Adamax", "ASGD", "SGD", "RAdam", "Rprop", "RMSprop", "Optimizer", "NAdam", "LBFGS"]);
const alllossLayers = readable(["L1Loss", "NLLLoss", "KLDivLoss", "MSELoss", "BCELoss", "BCEWithLogitsLoss", "NLLLoss2d", "PoissonNLLLoss", "CosineEmbeddingLoss", "CTCLoss", "HingeEmbeddingLoss", "MarginRankingLoss", "MultiLabelMarginLoss", "MultiLabelSoftMarginLoss", "MultiMarginLoss", "SmoothL1Loss", "GaussianNLLLoss", "HuberLoss", "SoftMarginLoss", "CrossEntropyLoss", "TripletMarginLoss", "AdaptiveLogSoftmaxWithLoss", "TripletMarginWithDistanceLoss"]);
const allLrSchedulerLayers = readable(["ConstantLR", "CosineAnnealingLR", "CosineAnnealingWarmRestarts", "CyclicLR", "ExponentialLR", "LambdaLR", "LinearLR", "MultiStepLR", "MultiplicativeLR", "OneCycleLR", "PolynomialLR", "ReduceLROnPlateau", "SequentialLR", "StepLR"]);
const layers = derived(selectedLayers, ($selectedLayers) => {
  let tparam, lay = [];
  if ($selectedLayers) {
    if ($selectedLayers.length > 0) {
      $selectedLayers.forEach((el, index) => {
        if (el.changedParam) {
          tparam = el.changedParam.map((ch) => {
            for (const p of el.parameters) {
              if (p.name == ch) {
                return `${p.name}= ${p.default}`;
              }
            }
          });
          lay.push(`self.${el.layer.toLowerCase()}_${index} = nn.${el.layer}(${tparam.join(", ")})`);
        } else {
          lay.push(`self.${el.layer.toLowerCase()}_${index} = nn.${el.layer}()`);
        }
      });
      return lay;
    } else {
      return [`#Layers not selected`];
    }
  }
});
const loss_criterion = derived(lossFunction, ($lossFunction) => {
  let tparam;
  if ($lossFunction) {
    if ($lossFunction.length > 0) {
      if ($lossFunction[0].changedParam) {
        tparam = $lossFunction[0].changedParam.map((ch) => {
          for (const p of $lossFunction[0].parameters) {
            if (p.name == ch) {
              return `${p.name}= ${p.default}`;
            }
          }
        });
        return `nn.${$lossFunction[0].layer}(${tparam.join(", ")})`;
      } else {
        return `nn.${$lossFunction[0].layer}()`;
      }
    } else {
      return `#Loss not selected`;
    }
  }
});
const opt_criterion = derived(optFunction, ($optFunction) => {
  let tparam;
  if ($optFunction) {
    if ($optFunction.length > 0) {
      if ($optFunction[0].changedParam) {
        tparam = $optFunction[0].changedParam.map((ch) => {
          for (const p of $optFunction[0].parameters) {
            if (p.name == ch) {
              return `${p.name}= ${p.default}`;
            }
          }
        });
        return `optim.${$optFunction[0].layer}(${tparam.join(", ")})`;
      } else {
        return `optim.${$optFunction[0].layer}(model.parameters(), lr=learning_rate)`;
      }
    } else {
      return `#optimizer not selected`;
    }
  }
});
const lr_criterion = derived(lrScheduleFunction, ($lrScheduleFunction) => {
  let tparam;
  if ($lrScheduleFunction) {
    if ($lrScheduleFunction.length > 0) {
      if ($lrScheduleFunction[0].changedParam) {
        tparam = $lrScheduleFunction[0].changedParam.map((ch) => {
          for (const p of $lrScheduleFunction[0].parameters) {
            if (p.name == ch) {
              return `${p.name}: ${p.default}`;
            }
          }
        });
        return `optim.lr_scheduler.${$lrScheduleFunction[0].layer}(${tparam.join(", ")})`;
      } else {
        return `optim.lr_scheduler.${$lrScheduleFunction[0].layer}(optimizer, lr=learning_rate)`;
      }
    } else {
      return ``;
    }
  }
});
const css$3 = {
  code: ".custom-add-button.svelte-1tzynnc{color:#d4163c}.custom-add-button.svelte-1tzynnc:hover{color:#f63057}.infoButton.svelte-1tzynnc:hover{box-shadow:0 0 8px rgba(3, 0, 0, 0.4)}",
  map: null
};
const SingleLayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_optFunction;
  let $$unsubscribe_lrScheduleFunction;
  let $$unsubscribe_allLrSchedulerLayers;
  let $$unsubscribe_alloptLayers;
  let $$unsubscribe_lossFunction;
  let $$unsubscribe_alllossLayers;
  $$unsubscribe_optFunction = subscribe(optFunction, (value) => value);
  $$unsubscribe_lrScheduleFunction = subscribe(lrScheduleFunction, (value) => value);
  $$unsubscribe_allLrSchedulerLayers = subscribe(allLrSchedulerLayers, (value) => value);
  $$unsubscribe_alloptLayers = subscribe(alloptLayers, (value) => value);
  $$unsubscribe_lossFunction = subscribe(lossFunction, (value) => value);
  $$unsubscribe_alllossLayers = subscribe(alllossLayers, (value) => value);
  getModalStore();
  let { layername } = $$props;
  let layer_details = [];
  if ($$props.layername === void 0 && $$bindings.layername && layername !== void 0)
    $$bindings.layername(layername);
  $$result.css.add(css$3);
  $$unsubscribe_optFunction();
  $$unsubscribe_lrScheduleFunction();
  $$unsubscribe_allLrSchedulerLayers();
  $$unsubscribe_alloptLayers();
  $$unsubscribe_lossFunction();
  $$unsubscribe_alllossLayers();
  return `<div class="flex justify-start w-full gap-2 items-start content-start justify-items-start"><button type="button" class="custom-add-button btn-icon btn-sm btn-icon-sm mt-[0.3rem] svelte-1tzynnc">${validate_component(IoMdAdd, "IoMdAdd").$$render($$result, {}, {}, {})}</button> ${validate_component(AccordionItem, "AccordionItem").$$render(
    $$result,
    {
      rounded: "rounded-md",
      class: "border rounded-md border-zinc-800 w-full",
      transitions: true,
      padding: "p-2"
    },
    {},
    {
      content: () => {
        return `<div class="flex w-full flex-col p-2">${validate_component(Details, "Details").$$render($$result, { layer_details, layername }, {}, {})}</div> `;
      },
      summary: () => {
        return `<div class="flex w-full justify-between"><h6 class="text-sm">${escape(layername)}</h6> <button type="button" class="btn-icon btn-sm btn-icon-sm p-0 m-0 !bg-transparent hover:text-[#f63057] w-[23px] infoButton svelte-1tzynnc">${validate_component(IoIosInformationCircleOutline, "IoIosInformationCircleOutline").$$render($$result, {}, {}, {})}</button></div>`;
      }
    }
  )} </div>`;
});
const Layers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(PUBLIC_API_URL);
  const conicStops = [
    { color: "transparent", start: 0, end: 25 },
    {
      color: "rgb(var(--color-primary-500))",
      start: 75,
      end: 100
    }
  ];
  let searchValue = "";
  let layers2 = [];
  let layerShow = [];
  {
    {
      layerShow = layers2;
    }
  }
  return `<div class="relative w-full"><div><h4 class="h4" data-svelte-h="svelte-84yan">Layers</h4> <div class="relative w-full mb-4 mt-4"><input autocomplete="off" type="search" id="search-dropdown" class="block p-2 w-full z-20 text-sm text-gray-900 bg-transparent rounded-md border-s-2 border focus:ring-[#c0b6b4] focus:border-[#c0b6b4] light:border-slate-900 dark:bg-transparent dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Layers" required${add_attribute("value", searchValue, 0)}> <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg hover:text-[#d4163c]" data-svelte-h="svelte-vgwiym"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></button></div></div> ${validate_component(Accordion, "Accordion").$$render($$result, { class: "overflow-y-scroll h-[70lvh]" }, {}, {
    default: () => {
      return `${layerShow.length ? each(layerShow, (layer, i) => {
        return `${validate_component(SingleLayer, "SingleLayer").$$render($$result, { layername: layer }, {}, {})}`;
      }) : `${validate_component(ConicGradient, "ConicGradient").$$render(
        $$result,
        {
          stops: conicStops,
          spin: true,
          width: "w-10"
        },
        {},
        {
          default: () => {
            return `Loading`;
          }
        }
      )}`}`;
    }
  })}</div>`;
});
const MdRemove = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M19 13H5v-2h14v2z"></path>`;
    }
  })}`;
});
const SelectedDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_allLrSchedulerLayers;
  let $$unsubscribe_alllossLayers;
  let $$unsubscribe_alloptLayers;
  let $$unsubscribe_lrScheduleFunction;
  let $$unsubscribe_selectedLayers;
  let $$unsubscribe_lossFunction;
  let $$unsubscribe_optFunction;
  $$unsubscribe_allLrSchedulerLayers = subscribe(allLrSchedulerLayers, (value) => value);
  $$unsubscribe_alllossLayers = subscribe(alllossLayers, (value) => value);
  $$unsubscribe_alloptLayers = subscribe(alloptLayers, (value) => value);
  $$unsubscribe_lrScheduleFunction = subscribe(lrScheduleFunction, (value) => value);
  $$unsubscribe_selectedLayers = subscribe(selectedLayers, (value) => value);
  $$unsubscribe_lossFunction = subscribe(lossFunction, (value) => value);
  $$unsubscribe_optFunction = subscribe(optFunction, (value) => value);
  const conicStops = [
    { color: "transparent", start: 0, end: 25 },
    {
      color: "rgb(var(--color-primary-500))",
      start: 75,
      end: 100
    }
  ];
  let { layer_details } = $$props;
  let { key } = $$props;
  let { layername } = $$props;
  let isParamChanged = false;
  if ($$props.layer_details === void 0 && $$bindings.layer_details && layer_details !== void 0)
    $$bindings.layer_details(layer_details);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.layername === void 0 && $$bindings.layername && layername !== void 0)
    $$bindings.layername(layername);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<button type="button" class="btn btn-sm rounded-md variant-ghost-secondary text-xs mb-2">${escape("Edit")}</button> ${layer_details.length ? each(layer_details, (param) => {
      return `${param.cantakeValuesType == "" ? `${String(param.datatype).trim() == "int" || String(param.datatype).trim() == "float" ? `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input${add_attribute("id", param.name, 0)} ${"disabled"} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="number"${add_attribute("placeholder", param.name, 0)}${add_attribute("value", param.default ? param.default : "", 0)}>` : `${String(param.datatype).trim() == "bool" ? `<label${add_attribute("for", param.name, 0)} class="text-sm">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> ${validate_component(RadioGroup, "RadioGroup").$$render(
        $$result,
        {
          id: param.name,
          class: "mb-4 mt-0 variant-form-material"
        },
        {},
        {
          default: () => {
            return `${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                disabled: !isParamChanged,
                name: "justify",
                value: false,
                class: "pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material",
                group: param.default
              },
              {
                group: ($$value) => {
                  param.default = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `False`;
                }
              }
            )} ${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                disabled: !isParamChanged,
                name: "justify",
                value: true,
                class: "pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material",
                group: param.default
              },
              {
                group: ($$value) => {
                  param.default = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `True`;
                }
              }
            )} `;
          }
        }
      )}` : `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1">${escape(`${param.name} (${String(param.datatype).trim()})`)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input${add_attribute("id", param.name, 0)} ${"disabled"} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="text"${add_attribute("placeholder", param.name, 0)}${add_attribute("value", param.default ? param.default : "", 0)}>`}`}` : `${param.cantakeValuesType == "string" ? `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1 ">${escape(param.name)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <select class="select rounded-md text-xs p-2 mb-4 variant-form-material" ${"disabled"}>${each(param.cantakeValues, (opt) => {
        return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
      })}</select>` : `<label${add_attribute("for", param.name, 0)} class="text-sm mb-1 ">${escape(param.name)}${escape(`${!param.isOptional ? "*" : ""}`)}</label> <input ${"disabled"}${add_attribute("id", param.name, 0)} type="range" class="rounded-md text-xs p-2 mb-4 variant-form-material"${add_attribute("value", param.values[0], 0)}${add_attribute("max", param.values[1], 0)}>`}`}`;
    }) : `${validate_component(ConicGradient, "ConicGradient").$$render(
      $$result,
      {
        stops: conicStops,
        spin: true,
        width: "w-10"
      },
      {},
      {
        default: () => {
          return `Loading`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_allLrSchedulerLayers();
  $$unsubscribe_alllossLayers();
  $$unsubscribe_alloptLayers();
  $$unsubscribe_lrScheduleFunction();
  $$unsubscribe_selectedLayers();
  $$unsubscribe_lossFunction();
  $$unsubscribe_optFunction();
  return $$rendered;
});
const css$2 = {
  code: ".custom-add-button.svelte-pqia4f{color:#d4163c}.custom-add-button.svelte-pqia4f:hover{color:#f63057}",
  map: null
};
const SingleSelectedLayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  getModalStore();
  let { layername } = $$props;
  let { key } = $$props;
  let { addedLayer = [] } = $$props;
  let selecteddata, LayerIndex;
  if ($$props.layername === void 0 && $$bindings.layername && layername !== void 0)
    $$bindings.layername(layername);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.addedLayer === void 0 && $$bindings.addedLayer && addedLayer !== void 0)
    $$bindings.addedLayer(addedLayer);
  $$result.css.add(css$2);
  selecteddata = addedLayer;
  LayerIndex = key;
  return `<div class="flex justify-start w-full gap-2 items-start content-start justify-items-start"><button type="button" class="custom-add-button btn-icon btn-sm btn-icon-sm mt-[0.3rem] svelte-pqia4f">${validate_component(MdRemove, "MdRemove").$$render($$result, {}, {}, {})}</button> ${validate_component(AccordionItem, "AccordionItem").$$render(
    $$result,
    {
      rounded: "rounded-md",
      class: "border rounded-md border-zinc-800 w-full",
      transitions: true,
      padding: "p-2"
    },
    {},
    {
      content: () => {
        return `<div class="flex w-full flex-col p-2">${validate_component(SelectedDetails, "SelectedDetails").$$render(
          $$result,
          {
            key: LayerIndex,
            layer_details: selecteddata.parameters,
            layername
          },
          {},
          {}
        )}</div> `;
      },
      summary: () => {
        return `<div class="flex w-full justify-between"><h6 class="text-sm">${escape(layername)}</h6> </div>`;
      }
    }
  )} </div>`;
});
const SelectedLayers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_allLrSchedulerLayers;
  let $$unsubscribe_alllossLayers;
  let $$unsubscribe_alloptLayers;
  let $lr, $$unsubscribe_lr;
  let $batchSize, $$unsubscribe_batchSize;
  let $epoch, $$unsubscribe_epoch;
  let $lossFunction, $$unsubscribe_lossFunction;
  let $optFunction, $$unsubscribe_optFunction;
  let $lrScheduleFunction, $$unsubscribe_lrScheduleFunction;
  let $selectedLayers, $$unsubscribe_selectedLayers;
  $$unsubscribe_allLrSchedulerLayers = subscribe(allLrSchedulerLayers, (value) => value);
  $$unsubscribe_alllossLayers = subscribe(alllossLayers, (value) => value);
  $$unsubscribe_alloptLayers = subscribe(alloptLayers, (value) => value);
  $$unsubscribe_lr = subscribe(lr, (value) => $lr = value);
  $$unsubscribe_batchSize = subscribe(batchSize, (value) => $batchSize = value);
  $$unsubscribe_epoch = subscribe(epoch, (value) => $epoch = value);
  $$unsubscribe_lossFunction = subscribe(lossFunction, (value) => $lossFunction = value);
  $$unsubscribe_optFunction = subscribe(optFunction, (value) => $optFunction = value);
  $$unsubscribe_lrScheduleFunction = subscribe(lrScheduleFunction, (value) => $lrScheduleFunction = value);
  $$unsubscribe_selectedLayers = subscribe(selectedLayers, (value) => $selectedLayers = value);
  let ep = $epoch, bts = $batchSize, lrate = $lr;
  {
    epoch.set(ep);
  }
  {
    batchSize.set(bts);
  }
  {
    lr.set(lrate);
  }
  $$unsubscribe_allLrSchedulerLayers();
  $$unsubscribe_alllossLayers();
  $$unsubscribe_alloptLayers();
  $$unsubscribe_lr();
  $$unsubscribe_batchSize();
  $$unsubscribe_epoch();
  $$unsubscribe_lossFunction();
  $$unsubscribe_optFunction();
  $$unsubscribe_lrScheduleFunction();
  $$unsubscribe_selectedLayers();
  return `<div><h4 class="h4" data-svelte-h="svelte-19mol1o">Model</h4> <div class="my-4"><label for="Epoch" class="text-sm mb-1" data-svelte-h="svelte-18j1f9i">Number of epoch</label> <input id="Epoch" class="input rounded-md text-xs p-2" type="number" placeholder=""${add_attribute("value", ep, 0)}></div> <div class="my-4"><label for="batchSize" class="text-sm mb-1" data-svelte-h="svelte-258z2">Batch size</label> <input id="batchSize" class="input rounded-md text-xs p-2" type="number" placeholder=""${add_attribute("value", bts, 0)}></div> <div class="my-4"><label for="batchSize" class="text-sm mb-1" data-svelte-h="svelte-1ov3ydr">Learning rate</label> <input id="batchSize" class="input rounded-md text-xs p-2" type="number" placeholder=""${add_attribute("value", lrate, 0)}></div> <div class="card p-2 rounded-md my-4 variant-ringed"><h6 class="h6 mb-2" data-svelte-h="svelte-18zgdgl">Loss functions</h6> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${each($lossFunction, (ly, i) => {
        return `${validate_component(SingleSelectedLayer, "SingleSelectedLayer").$$render(
          $$result,
          {
            key: i,
            addedLayer: ly,
            layername: ly.layer
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="card p-2 rounded-md my-4 variant-ringed"><h6 class="h6 mb-2" data-svelte-h="svelte-1imwlfz">Optimizers</h6> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${each($optFunction, (ly, i) => {
        return `${validate_component(SingleSelectedLayer, "SingleSelectedLayer").$$render(
          $$result,
          {
            key: i,
            addedLayer: ly,
            layername: ly.layer
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="card p-2 rounded-md my-4 variant-ringed"><h6 class="h6 mb-2" data-svelte-h="svelte-fiqptg">Learning rate scheduler</h6> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${each($lrScheduleFunction, (ly, i) => {
        return `${validate_component(SingleSelectedLayer, "SingleSelectedLayer").$$render(
          $$result,
          {
            key: i,
            addedLayer: ly,
            layername: ly.layer
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="card p-2 rounded-md my-4 variant-ringed"><h6 class="h6 mb-2" data-svelte-h="svelte-rhm0i4">Selected Layers</h6> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${$selectedLayers.length > 0 ? `${each($selectedLayers, (ly, index) => {
        return `${validate_component(SingleSelectedLayer, "SingleSelectedLayer").$$render(
          $$result,
          {
            key: index,
            addedLayer: ly,
            layername: ly.layer
          },
          {},
          {}
        )}`;
      })}` : ``}`;
    }
  })}</div></div> ${$$result.head += `<!-- HEAD_svelte-1270p8n_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous"><!-- HEAD_svelte-1270p8n_END -->`, ""}`;
});
const css$1 = {
  code: "p.svelte-7ot07r.svelte-7ot07r,span.svelte-7ot07r.svelte-7ot07r{font-size:0.85rem;margin-bottom:0.5rem}.list.svelte-7ot07r span.svelte-7ot07r{margin-bottom:-1px}",
  map: null
};
const ModelDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lrScheduleFunction, $$unsubscribe_lrScheduleFunction;
  let $optFunction, $$unsubscribe_optFunction;
  let $lossFunction, $$unsubscribe_lossFunction;
  let $selectedLayers, $$unsubscribe_selectedLayers;
  let $epoch, $$unsubscribe_epoch;
  let $batchSize, $$unsubscribe_batchSize;
  let $lr, $$unsubscribe_lr;
  $$unsubscribe_lrScheduleFunction = subscribe(lrScheduleFunction, (value) => $lrScheduleFunction = value);
  $$unsubscribe_optFunction = subscribe(optFunction, (value) => $optFunction = value);
  $$unsubscribe_lossFunction = subscribe(lossFunction, (value) => $lossFunction = value);
  $$unsubscribe_selectedLayers = subscribe(selectedLayers, (value) => $selectedLayers = value);
  $$unsubscribe_epoch = subscribe(epoch, (value) => $epoch = value);
  $$unsubscribe_batchSize = subscribe(batchSize, (value) => $batchSize = value);
  $$unsubscribe_lr = subscribe(lr, (value) => $lr = value);
  let optimizer, lossFunc, lrScheduler;
  $$result.css.add(css$1);
  lossFunc = $lossFunction;
  optimizer = $optFunction;
  lrScheduler = $lrScheduleFunction;
  $$unsubscribe_lrScheduleFunction();
  $$unsubscribe_optFunction();
  $$unsubscribe_lossFunction();
  $$unsubscribe_selectedLayers();
  $$unsubscribe_epoch();
  $$unsubscribe_batchSize();
  $$unsubscribe_lr();
  return `<div><div class="flex justify-between items-start" data-svelte-h="svelte-guqo7f"><h4 class="h4 mb-4">Model</h4> </div> <p class="svelte-7ot07r">Epochs : ${escape($epoch)}</p> <p class="svelte-7ot07r">Batch size : ${escape($batchSize)}</p> <p class="svelte-7ot07r">Learning rate : ${escape($lr)}</p> ${lossFunc.length > 0 ? `${lossFunc[0].changedParam ? `<p class="svelte-7ot07r">Loss : ${escape(lossFunc[0].layer)}
                (${each(lossFunc[0].changedParam, (ch) => {
    return ` ${each(lossFunc[0].parameters, (p, i) => {
      return `${p.name == ch ? `${escape(`${p.name}: ${p.default}`)} ${lossFunc[0].changedParam.length - 1 > i ? `,` : ``}` : ``}`;
    })} `;
  })})</p>` : `<p class="svelte-7ot07r">Loss : ${escape(lossFunc[0].layer)}()</p>`}` : ``} ${optimizer.length > 0 ? `${optimizer[0].changedParam ? `<p class="svelte-7ot07r">Optimizer : ${escape(optimizer[0].layer)} 
                (${each(optimizer[0].changedParam, (ch) => {
    return ` ${each(optimizer[0].parameters, (p, i) => {
      return `${p.name == ch ? `${escape(`${p.name}: ${p.default}`)} ${optimizer[0].changedParam.length - 1 > i ? `,` : ``}` : ``}`;
    })} `;
  })})</p>` : `<p class="svelte-7ot07r">Optimizer : ${escape(optimizer[0].layer)}(model.parameters(), lr=${escape($lr)})</p>`}` : ``} ${lrScheduler.length > 0 ? `${lrScheduler[0].changedParam ? `<p class="svelte-7ot07r">learning rate Scheduler : ${escape(lrScheduler[0].layer)} 
            (${each(lrScheduler[0].changedParam, (ch) => {
    return ` ${each(lrScheduler[0].parameters, (p, i) => {
      return `${p.name == ch ? `${escape(`${p.name}: ${p.default}`)} ${lrScheduler[0].changedParam.length - 1 > i ? `,` : ``}` : ``}`;
    })} `;
  })})</p>` : `<p class="svelte-7ot07r">learning rate Scheduler : ${escape(lrScheduler[0].layer)}(optimizer)</p>`}` : ``} <ol class="list svelte-7ot07r">${$selectedLayers.length > 0 ? `<p class="svelte-7ot07r" data-svelte-h="svelte-1hn0xa">Layers</p> ${each($selectedLayers, (ly, i) => {
    return `<li>${ly.changedParam ? `<span class="flex-auto svelte-7ot07r">${escape(i + 1)}: 
                        ${escape(ly.layer)}
                        (${each(ly.changedParam, (ch) => {
      return ` ${each(ly.parameters, (p, i2) => {
        return `${p.name == ch ? `${escape(`${p.name}: ${p.default}`)} ${ly.changedParam.length - 1 > i2 ? `,` : ``}` : ``}`;
      })} `;
    })})
                        </span>` : `<span class="flex-auto svelte-7ot07r">${escape(i + 1)}: ${escape(ly.layer)}()</span>`} </li>`;
  })}` : ``}</ol> </div>`;
});
const css = {
  code: ".codeblock-pre{text-wrap:nowrap;overflow-x:scroll}",
  map: null
};
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lr_criterion, $$unsubscribe_lr_criterion;
  let $opt_criterion, $$unsubscribe_opt_criterion;
  let $loss_criterion, $$unsubscribe_loss_criterion;
  let $lr, $$unsubscribe_lr;
  let $batchSize, $$unsubscribe_batchSize;
  let $epoch, $$unsubscribe_epoch;
  let $selectedLayers, $$unsubscribe_selectedLayers;
  let $layers, $$unsubscribe_layers;
  let $$unsubscribe_lrScheduleFunction;
  let $$unsubscribe_lossFunction;
  let $$unsubscribe_optFunction;
  $$unsubscribe_lr_criterion = subscribe(lr_criterion, (value) => $lr_criterion = value);
  $$unsubscribe_opt_criterion = subscribe(opt_criterion, (value) => $opt_criterion = value);
  $$unsubscribe_loss_criterion = subscribe(loss_criterion, (value) => $loss_criterion = value);
  $$unsubscribe_lr = subscribe(lr, (value) => $lr = value);
  $$unsubscribe_batchSize = subscribe(batchSize, (value) => $batchSize = value);
  $$unsubscribe_epoch = subscribe(epoch, (value) => $epoch = value);
  $$unsubscribe_selectedLayers = subscribe(selectedLayers, (value) => $selectedLayers = value);
  $$unsubscribe_layers = subscribe(layers, (value) => $layers = value);
  $$unsubscribe_lrScheduleFunction = subscribe(lrScheduleFunction, (value) => value);
  $$unsubscribe_lossFunction = subscribe(lossFunction, (value) => value);
  $$unsubscribe_optFunction = subscribe(optFunction, (value) => value);
  let layersCode = [], code, schLr, forwardLayerName;
  schLr = `# Learning rate scheduler
    scheduler =${$lr_criterion}`;
  $$result.css.add(css);
  layersCode = $layers;
  {
    console.log(layersCode);
  }
  {
    console.log($selectedLayers);
  }
  forwardLayerName = $selectedLayers.map((l, index) => {
    return `x = ${l.layer.toLowerCase()}_${index}(x)`;
  });
  code = `
import torch
from torch import nn
from torch.utils.data import DataLoader
import torch.optim as optim

# Set device (CPU or GPU)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

#definind Epochs and Batch size
num_epochs = ${$epoch}
batch_size = ${$batchSize}
learning_rate = ${$lr}
# defining the loss and optimization ${$lr_criterion && "and learning rate schedular"}
criterion = ${$loss_criterion}
optimizer = ${$opt_criterion}
${$lr_criterion && schLr}

# loading dataset
train_loader = DataLoader(<<train dataset>>, batch_size=batch_size, shuffle=True) # your preprocessed train dataset
val_loader = DataLoader(<<validation dataset>>, batch_size=batch_size, shuffle=False) # your preprocessed validation dataset

# Define the model
class Model(nn.Module):
    def __init__(self):
        super(Model, self).__init__()
        ${layersCode.join("\n			")}

    def forward(self, x):
        ${forwardLayerName.join("\n			")}
        return x


# Creating instance of model on available device
model = Model().to(device)

# Training loop
for epoch in range(num_epochs):
    # Training true labels, loss and evaluation metric
    train_loss = 0.0
    predictions_train = []
    true_labels_train = []

    #Forward pass
    model.train()

    # Backward pass + calculating gradiants + optimizing the weights
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        train_loss += loss.item()
        predictions_train.extend(outputs.squeeze().tolist())
        true_labels_train.extend(labels.tolist())
    
    # Calculating the average loss + mertics for training labels  
    average_train_loss = train_loss / len(train_loader)
    metrics_train = your_metrics(true_labels_train, predictions_train) # assign your metrics for evaluation

    # Validation true labels, loss and evaluation metric
    val_loss = 0.0
    predictions_val = []
    true_labels_val = []

    # Validation
    model.eval()

    # Running model without gradiant calculation/ inference mode
    with torch.inference_mode():  # or torch.no_grad()
        for inputs, labels in val_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            val_loss += criterion(outputs, labels.unsqueeze(1)).item()
            predictions_val.extend(outputs.squeeze().tolist())
            true_labels_val.extend(labels.tolist())


    # Calculating the average loss + mertics for validation labels  
    average_val_loss = val_loss / len(val_loader)
    metrics_val = your_metrics(true_labels_val, predictions_val) # assign your metrics for evaluation
    print(f'Epoch [{epoch + 1}/{num_epochs}], '
        f'Train Loss: {average_train_loss:.4f}, Train Metrics: {metrics_train:.4f}, '
        f'Val Loss: {average_val_loss:.4f}, Val Metrics: {metrics_val:.4f}')

    # Adjust learning rate
    ${$lr_criterion ? scheduler.step() : ""}

    `;
  $$unsubscribe_lr_criterion();
  $$unsubscribe_opt_criterion();
  $$unsubscribe_loss_criterion();
  $$unsubscribe_lr();
  $$unsubscribe_batchSize();
  $$unsubscribe_epoch();
  $$unsubscribe_selectedLayers();
  $$unsubscribe_layers();
  $$unsubscribe_lrScheduleFunction();
  $$unsubscribe_lossFunction();
  $$unsubscribe_optFunction();
  return ` ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      class: "whitespace-pre-wrap text-nowrap",
      text: "text-xs",
      rounded: "rounded-sm",
      code,
      language: "python"
    },
    {},
    {}
  )}  `;
});
const LayoutCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabSet = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(TabGroup, "TabGroup").$$render(
      $$result,
      {
        padding: "py-1 px-4",
        active: "variant-filled-primary",
        hover: "hover:variant-soft-primary",
        rounded: "rounded-t-md"
      },
      {},
      {
        panel: () => {
          return ` ${tabSet === 0 ? `<div class="overflow-y-scroll h-[75lvh]">${validate_component(ModelDetails, "ModelDetails").$$render($$result, {}, {}, {})}</div>` : `<div class="overflow-y-scroll h-[75lvh]">${validate_component(Code, "Code").$$render($$result, {}, {}, {})}</div>`} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            { name: "tab1", value: 0, group: tabSet },
            {
              group: ($$value) => {
                tabSet = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Model Layout`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: "tab2",
              value: 1,
              class: "codeTab",
              group: tabSet
            },
            {
              group: ($$value) => {
                tabSet = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Code`;
              }
            }
          )} `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-wrap justify-center items-start gap-5 m-4 mt-16 min-h-96 h-[88vh]"><div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">${validate_component(Layers, "Layers").$$render($$result, {}, {}, {})}</div> <div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">${validate_component(SelectedLayers, "SelectedLayers").$$render($$result, {}, {}, {})}</div> <div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">${validate_component(LayoutCode, "LayoutCode").$$render($$result, {}, {}, {})}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-plA4vgdD.js.map

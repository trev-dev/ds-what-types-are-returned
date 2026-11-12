/**
 * PROOF 1: every function exported by the `main` build returns exactly
 * `JSX.Element`, not `ReactElement | null`.
 *
 * The `main` build's `dist/index.d.ts` is byte-identical to the published
 * @bcgov/design-system-react-components@0.9.1, so this is what consumers have.
 * Its return types were inferred by `tsc`: the source on `main` has no
 * return annotations.
 */
import type { JSX, ReactElement } from "react";
import * as DS from "@bcgov/design-system-react-components";
import type { Assignable, Equal, Expect } from "../type-utils";

export type Accordion = Expect<Equal<ReturnType<typeof DS.Accordion>, JSX.Element>>;
export type AccordionGroup = Expect<Equal<ReturnType<typeof DS.AccordionGroup>, JSX.Element>>;
export type AlertBanner = Expect<Equal<ReturnType<typeof DS.AlertBanner>, JSX.Element>>;
export type AlertDialog = Expect<Equal<ReturnType<typeof DS.AlertDialog>, JSX.Element>>;
export type Button = Expect<Equal<ReturnType<typeof DS.Button>, JSX.Element>>;
export type ButtonGroup = Expect<Equal<ReturnType<typeof DS.ButtonGroup>, JSX.Element>>;
export type Calendar = Expect<Equal<ReturnType<typeof DS.Calendar>, JSX.Element>>;
export type Callout = Expect<Equal<ReturnType<typeof DS.Callout>, JSX.Element>>;
export type Checkbox = Expect<Equal<ReturnType<typeof DS.Checkbox>, JSX.Element>>;
export type CheckboxGroup = Expect<Equal<ReturnType<typeof DS.CheckboxGroup>, JSX.Element>>;
export type DatePicker = Expect<Equal<ReturnType<typeof DS.DatePicker>, JSX.Element>>;
export type Dialog = Expect<Equal<ReturnType<typeof DS.Dialog>, JSX.Element>>;
export type Footer = Expect<Equal<ReturnType<typeof DS.Footer>, JSX.Element>>;
export type FooterLinks = Expect<Equal<ReturnType<typeof DS.FooterLinks>, JSX.Element>>;
export type Form = Expect<Equal<ReturnType<typeof DS.Form>, JSX.Element>>;
export type Header = Expect<Equal<ReturnType<typeof DS.Header>, JSX.Element>>;
export type Heading = Expect<Equal<ReturnType<typeof DS.Heading>, JSX.Element>>;
export type InlineAlert = Expect<Equal<ReturnType<typeof DS.InlineAlert>, JSX.Element>>;
export type Link = Expect<Equal<ReturnType<typeof DS.Link>, JSX.Element>>;
export type Menu = Expect<Equal<ReturnType<typeof DS.Menu>, JSX.Element>>;
export type MenuItem = Expect<Equal<ReturnType<typeof DS.MenuItem>, JSX.Element>>;
export type Modal = Expect<Equal<ReturnType<typeof DS.Modal>, JSX.Element>>;
export type NumberField = Expect<Equal<ReturnType<typeof DS.NumberField>, JSX.Element>>;
export type ProgressBar = Expect<Equal<ReturnType<typeof DS.ProgressBar>, JSX.Element>>;
export type ProgressCircle = Expect<Equal<ReturnType<typeof DS.ProgressCircle>, JSX.Element>>;
export type Radio = Expect<Equal<ReturnType<typeof DS.Radio>, JSX.Element>>;
export type RadioGroup = Expect<Equal<ReturnType<typeof DS.RadioGroup>, JSX.Element>>;
export type Select = Expect<Equal<ReturnType<typeof DS.Select>, JSX.Element>>;
export type Separator = Expect<Equal<ReturnType<typeof DS.Separator>, JSX.Element>>;
export type Subheader = Expect<Equal<ReturnType<typeof DS.Subheader>, JSX.Element>>;
export type SvgBcLogo = Expect<Equal<ReturnType<typeof DS.SvgBcLogo>, JSX.Element>>;
export type SvgBcOutlineIcon = Expect<Equal<ReturnType<typeof DS.SvgBcOutlineIcon>, JSX.Element>>;
export type SvgBetaIcon = Expect<Equal<ReturnType<typeof DS.SvgBetaIcon>, JSX.Element>>;
export type SvgCalendarIcon = Expect<Equal<ReturnType<typeof DS.SvgCalendarIcon>, JSX.Element>>;
export type SvgCheckCircleIcon = Expect<Equal<ReturnType<typeof DS.SvgCheckCircleIcon>, JSX.Element>>;
export type SvgCheckIcon = Expect<Equal<ReturnType<typeof DS.SvgCheckIcon>, JSX.Element>>;
export type SvgChevronDownIcon = Expect<Equal<ReturnType<typeof DS.SvgChevronDownIcon>, JSX.Element>>;
export type SvgChevronLeftIcon = Expect<Equal<ReturnType<typeof DS.SvgChevronLeftIcon>, JSX.Element>>;
export type SvgChevronRightIcon = Expect<Equal<ReturnType<typeof DS.SvgChevronRightIcon>, JSX.Element>>;
export type SvgChevronUpIcon = Expect<Equal<ReturnType<typeof DS.SvgChevronUpIcon>, JSX.Element>>;
export type SvgCloseIcon = Expect<Equal<ReturnType<typeof DS.SvgCloseIcon>, JSX.Element>>;
export type SvgDashIcon = Expect<Equal<ReturnType<typeof DS.SvgDashIcon>, JSX.Element>>;
export type SvgExclamationCircleIcon = Expect<Equal<ReturnType<typeof DS.SvgExclamationCircleIcon>, JSX.Element>>;
export type SvgExclamationIcon = Expect<Equal<ReturnType<typeof DS.SvgExclamationIcon>, JSX.Element>>;
export type SvgInfoIcon = Expect<Equal<ReturnType<typeof DS.SvgInfoIcon>, JSX.Element>>;
export type SvgMinusIcon = Expect<Equal<ReturnType<typeof DS.SvgMinusIcon>, JSX.Element>>;
export type SvgPlaceholderIcon = Expect<Equal<ReturnType<typeof DS.SvgPlaceholderIcon>, JSX.Element>>;
export type SvgPlusIcon = Expect<Equal<ReturnType<typeof DS.SvgPlusIcon>, JSX.Element>>;
export type SvgReactAriaIcon = Expect<Equal<ReturnType<typeof DS.SvgReactAriaIcon>, JSX.Element>>;
export type SvgTooltipArrowUp = Expect<Equal<ReturnType<typeof DS.SvgTooltipArrowUp>, JSX.Element>>;
export type SvgUpRightFromSquareIcon = Expect<Equal<ReturnType<typeof DS.SvgUpRightFromSquareIcon>, JSX.Element>>;
export type Switch = Expect<Equal<ReturnType<typeof DS.Switch>, JSX.Element>>;
export type Tag = Expect<Equal<ReturnType<typeof DS.Tag>, JSX.Element>>;
export type TagGroup = Expect<Equal<ReturnType<typeof DS.TagGroup>, JSX.Element>>;
export type TagList = Expect<Equal<ReturnType<typeof DS.TagList>, JSX.Element>>;
export type Text = Expect<Equal<ReturnType<typeof DS.Text>, JSX.Element>>;
export type TextArea = Expect<Equal<ReturnType<typeof DS.TextArea>, JSX.Element>>;
export type TextField = Expect<Equal<ReturnType<typeof DS.TextField>, JSX.Element>>;
export type TimeField = Expect<Equal<ReturnType<typeof DS.TimeField>, JSX.Element>>;
export type ToggleButton = Expect<Equal<ReturnType<typeof DS.ToggleButton>, JSX.Element>>;
export type ToggleButtonGroup = Expect<Equal<ReturnType<typeof DS.ToggleButtonGroup>, JSX.Element>>;
export type Tooltip = Expect<Equal<ReturnType<typeof DS.Tooltip>, JSX.Element>>;

// None of them include `null`:
export type AccordionNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Accordion>>, false>>;
export type AccordionGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.AccordionGroup>>, false>>;
export type AlertBannerNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.AlertBanner>>, false>>;
export type AlertDialogNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.AlertDialog>>, false>>;
export type ButtonNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Button>>, false>>;
export type ButtonGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.ButtonGroup>>, false>>;
export type CalendarNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Calendar>>, false>>;
export type CalloutNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Callout>>, false>>;
export type CheckboxNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Checkbox>>, false>>;
export type CheckboxGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.CheckboxGroup>>, false>>;
export type DatePickerNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.DatePicker>>, false>>;
export type DialogNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Dialog>>, false>>;
export type FooterNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Footer>>, false>>;
export type FooterLinksNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.FooterLinks>>, false>>;
export type FormNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Form>>, false>>;
export type HeaderNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Header>>, false>>;
export type HeadingNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Heading>>, false>>;
export type InlineAlertNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.InlineAlert>>, false>>;
export type LinkNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Link>>, false>>;
export type MenuNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Menu>>, false>>;
export type MenuItemNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.MenuItem>>, false>>;
export type ModalNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Modal>>, false>>;
export type NumberFieldNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.NumberField>>, false>>;
export type ProgressBarNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.ProgressBar>>, false>>;
export type ProgressCircleNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.ProgressCircle>>, false>>;
export type RadioNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Radio>>, false>>;
export type RadioGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.RadioGroup>>, false>>;
export type SelectNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Select>>, false>>;
export type SeparatorNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Separator>>, false>>;
export type SubheaderNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Subheader>>, false>>;
export type SvgBcLogoNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgBcLogo>>, false>>;
export type SvgBcOutlineIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgBcOutlineIcon>>, false>>;
export type SvgBetaIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgBetaIcon>>, false>>;
export type SvgCalendarIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgCalendarIcon>>, false>>;
export type SvgCheckCircleIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgCheckCircleIcon>>, false>>;
export type SvgCheckIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgCheckIcon>>, false>>;
export type SvgChevronDownIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgChevronDownIcon>>, false>>;
export type SvgChevronLeftIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgChevronLeftIcon>>, false>>;
export type SvgChevronRightIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgChevronRightIcon>>, false>>;
export type SvgChevronUpIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgChevronUpIcon>>, false>>;
export type SvgCloseIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgCloseIcon>>, false>>;
export type SvgDashIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgDashIcon>>, false>>;
export type SvgExclamationCircleIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgExclamationCircleIcon>>, false>>;
export type SvgExclamationIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgExclamationIcon>>, false>>;
export type SvgInfoIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgInfoIcon>>, false>>;
export type SvgMinusIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgMinusIcon>>, false>>;
export type SvgPlaceholderIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgPlaceholderIcon>>, false>>;
export type SvgPlusIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgPlusIcon>>, false>>;
export type SvgReactAriaIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgReactAriaIcon>>, false>>;
export type SvgTooltipArrowUpNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgTooltipArrowUp>>, false>>;
export type SvgUpRightFromSquareIconNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.SvgUpRightFromSquareIcon>>, false>>;
export type SwitchNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Switch>>, false>>;
export type TagNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Tag>>, false>>;
export type TagGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.TagGroup>>, false>>;
export type TagListNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.TagList>>, false>>;
export type TextNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Text>>, false>>;
export type TextAreaNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.TextArea>>, false>>;
export type TextFieldNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.TextField>>, false>>;
export type TimeFieldNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.TimeField>>, false>>;
export type ToggleButtonNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.ToggleButton>>, false>>;
export type ToggleButtonGroupNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.ToggleButtonGroup>>, false>>;
export type TooltipNeverNull = Expect<Equal<Assignable<null, ReturnType<typeof DS.Tooltip>>, false>>;

// For contrast, React Aria's convention is NOT what we publish:
export type NotRacConvention = Expect<
  Equal<Equal<ReturnType<typeof DS.Button>, ReactElement | null>, false>
>;

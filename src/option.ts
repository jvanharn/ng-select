import { IOption } from './option.interface';

export class Option {

    wrappedOption: IOption;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;

    public constructor(option: IOption) {
        this.wrappedOption = option;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }

    public get value(): string {
        return this.wrappedOption.value;
    }

    public get label(): string {
        return this.wrappedOption.label;
    }
}

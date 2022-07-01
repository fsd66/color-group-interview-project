import BaseButton from "./BaseButton";

export default function CancelButton(options) {
    return (
        <BaseButton value={"✖ Cancel"} {...options} />
    );
}

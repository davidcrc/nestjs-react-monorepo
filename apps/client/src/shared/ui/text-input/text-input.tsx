import cx from "clsx";
import { type Ref, forwardRef } from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import type { TextInputProps as MantineTextInputProps } from "@mantine/core";
import styles from "./text-input.module.scss";

type ClassNamesType = MantineTextInputProps["classNames"];

interface TextInputProps
  extends Omit<
    MantineTextInputProps,
    "variant" | "classNames" | "inputWrapperOrder"
  > {
  floatingLabel?: boolean;
  "data-testid"?: string;
  showErrorPlaceholder?: boolean;
}

export const TextInput = forwardRef(function TextInput(
  { "data-testid": dataTestId, showErrorPlaceholder, ...props }: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  const getClassNames = (): ClassNamesType => {
    const commonClassNames: ClassNamesType = {
      root: styles.Root,
      input: styles.Input,
      required: styles.Required,
      wrapper: cx(
        styles.Wrapper,
        showErrorPlaceholder && styles["Wrapper--showErrorPlaceholder"]
      ),
      description: styles.Description,
      error: styles.Error,
    };

    return commonClassNames;
  };

  return (
    <MantineTextInput
      {...props}
      ref={ref}
      variant="unstyled"
      classNames={getClassNames()}
      data-testid={dataTestId}
      aria-label={typeof props.label === "string" ? props.label : ""}
      aria-placeholder={props.placeholder}
      inputWrapperOrder={["label", "input", "description", "error"]}
    />
  );
});

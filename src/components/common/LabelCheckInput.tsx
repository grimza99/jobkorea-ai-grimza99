import clsx from "clsx";
import { useState } from "react";

interface LabelCheckInputProps {
  text: string;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function LabelCheckInput({
  text,
  checked = false,
  onChange,
}: LabelCheckInputProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
    onChange?.(isChecked);
  };

  return (
    <label
      className={clsx(
        `flex items-center justify-center w-fit m-1`,
        isChecked ? "rounded-primary-small" : "rounded-gray-small"
      )}
      data-variant={isChecked ? "rounded-primary-small" : "rounded-gray-small"}
      data-checked={isChecked}
    >
      <input
        type="checkbox"
        checked={isChecked}
        value={isChecked ? "on" : "off"}
        name="employmentType"
        onChange={handleClick}
        className="hidden"
      />
      <span
        className="mx-3 my-2.5"
        data-variant={
          isChecked ? "rounded-primary-small" : "rounded-gray-small"
        }
      >
        {text}
      </span>
    </label>
  );
}

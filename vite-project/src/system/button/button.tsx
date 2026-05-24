import React from "react";
import './button.css'

type Variant = "Brand" | "Black" | "White" | "LiteWhite" | "LiteBlack"
type Size = "small" | "medium" | "large";
type Tone = "dark" | "light";
type ButtonType = "button" | "submit" | "reset";
type BorderRadius = "Half" | "Full" | "none"

type Bold = 'Bold' | 'Normal'


interface ButtonProps {
    backgroundColor?: Variant;
    size?: Size;
    color?: Tone;
    type?: ButtonType;
    padding?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onHover?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
    className?: string;
    rounded?: BorderRadius;
    bold?: Bold;
}


const boldStyles: Record<Bold, { weight: string }> = {
    Bold: { weight: '620' },
    Normal: { weight: 'normal' }
}


const variantStyles: Record<Variant, { Hover: string, Color: string }> = {
    Brand: { Color: "var(--Brand)", Hover: '#fd6a2a' },
    Black: { Color: "var(--Black)", Hover: ' rgb(0, 0, 0)' },
    White: { Color: "var(--White)", Hover: ' rgb(230, 230, 230)' },
    LiteWhite: { Color: "var(--LiteWhite)", Hover: 'rgb(204, 204, 204)' },
    LiteBlack: { Color: "var(--LiteBlack)", Hover: 'rgb(0, 0, 0)' },
}

const toneStyles: Record<Tone, { text: string }> = {
    light: { text: "white" },
    dark: { text: "#1A1A1A" }
};

const borderStyles: Record<BorderRadius, { border: string }> = {
    none: { border: "0px" },
    Half: { border: '16px' },
    Full: { border: '50px' }
};

const sizeStyles: Record<Size, { padding: string; fontSize: string }> = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "15px 22px", fontSize: "18px" },
    large: { padding: "16px 30px", fontSize: "22px" }
};

const Button = ({
    backgroundColor = 'White',
    size = "medium",
    color = 'dark',
    type = "button",
    padding,
    children,
    onClick,
  
    disabled = false,
    className,
    rounded = 'none',
    bold = 'Bold'
}: ButtonProps) => {



    const bgs = variantStyles[backgroundColor].Color
    const textColor = toneStyles[color].text;
    const borderRounded = borderStyles[rounded].border

    const styles: React.CSSProperties = {
        backgroundColor: bgs,
        color: textColor,
        padding: padding ?? sizeStyles[size].padding,
        fontSize: sizeStyles[size].fontSize,
        border: "none",
        borderRadius: borderRounded,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontWeight: boldStyles[bold].weight,
        ["--hover-bg" as any]:
            variantStyles[backgroundColor].Hover,
    };

    return (
        <button
            type={type}
            style={styles}
            onClick={disabled ? undefined : onClick}
            
            disabled={disabled}
            className={`custom-button ${className ?? ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
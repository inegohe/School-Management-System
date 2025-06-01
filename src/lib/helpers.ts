interface ColorVariables {
  primary: string;
  "primary-light": string;
  secondary: string;
  "secondary-light": string;
  "accent-1": string;
  "accent-1-light": string;
  "accent-2": string;
  "accent-2-light": string;
  "accent-3": string;
  "accent-3-light": string;
}

export function updateColors(colors: ColorVariables){
  const root = document.documentElement;
  for (const key in colors) {
      key in colors ? root.style.setProperty(`--${key}`, colors[key as keyof ColorVariables]) : null;
  }
}

export function getRoleLabel(role: string): string {
  if (role === "TEACHER" || role === "NONTEACHING") {
    return "staff";
  }
  return role.toLowerCase();
}
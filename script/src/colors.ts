export const Reset = "\x1b[0m"
export const Bright = "\x1b[1m"
export const Dim = "\x1b[2m"
export const Underscore = "\x1b[4m"
export const Blink = "\x1b[5m"
export const Reverse = "\x1b[7m"
export const Hidden = "\x1b[8m"

export const Black = "\x1b[30m"
export const Red = "\x1b[31m"
export const Green = "\x1b[32m"
export const Yellow = "\x1b[33m"
export const Blue = "\x1b[34m"
export const Magenta = "\x1b[35m"
export const Cyan = "\x1b[36m"
export const White = "\x1b[37m"
export const Gray = "\x1b[90m"

export const BgBlack = "\x1b[40m"
export const BgRed = "\x1b[41m"
export const BgGreen = "\x1b[42m"
export const BgYellow = "\x1b[43m"
export const BgBlue = "\x1b[44m"
export const BgMagenta = "\x1b[45m"
export const BgCyan = "\x1b[46m"
export const BgWhite = "\x1b[47m"
export const BgGray = "\x1b[100m"

export function color(message: string, color: string) {
  return color + message + Reset;
}

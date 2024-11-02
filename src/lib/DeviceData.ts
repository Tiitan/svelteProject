export type DeviceData = {
    id: number
    name: string
    features: Feature
    line: number
    address: number
}

type Feature = {
    switchable: Switchable
    dimmable: Dimmable
    colorKelvin: ColorKelvin
}

type Switchable = {
    status: boolean
}

type Dimmable = {
    status: number
}

type ColorKelvin = {
    status: number
}

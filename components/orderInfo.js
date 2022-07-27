import { Popover, Transition } from "@headlessui/react"
import { Button } from "web3uikit"
import { Fragment } from "react"

const solutions = [
    {
        name: "Order Status",
        description: "pending...",
        href: "##",
    },
    {
        name: "Contract Address",
        description: "0X23u4832u489328rhuhu",
        href: "##",
    },
    {
        name: "Order Amount",
        description: "$50",
        href: "##",
    },
]

export default function OrderInfo() {
    return (
        <div className="ml-auto">
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span>Order Info</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-2xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                <div className="ml-4 flex flex-row">
                                                    <div className="text-sm font-medium text-gray-900 text-start mx-5 w-40 h-18">
                                                        {item.name}
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <div className="flex justify-center rounded-md px-2 py-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                            <div className="mr-10">
                                                <Button
                                                    onClick={function noRefCheck() {}}
                                                    text="Fufill"
                                                    theme="colored"
                                                    color="green"
                                                />
                                            </div>
                                            <div calssName="ml-10">
                                                <Button
                                                    onclick={function noRefCheck() {}}
                                                    text="Drop"
                                                    theme="colored"
                                                    color="red"
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}

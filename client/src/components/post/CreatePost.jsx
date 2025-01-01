import { useEffect, useState, useRef } from "react"
import Posts from "./Posts"
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
console.log("lea you are the best!!")

const CreatPost = (props) => {
    const { visible } = props
    const { createPost } = props
    const { setVisible } = props

    const title = useRef(" ")
    const body = useRef(" ")

    return (<>
        <div className="card flex justify-content-center">
            <Dialog
                visible={props.visible}
                modal
                onHide={() => { if (!props.visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>

                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="title" className="text-primary-50 font-semibold">
                                title
                            </label>
                            <InputText id="title" label="title" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={title}></InputText>
                        </div>

                        <div className="inline-flex flex-column gap-2">

                            <label htmlFor="body" className="text-primary-50 font-semibold">
                                body
                            </label>
                            <InputText id="body" label="body" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text" ref={body}></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Add" onClick={(e) => { createPost(title.current.value, body.current.value); hide(e) }} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    </>)

}
export default CreatPost;

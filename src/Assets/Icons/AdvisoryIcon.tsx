import React from 'react'

export type IconProps = {
    size?: number;
    className?: string;
    style?: Object;
    color?: string;
}

export const AdvisoryIcon = (props: IconProps) => {
    return(
        <div>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48"
            width={props.size ? props.size : 48}
            height={props.size ? props.size : 48}
            className={props.className}
            style={{...props.style, fill:props.color}}
            >
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsa" x1="10.729" x2="13.792" y1="31.213" y2="41.75" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#33bef0"></stop>
                    <stop offset="1" stop-color="#0a85d9"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsa)" d="M13,31.571c-6.075,0-11,3.579-11,7.268v0.786C2,40.384,2.616,41,3.375,41H24v-2.161	C24,35.151,19.075,31.571,13,31.571z"></path>
                <path fill="#d6a121" d="M16,33.6c0,1.138-1.2,2.4-3,2.4s-3-1.262-3-2.4c0-1.582,0-4.221,0-4.221h6	C16,29.379,16,32.018,16,33.6z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsb" x1="18.548" x2="19.771" y1="25.5" y2="25.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c48f0c"></stop>
                    <stop offset=".251" stop-color="#d19b16"></stop>
                    <stop offset=".619" stop-color="#dca51f"></stop>
                    <stop offset="1" stop-color="#e0a922"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsb)" d="M18.944,24h-0.88v3h0.997c0.343,0,0.636-0.234,0.694-0.555l0.23-1.277	C20.094,24.557,19.598,24,18.944,24z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsc" x1="-637.941" x2="-636.718" y1="25.5" y2="25.5" gradientTransform="matrix(-1 0 0 1 -630.49 0)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c48f0c"></stop>
                    <stop offset=".251" stop-color="#d19b16"></stop>
                    <stop offset=".619" stop-color="#dca51f"></stop>
                    <stop offset="1" stop-color="#e0a922"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsc)" d="M7.056,24h0.88v3H6.939c-0.343,0-0.636-0.234-0.694-0.555l-0.23-1.277	C5.906,24.557,6.402,24,7.056,24z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqsd" cx="6.591" cy="50.849" r="7.503" gradientTransform="matrix(.92 0 0 .92 6.936 -22.48)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#ffcf54"></stop>
                    <stop offset=".261" stop-color="#fdcb4d"></stop>
                    <stop offset=".639" stop-color="#f7c13a"></stop>
                    <stop offset="1" stop-color="#f0b421"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsd)" d="M13,16.6c-2.961,0-6,0.45-6,6.85c0,0.512,0,2.918,0,3.465C7,29.2,10.6,32,13,32s6-2.8,6-5.085	c0-0.547,0-2.953,0-3.465C19,17.05,15.961,16.6,13,16.6z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqse" cx="-27.19" cy="60.227" r="21.807" gradientTransform="translate(29.941 -34.94) scale(.8433)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c26715"></stop>
                    <stop offset=".508" stop-color="#b85515"></stop>
                    <stop offset="1" stop-color="#ad3f16"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqse)" d="M13,15c-2.752,0-3,1-3,1c-1.647,0-4,1.73-4,5c0,1.192,0.176,2.529,1,5	c0.393-4.717,1.444-6.706,2.706-6.706c0.913,0,1.329,0.824,3.294,0.824c1.659,0,1.647-0.824,3.294-0.824	C18.456,19.294,19,25.256,19,26c0.824-2.471,1-3.959,1-5C20,17.702,17.474,15,13,15z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqsf" cx="-24.244" cy="19.633" r="22.991" gradientTransform="matrix(.8198 0 0 1.0222 32.032 -2.26)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c26715"></stop>
                    <stop offset=".508" stop-color="#b85515"></stop>
                    <stop offset="1" stop-color="#ad3f16"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsf)" d="M13.04,15c-2.91,0-3.248,1.905-3.248,1.905c-0.029,0.966,0,1.905,0,1.905S10.291,20,13.324,20	c1.831,0,4.456-1.362,4.456-5C17.779,15,17.19,15,13.04,15z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsg" x1="32.574" x2="35.558" y1="31.269" y2="41.533" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#33bef0"></stop>
                    <stop offset="1" stop-color="#0a85d9"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsg)" d="M35,31.571c-6.075,0-11,3.579-11,7.268V41h20.625C45.384,41,46,40.384,46,39.625v-0.786	C46,35.151,41.075,31.571,35,31.571z"></path>
                <path fill="#d6a121" d="M38,33.6c0,1.138-1.2,2.4-3,2.4s-3-1.262-3-2.4c0-1.582,0-4.221,0-4.221h6	C38,29.379,38,32.018,38,33.6z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsh" x1="40.548" x2="41.771" y1="25.5" y2="25.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c48f0c"></stop>
                    <stop offset=".251" stop-color="#d19b16"></stop>
                    <stop offset=".619" stop-color="#dca51f"></stop>
                    <stop offset="1" stop-color="#e0a922"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsh)" d="M40.944,24h-0.88v3h0.997c0.343,0,0.636-0.234,0.694-0.555l0.23-1.277	C42.094,24.557,41.598,24,40.944,24z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsi" x1="-659.941" x2="-658.718" y1="25.5" y2="25.5" gradientTransform="matrix(-1 0 0 1 -630.49 0)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c48f0c"></stop>
                    <stop offset=".251" stop-color="#d19b16"></stop>
                    <stop offset=".619" stop-color="#dca51f"></stop>
                    <stop offset="1" stop-color="#e0a922"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsi)" d="M29.056,24h0.88v3h-0.997c-0.343,0-0.636-0.234-0.694-0.555l-0.23-1.277	C27.906,24.557,28.402,24,29.056,24z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqsj" cx="30.505" cy="50.849" r="7.503" gradientTransform="matrix(.92 0 0 .92 6.936 -22.48)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#ffcf54"></stop>
                    <stop offset=".261" stop-color="#fdcb4d"></stop>
                    <stop offset=".639" stop-color="#f7c13a"></stop>
                    <stop offset="1" stop-color="#f0b421"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsj)" d="M35,16.6c-2.961,0-6,0.45-6,6.85c0,0.512,0,2.918,0,3.465C29,29.2,32.6,32,35,32	s6-2.8,6-5.085c0-0.547,0-2.953,0-3.465C41,17.05,37.961,16.6,35,16.6z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqsk" cx="-1.102" cy="60.227" r="21.807" gradientTransform="translate(29.941 -34.94) scale(.8433)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c26715"></stop>
                    <stop offset=".508" stop-color="#b85515"></stop>
                    <stop offset="1" stop-color="#ad3f16"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsk)" d="M35,15c-2.752,0-3,1-3,1c-1.647,0-4,1.73-4,5c0,1.192,0.176,2.529,1,5	c0.393-4.717,1.444-6.706,2.706-6.706c0.913,0,1.329,0.824,3.294,0.824c1.659,0,1.647-0.824,3.294-0.824	C40.456,19.294,41,25.256,41,26c0.824-2.471,1-3.959,1-5C42,17.702,39.474,15,35,15z"></path>
                <radialGradient id="ukT_PxkYnP2gWb_PvMcqsl" cx="2.592" cy="19.633" r="22.991" gradientTransform="matrix(.8198 0 0 1.0222 32.032 -2.26)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#c26715"></stop>
                    <stop offset=".508" stop-color="#b85515"></stop>
                    <stop offset="1" stop-color="#ad3f16"></stop>
                </radialGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsl)" d="M35.04,15c-2.91,0-3.248,1.905-3.248,1.905c-0.029,0.966,0,1.905,0,1.905	S32.291,20,35.324,20c1.831,0,4.456-1.362,4.456-5C39.779,15,39.19,15,35.04,15z"></path>
                <linearGradient id="ukT_PxkYnP2gWb_PvMcqsm" x1="19.414" x2="28.694" y1="-.462" y2="14.637" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#0d61a9"></stop>
                    <stop offset="1" stop-color="#16528c"></stop>
                </linearGradient>
                <path fill="url(#ukT_PxkYnP2gWb_PvMcqsm)" d="M33,2H15c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1h6l2.596,4.754	c0.175,0.32,0.634,0.32,0.809,0L27,12h6c0.552,0,1-0.448,1-1V3C34,2.448,33.552,2,33,2z"></path>
                <path fill="#35c1f1" d="M22.293,9.707L20.146,7.56c-0.195-0.195-0.195-0.512,0-0.707l0.707-0.707	c0.195-0.195,0.512-0.195,0.707,0L23,7.586l3.412-3.412c0.195-0.195,0.512-0.195,0.707,0l0.707,0.707	c0.195,0.195,0.195,0.512,0,0.707l-4.119,4.119C23.317,10.097,22.683,10.097,22.293,9.707z"></path>
            </svg>
        </div>
    )
}
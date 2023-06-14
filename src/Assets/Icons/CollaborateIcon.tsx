import React from 'react'
import { IconProps } from './AdvisoryIcon'

export const CollaborateIcon = (props:IconProps) => {
    return(
        <div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100"
                width={props.size ? props.size : 48}
                height={props.size ? props.size : 48}
                style={{...props.style, fill: props.color}}
                className={props.className}
            >
                <path fill="#6b6aaf" d="M51,17h23c2.209,0,4,1.791,4,4v21l-6-6H51c-2.209,0-4-1.791-4-4V21C47,18.791,48.791,17,51,17z"></path>
                <path fill="#1f212b" d="M78,43c-0.26,0-0.516-0.102-0.707-0.293L71.586,37H51c-2.757,0-5-2.243-5-5V21c0-2.757,2.243-5,5-5 h23c2.757,0,5,2.243,5,5v21c0,0.404-0.243,0.769-0.617,0.924C78.259,42.975,78.129,43,78,43z M51,18c-1.654,0-3,1.346-3,3v11 c0,1.654,1.346,3,3,3h21c0.266,0,0.52,0.105,0.707,0.293L77,39.586V21c0-1.654-1.346-3-3-3H51z"></path>
                <path fill="#a2a2cc" d="M49,13H26c-2.209,0-4,1.791-4,4v21l6-6h21c2.209,0,4-1.791,4-4V17C53,14.791,51.209,13,49,13z"></path>
                <path fill="#1f212b" d="M22,39c-0.129,0-0.259-0.025-0.383-0.076C21.244,38.769,21,38.404,21,38V17c0-2.757,2.243-5,5-5h23 c2.757,0,5,2.243,5,5v11c0,2.757-2.243,5-5,5H28.414l-5.707,5.707C22.516,38.898,22.26,39,22,39z M26,14c-1.654,0-3,1.346-3,3 v18.586l4.293-4.293C27.48,31.105,27.735,31,28,31h21c1.654,0,3-1.346,3-3V17c0-1.654-1.346-3-3-3H26z"></path>
                <path fill="#ead6c7" d="M42.665,61.344C42.567,61.217,42,60.588,42,60.588v-3.647C42,50.784,37.053,46,31.029,46 c-0.01,0-0.019,0.001-0.029,0.001S30.981,46,30.971,46C24.947,46,20,50.784,20,56.941v3.647c0,0-0.567,0.629-0.665,0.756 c-0.163,0.215-0.318,0.541-0.334,0.99c-0.01,0.271,0.642,3.695,0.831,4.283C20.04,67.277,20.456,67.818,21,68v0.49 c0,1.216,0.569,2.394,0.993,3.039c1.272,1.937,3.199,3.355,5.007,4.263c0,0.07,0,0.138,0,0.208c0,2.031-2,2.75-2,2.75S26,83,31,83 s6-4.25,6-4.25S35,78,35,76c0-0.07,0-0.138,0-0.208c1.808-0.908,3.736-2.326,5.007-4.263C40.431,70.884,41,69.706,41,68.49V68 c0.544-0.182,0.96-0.723,1.168-1.384c0.189-0.588,0.841-4.012,0.831-4.283C42.982,61.885,42.828,61.559,42.665,61.344z"></path>
                <path fill="#00ac9c" d="M46.974,85.641l-0.006-0.006c-0.517-2.292-2.155-4.188-4.378-5.054L37,78.75l-0.867-0.253 l-0.006,0.015C36.118,78.527,35.142,80,31,80c-4.134,0-5.115-1.467-5.125-1.482L25.857,78.5L25,78.75l-5.59,1.832 c-2.223,0.867-3.861,2.762-4.378,5.054l-0.006,0.006C14.873,86.34,15.413,87,16.141,87H45.86C46.587,87,47.127,86.34,46.974,85.641z"></path>
                <path fill="#b77748" d="M21.5,63c-0.164,0-0.321-0.081-0.416-0.222C19.063,61.119,18,58.598,18,55.5 C18,49.355,23.042,43,31.478,43c4.334,0,6.794,1.912,7.667,3.66C41.976,47.089,44,50.733,44,55.5c0,5.075-3.08,7.315-3.211,7.408 c-0.154,0.108-0.354,0.122-0.522,0.034c-0.167-0.088-0.27-0.262-0.267-0.45c0-0.031,0.019-3.14-1.999-5.411 c-1.265-1.422-1.733-2.449-1.905-3.448C34.802,55.931,32.58,58,29.5,58c-0.192,0-0.367-0.11-0.451-0.283 c-0.083-0.173-0.06-0.379,0.06-0.529c1.054-1.317,1.598-2.798,1.798-3.844c-3.375,1.88-5.945,6.355-5.972,6.403 c-0.077,0.136-0.213,0.228-0.368,0.249c-0.151,0.02-0.311-0.032-0.42-0.142c-0.034-0.034-0.633-0.646-0.952-1.829 C22.016,60.397,22,62.476,22,62.5c0,0.22-0.144,0.415-0.354,0.479C21.597,62.993,21.548,63,21.5,63z"></path>
                <path fill="#1f212b" d="M30.971,77c-1.934,0-6.587-1.828-8.978-5.471l0.836-0.549c2.132,3.248,6.497,5.02,8.142,5.02 c1.712,0,6.038-1.724,8.201-5.02l0.836,0.549C37.617,75.172,32.926,77,30.971,77z"></path>
                <path fill="#1f212b" d="M45.86,88H16.141c-0.655,0-1.265-0.291-1.673-0.799c-0.403-0.501-0.556-1.147-0.419-1.773 c0.008-0.036,0.018-0.072,0.03-0.106c0.614-2.579,2.465-4.694,4.968-5.671l5.642-1.851c0.018-0.008,1.058-0.415,1.273-1.426 c-1.538-0.852-3.446-2.229-4.804-4.296c-0.266-0.404-1.123-1.835-1.156-3.489c-0.503-0.376-0.897-0.955-1.123-1.671 c-0.176-0.549-0.895-4.124-0.877-4.62c0.027-0.738,0.307-1.256,0.537-1.559c0.111-0.144,0.719-0.821,0.719-0.821l1.485,1.34 c-0.001,0.001-0.512,0.565-0.618,0.7c-0.049,0.063-0.116,0.196-0.124,0.412c0.031,0.34,0.628,3.458,0.784,3.941 c0.137,0.436,0.366,0.685,0.533,0.74C21.725,67.188,22,67.569,22,68v0.49c0,0.906,0.428,1.88,0.829,2.49 c1.01,1.537,2.651,2.929,4.62,3.918C27.787,75.068,28,75.414,28,75.792V76c0,2.703-2.553,3.652-2.662,3.691l-5.617,1.841 c-1.862,0.728-3.27,2.351-3.714,4.323c0,0.003-0.001,0.006-0.002,0.009C16.047,85.973,16.082,86,16.141,86H45.86 c0.061,0,0.096-0.028,0.115-0.053l0.041-0.012c-0.008-0.026-0.016-0.054-0.022-0.081c-0.445-1.974-1.853-3.597-3.766-4.342 L36.689,79.7C36.541,79.646,34,78.662,34,76v-0.208c0-0.378,0.213-0.724,0.551-0.894c1.97-0.99,3.611-2.381,4.62-3.918 C39.572,70.37,40,69.396,40,68.49V68c0-0.431,0.275-0.813,0.683-0.948c0.167-0.056,0.396-0.305,0.531-0.735 c0.157-0.489,0.754-3.607,0.787-4.017c-0.009-0.146-0.076-0.279-0.131-0.352c-0.095-0.123-0.545-0.726-0.545-0.726l1.603-1.197 c0,0.001,0.434,0.581,0.53,0.706c0.235,0.31,0.516,0.826,0.542,1.565c0.017,0.476-0.707,4.09-0.878,4.625 c-0.224,0.713-0.618,1.291-1.121,1.667c-0.033,1.654-0.89,3.085-1.157,3.489c-1.355,2.066-3.264,3.444-4.803,4.296 c0.221,1.019,1.299,1.436,1.312,1.439l5.551,1.817c2.557,0.994,4.41,3.113,5.023,5.697c0.011,0.032,0.02,0.065,0.027,0.099 c0.137,0.627-0.016,1.274-0.419,1.775C47.125,87.709,46.515,88,45.86,88z"></path>
                <path fill="#1f212b" d="M33.5 80.786c-.236 0-.445-.167-.491-.407-.051-.271.127-.533.398-.584 2.137-.403 2.715-1.275 2.721-1.284.123-.247.415-.33.662-.207.247.124.338.44.214.688-.006.013-.663 1.268-3.412 1.786C33.562 80.783 33.53 80.786 33.5 80.786zM31 81c-4.674 0-5.862-1.766-5.982-1.967-.142-.237-.064-.544.173-.686.236-.142.542-.064.684.17C25.897 78.552 26.894 80 31 80c.13 0 .251-.004.374-.008l.112-.004c.264.008.506.209.515.485.008.276-.209.506-.485.515l-.109.003C31.273 80.996 31.141 81 31 81zM39.536 59c-.185 0-.363-.103-.45-.28-.158-.323-.342-.639-.546-.938-.156-.228-.097-.539.131-.694.229-.154.539-.098.695.132.23.338.438.695.618 1.062.121.248.019.547-.229.669C39.685 58.983 39.609 59 39.536 59zM37.413 56c-.163 0-.323-.079-.419-.226-.528-.807-.777-1.495-.893-2.171-.357.631-.773 1.229-1.222 1.749-.181.21-.498.231-.705.053-.209-.181-.233-.496-.053-.705 1.158-1.344 1.718-2.796 1.904-3.358.077-.232.313-.377.555-.335C36.822 51.046 37 51.255 37 51.5l0 .25c-.003 1.325-.005 2.2.831 3.476.151.231.086.541-.145.692C37.602 55.974 37.506 56 37.413 56z"></path>
                <path fill="#1f212b" d="M21.5,63c-0.164,0-0.321-0.081-0.416-0.222C19.063,61.118,18,58.598,18,55.5 C18,49.355,23.042,43,31.478,43c4.335,0,6.795,1.912,7.667,3.66C41.977,47.089,44,50.733,44,55.5c0,5.075-3.08,7.315-3.211,7.408 c-0.153,0.108-0.355,0.121-0.521,0.034c-0.167-0.088-0.27-0.262-0.268-0.449c0-0.008,0.007-0.808-0.243-1.88 c-0.063-0.269,0.104-0.537,0.373-0.601c0.27-0.063,0.538,0.104,0.601,0.374c0.09,0.385,0.15,0.737,0.19,1.039 C41.749,60.506,43,58.602,43,55.5c0-4.395-1.777-7.707-4.227-7.876c-0.19-0.013-0.356-0.133-0.428-0.31 C37.72,45.785,35.547,44,31.478,44C23.667,44,19,49.847,19,55.5c0,1.751,0.381,4.122,2.091,5.938 c0.168-1.184,0.644-3.192,1.993-5.215c0.122-0.184,0.351-0.267,0.561-0.201C23.856,56.085,24,56.279,24,56.5 c0,0.954,0.246,1.646,0.474,2.083c0.972-1.524,3.574-5.194,6.835-6.545c0.154-0.063,0.33-0.046,0.469,0.046 C31.917,52.177,32,52.333,32,52.5c0,1.079-0.463,2.806-1.464,4.402c0.595-0.114,1.169-0.327,1.717-0.639 c0.242-0.138,0.546-0.052,0.682,0.188c0.137,0.24,0.053,0.545-0.188,0.682C31.734,57.708,30.642,58,29.5,58 c-0.192,0-0.367-0.11-0.451-0.283c-0.083-0.174-0.06-0.379,0.06-0.529c1.054-1.316,1.598-2.799,1.798-3.845 c-3.379,1.882-5.945,6.355-5.972,6.404c-0.077,0.136-0.213,0.228-0.368,0.248c-0.153,0.021-0.311-0.03-0.421-0.142 c-0.034-0.034-0.633-0.646-0.952-1.829C22.016,60.397,22,62.476,22,62.5c0,0.22-0.144,0.414-0.354,0.479 C21.597,62.993,21.548,63,21.5,63z"></path>
                <path fill="#ccac94" d="M80.665,61.344C80.567,61.217,80,60.588,80,60.588v-3.647C80,50.784,75.053,46,69.029,46 c-0.01,0-0.019,0.001-0.029,0.001S68.981,46,68.971,46C62.947,46,58,50.784,58,56.941v3.647c0,0-0.567,0.629-0.665,0.756 c-0.163,0.215-0.318,0.541-0.334,0.99c-0.01,0.271,0.642,3.695,0.831,4.283C58.04,67.277,58.456,67.818,59,68v0.49 c0,1.216,0.569,2.394,0.993,3.039c1.272,1.937,3.199,3.355,5.007,4.263c0,0.07,0,0.138,0,0.208c0,2.031-2,2.75-2,2.75S64,83,69,83 s6-4.25,6-4.25S73,78,73,76c0-0.07,0-0.138,0-0.208c1.808-0.908,3.736-2.326,5.007-4.263C78.431,70.884,79,69.706,79,68.49V68 c0.544-0.182,0.96-0.723,1.168-1.384c0.189-0.588,0.841-4.012,0.831-4.283C80.982,61.885,80.828,61.559,80.665,61.344z"></path>
                <path fill="#eddc67" d="M84.974,85.641l-0.006-0.006c-0.517-2.292-2.155-4.188-4.378-5.054L75,78.75l-0.867-0.253 l-0.006,0.015C74.118,78.527,73.142,80,69,80c-4.134,0-5.115-1.467-5.125-1.482L63.857,78.5L63,78.75l-5.59,1.832 c-2.223,0.867-3.861,2.762-4.378,5.054l-0.006,0.006C52.873,86.34,53.413,87,54.141,87H83.86C84.587,87,85.127,86.34,84.974,85.641z"></path>
                <path fill="#b77748" d="M59.5,63c-0.164,0-0.321-0.081-0.416-0.222C57.063,61.119,56,58.598,56,55.5 C56,49.355,61.042,43,69.478,43c4.334,0,6.794,1.912,7.667,3.66C79.976,47.089,82,50.733,82,55.5c0,5.075-3.08,7.315-3.211,7.408 c-0.154,0.108-0.354,0.122-0.522,0.034c-0.167-0.088-0.27-0.262-0.267-0.45c0-0.031,0.019-3.14-1.999-5.411 c-1.265-1.422-1.733-2.449-1.905-3.448C72.802,55.931,70.58,58,67.5,58c-0.192,0-0.367-0.11-0.451-0.283 c-0.083-0.173-0.06-0.379,0.06-0.529c1.054-1.317,1.598-2.798,1.798-3.844c-3.375,1.88-5.945,6.355-5.972,6.403 c-0.077,0.136-0.213,0.228-0.368,0.249c-0.151,0.02-0.311-0.032-0.42-0.142c-0.034-0.034-0.633-0.646-0.952-1.829 C60.016,60.397,60,62.476,60,62.5c0,0.22-0.144,0.415-0.354,0.479C59.597,62.993,59.548,63,59.5,63z"></path>
                <path fill="#1f212b" d="M68.971,77c-1.934,0-6.587-1.828-8.978-5.471l0.836-0.549c2.132,3.248,6.496,5.02,8.142,5.02 c1.712,0,6.038-1.724,8.201-5.02l0.836,0.549C75.617,75.172,70.926,77,68.971,77z"></path>
                <path fill="#1f212b" d="M83.86,88h-29.72c-0.655,0-1.265-0.291-1.673-0.799c-0.403-0.501-0.556-1.147-0.418-1.774 c0.008-0.034,0.017-0.067,0.027-0.101c0.613-2.582,2.465-4.699,4.97-5.676l5.642-1.851c0.019-0.008,1.058-0.415,1.272-1.426 c-1.538-0.852-3.447-2.229-4.804-4.296c-0.267-0.405-1.123-1.837-1.156-3.489c-0.503-0.376-0.897-0.955-1.123-1.671 c-0.17-0.528-0.894-4.143-0.876-4.62c0.025-0.737,0.306-1.255,0.536-1.559c0.109-0.142,0.72-0.821,0.72-0.821l1.484,1.34 c-0.001,0.002-0.509,0.563-0.617,0.698c-0.049,0.065-0.117,0.198-0.125,0.413c0.032,0.343,0.629,3.46,0.784,3.941 c0.138,0.437,0.366,0.686,0.532,0.741C59.725,67.188,60,67.569,60,68v0.49c0,0.905,0.429,1.88,0.829,2.49 c1.009,1.537,2.649,2.928,4.62,3.918C65.787,75.068,66,75.414,66,75.792V76c0,2.703-2.553,3.652-2.662,3.691l-5.616,1.841 c-1.861,0.728-3.27,2.351-3.714,4.323c-0.001,0.003-0.001,0.006-0.002,0.008C54.047,85.973,54.082,86,54.141,86h29.72 c0.061,0,0.096-0.028,0.114-0.052l0.041-0.013c-0.009-0.026-0.017-0.054-0.022-0.081c-0.444-1.974-1.853-3.597-3.766-4.342 L74.688,79.7C74.541,79.646,72,78.662,72,76v-0.208c0-0.378,0.213-0.724,0.551-0.894c1.972-0.99,3.612-2.382,4.62-3.918 c0.4-0.61,0.829-1.585,0.829-2.49V68c0-0.431,0.275-0.813,0.684-0.948c0.166-0.056,0.395-0.305,0.53-0.735 c0.157-0.488,0.754-3.605,0.786-4.017c-0.008-0.146-0.075-0.279-0.131-0.352c-0.096-0.125-0.545-0.726-0.545-0.726l1.602-1.197 c0,0,0.436,0.583,0.532,0.708c0.234,0.308,0.515,0.825,0.54,1.564c0.018,0.477-0.706,4.091-0.878,4.625 c-0.225,0.712-0.618,1.29-1.121,1.666c-0.033,1.652-0.89,3.084-1.156,3.489c-1.355,2.065-3.265,3.443-4.804,4.296 c0.222,1.019,1.3,1.436,1.313,1.439l5.551,1.817c2.557,0.994,4.409,3.113,5.021,5.697c0.012,0.032,0.021,0.065,0.027,0.099 c0.138,0.627-0.015,1.273-0.418,1.774C85.125,87.709,84.516,88,83.86,88z"></path>
                <path fill="#1f212b" d="M71.499 80.786c-.235 0-.445-.167-.49-.407-.052-.271.127-.533.398-.584 2.137-.403 2.715-1.274 2.72-1.283.116-.25.402-.336.653-.22.25.117.347.437.229.688-.006.012-.667 1.278-3.417 1.798C71.562 80.783 71.53 80.786 71.499 80.786zM69 81c-4.834 0-5.945-1.9-5.99-1.98-.134-.242-.047-.546.194-.681.235-.128.534-.052.672.181C63.909 78.567 64.917 80 69 80c.13 0 .252-.004.373-.008l.112-.004c.285-.01.507.209.515.485s-.209.506-.485.515l-.108.003C69.273 80.996 69.142 81 69 81zM77.535 59c-.185 0-.362-.103-.449-.28-.157-.321-.341-.637-.546-.938-.155-.229-.097-.539.132-.694.227-.153.539-.098.694.132.232.341.439.697.618 1.062.121.248.019.547-.229.669C77.685 58.983 77.609 59 77.535 59zM75.412 56c-.162 0-.322-.079-.418-.227-.528-.806-.777-1.494-.894-2.17-.357.631-.772 1.229-1.222 1.749-.18.211-.495.232-.705.053-.209-.181-.232-.496-.053-.705 1.158-1.344 1.718-2.796 1.904-3.358.078-.231.309-.375.555-.335C74.822 51.046 75 51.255 75 51.5v.248c-.004 1.326-.006 2.201.83 3.479.151.23.087.54-.145.691C75.602 55.974 75.507 56 75.412 56z"></path>
                <path fill="#1f212b" d="M59.5,63c-0.164,0-0.321-0.081-0.416-0.222C57.063,61.118,56,58.598,56,55.5 C56,49.355,61.041,43,69.478,43c4.335,0,6.795,1.912,7.668,3.66C79.977,47.089,82,50.733,82,55.5c0,5.075-3.08,7.315-3.211,7.408 c-0.152,0.107-0.354,0.121-0.521,0.034c-0.166-0.087-0.27-0.261-0.268-0.449c0-0.008,0.007-0.808-0.243-1.88 c-0.063-0.269,0.104-0.538,0.374-0.601c0.271-0.063,0.538,0.106,0.601,0.374c0.089,0.385,0.149,0.737,0.189,1.04 C79.748,60.506,81,58.602,81,55.5c0-4.395-1.777-7.707-4.227-7.876c-0.19-0.013-0.356-0.133-0.429-0.31 C75.72,45.785,73.547,44,69.478,44C61.667,44,57,49.847,57,55.5c0,1.751,0.381,4.122,2.092,5.938 c0.168-1.184,0.644-3.192,1.992-5.215c0.122-0.184,0.349-0.268,0.561-0.201C61.855,56.085,62,56.279,62,56.5 c0,0.954,0.245,1.646,0.474,2.083c0.973-1.524,3.573-5.194,6.835-6.545c0.154-0.064,0.332-0.047,0.469,0.046 C69.917,52.177,70,52.333,70,52.5c0,1.079-0.463,2.806-1.465,4.402c0.595-0.114,1.17-0.328,1.718-0.639 c0.239-0.138,0.545-0.053,0.682,0.188s0.053,0.546-0.188,0.682C69.733,57.708,68.642,58,67.5,58c-0.192,0-0.367-0.11-0.45-0.283 c-0.084-0.174-0.061-0.379,0.06-0.529c1.054-1.316,1.598-2.799,1.798-3.845c-3.379,1.882-5.945,6.355-5.973,6.404 c-0.076,0.136-0.213,0.228-0.367,0.248c-0.152,0.021-0.31-0.03-0.421-0.142c-0.034-0.034-0.633-0.646-0.951-1.829 C60.016,60.397,60,62.476,60,62.5c0,0.22-0.144,0.414-0.354,0.479C59.598,62.993,59.549,63,59.5,63z"></path>
            </svg>
        </div>
    )
}
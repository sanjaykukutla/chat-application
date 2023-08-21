import React from 'react'

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type Something here !"></input>
            <div className="send">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Zz2sTQRiGJ8nujIJ/gp77J1kq/sCDopcioodGg4iCgrQn9dKrQooSrOihot2Rntp6b6OuxFKQ0nTcrEpqiK/MJmlN42Znk3QngfnguWwSeJ+d92NhQ4gZM2bMmBn0gB85AYc9g8Mq4AxacVgFDitgiY7FCV/WHpx3iOzIbNEC8s7rDstDmVMR0F8bHnoKnkKFhiAoD8cIYNB39f0xwL0B+KuAvwK42ca1kTkBNwtUS+3IayMj4K92Cvgf9Ah4szYqs3ZMgZVOgcpy8gK11xQfzxIUzxDUXtE+KzSVsIDDsHE9jbWTJGDjajq4pr7E2cZJ6Fpi8cjaC99CPLQOZWfIoAV+v6Qonm4PLymeItidp0Mu4DCUruxX5yClyRhV4hoEtqc7q3OQ8sz/q7T71A7QJlAtUKxPdA8vkd+pPm+vUm2eQtzKBNRe0OQF/rxj+HI5FRm+hXspFfxG/rb+hsK7a0HkMgHeHQv1BZqswNa9jHL4Flv3M8Aigz+9H1408R9YwWeJCPzK21gbjxc+YJzAm+kML5r8fGwfvkD9LYN7Qb06//L1Yio0vGiistR9CXy7Hb86ks/nUti52T28yKktdc8CP570Vh35QCtPKYTPqS11TwL1BYZP5+NXZ10u77W0cnihsNQ9CWxmw5+23dicjB9eRCx1XzswDBAjwM0JwFRoZF8tcvZdRaAwBEERQj5aYImONV5law+Ldug2Fo8ejxTY+4+Aszn5Nlh7cCfIkFcOb8aMGTNmSIz5C7uXTbVg08s9AAAAAElFTkSuQmCC"/>
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACN0lEQVR4nO2WS0hVURSGvyxflGGTAkeSJIVCRSL0oJLSURYIYY4irIQiwiaGEE4qGhRlggMRG/YYSqKDorBBIEiRQpMUoSgoIslAi0pZ8F9YbE7lPffcQPCHA3ev13/32mutvWEZSwxVwD3gPfANGAM6gLXZJG0FfgHzEd8kUJ4N0gsiMOLLwCZgNbAfeC7dCyAvSdJTwG+RHo/QFwCjIm9JirTJpffMX+wOy+ZJEqQW7IcCtjn5igjbDbL7lCnpQWBWwexMU7gCfAf2BvYlsv2cCekutYoF6nTyS5IZ8Y7A56h0z+KSbge+KEifS+t5yX6KxKMIeC392TikW4CPCnAfWCl5s6ravhOBT6EKynxeAvnpkq4H3irAQyBX8kbt0uTnAh/r2QHp3gGlcXY7pADD2oXhkKvq9sDesvFAOsvS5jikNa4irS0M1a6qrwX2du53pLN62EZM9ClIhws8Jll3hP1t6WaAnWSACQXaqvVGd26ps07hqnSWjQOSrQGeAlPumBaFVEpt6KM/YOtXgd1Fye3c692cfiT5m3QviRk5Fmud73r5tHbU7vr4mOwsG/2S2/1clg6pYVzOu4MbKbxz7bI46ar6rpvPFcRApwJ0BfI64LH629K5zxVfr3ymI8bnolGp3czq979wU6Q2z/eQIXoUbEKviyjkALdkNwfUkgAKNbUs6Ff1tL2hVgHrgAZgxLXSERJELnDDzeY/Pers2swKyoHrekd90GAYVKWnffssg/+FBfmDqZb1Us+yAAAAAElFTkSuQmCC"/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input

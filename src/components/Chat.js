import React from 'react'
import Messages from './Messages'
import Input from './Input'
const chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3klEQVR4nO2aW4hVZRTHf17yVpTDmM5AJZmiKZkyoSkhhEGpiCaZgvagItGDow9FLz6o5IV6CEti0JcSrUgUvICC4gVSkkq8lpaDk0kS6ogXvB+3LPhv+Nicc2bvs51z9hm+HyyG/d32+tZ8l7XXOuDxeDwej8fj8Xg8ntj0A5YDJ4DbQJBCrgA/A3OAblQBrwP/p5x0IfkFeJYM8zxwXcoeBCYAdcBwYDXwUHUrgZqI2MSOqP4cMBV4CngamAG0qO4A0ImM8r2U3AF0zVM/S/W2LeojdfNU948MEsUMeUFtbJzM0R24AeSA/k75aKCP87xTk2iM9N+v8vecssHAAOf5I7XZQgYZIuX+cMpmq+yMU9aosrWR/pdVXutM/r5Wi/33jZfV5m8yyCAp96dTNlX7/vcEBggna//5W8BVZwUNV5vTZJAumkQusmxfAnrl2QILIv33qfxDp6wusn0Wq80GMsrXUnBvgTs73BLusg6Zq7pWYGCeviMdn+JtMkgPYIQmYEoeAybqtB8h4+RUt6KNa9Cu0k/U7zVgqTP5PVnzBeqAjcCddnJ+Csm/wKJK+wS1wFlHqf+A5jLINeedTQn0tbNoPvADsAZ4Ja0BvpISx3VtlYvO8hfCVfdGG+37ahtdiqwi6z8+jSIXNJA5O5XgC73/yyJXc5Ou03DSh7UKvtWze0UnJqdB8rm95eB9vX9TpHysvMVQP/u7DRgX8VwDOVslE0gqxTS9f7O2xWR9Ood63QXWA0PbS/8gIwYw1/ivSAzhM8UlitFhDBA4n9ELgSdj9u8wBjiv88Dc8SR0GANsLrG/NwB+BeC3ACkI/BmAPwSDhKvmVeBHOS+tMaVZJ/2oar8F3kqZKbqnOGNVGqCrHBZrv04roSamDHM+vS3u2LMaDTDGiRrbh4uxDPgV+K2IWOAi5GQkJlhVBnhHbXc7ZWdiLPtWx8UNI8rm9roGsFXxKdC7HfVPPUC9vr3vKMKLQt4NbUi9k3i5qTyDBTryfQxdV3DEzUxl6hBsUns7CLcDP8WUrZp8oHgeEQMcBXY5ydf7atfwmPVPPUAPHYBhpCaJPFRCxP3UjZ4Bljn6ToGQwMlRTCoQPU5tgAcaIOkPF14ApgDTY4q1fTHPODP1flslLs8Bn0eix6eUgbZQmPGMym1LlkyzBrH7vRJ8o/evKlBvvy34WDmE0BAXFUw9oGdLyZXMEg3SIiOU6ycsNUqKPNB2Mp+iGE8AHyhb5W6ry9o2JdMTOJTCs3scYgnTuNg58KZyBItixAxjG2GJfPvwTGhvuaWf4LwbT0WPx+PxeDwej8fj8ZCER6A8KUSmDFoIAAAAAElFTkSuQmCC"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nO2WTU6EQBCFv0u4GGWM55DxACYj8RoqMmdxSdSNy9n7cxMwnkJwJwRDUiaEhKa6sQ0LXvI2pNNf6lFd3bBohjoGboE3IAe+xLl8i4H1XwKPgBSogGbENbAHTqZCL4FSAey7ACJX6E4qsIV2q09cKq0nQLtwdeWBY7ym2A814EflhqfARrn2XnNkNN3b+leatZUkOajEIkIbcAPcmMCvHsHPJvCHR3BuAheGRtJqqOEKF3BoAT5zAb97jDqbZXPFHsFXJvDa0wD5HhsgrR6Um4WGRuo7RXnxD3W3iz+BFUqdW0Q+di1eaKHduT31IdC+0ZwUOcbexrtlog6AO+lMTZVPNv9Uo0CutheZQqU4k+FwrTkyi/hv/QAGMJYNzRi9AwAAAABJRU5ErkJggg=="/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO3UMW7CQBSE4b+BVOC0gUORcAxMuCXESBClAcM1IH2ijYaVI7IRnddiPulVnnnF2mswMzMzMzMzuwsPwCtQAZ+aN2AO9DvQ/zEGPoCvxLwDI/Ltx5O4LNkBE2CgeQZqPdsmTqbtfrRQcA8UXCsay8oM+9FaoXASKS/KhG82t350Vii8ypShMqcM+9HphkXFP4va7keVQuFipUyVWWXYj+YK1YnL9ggclZll2I/6+k+H4EEXa6iZNpZsgF6G/V9GjWV/TVjylHH/6mRKfYdnzVKvs9eBvpmZmZmZmRkd9w1Ms7n+qE9GlAAAAABJRU5ErkJggg=="/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default chat

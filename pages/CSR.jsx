import { useState, useEffect } from "react";

function CSR() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/players`)
            .then(response => response.json())
            .then(json => setLista(json))
    }, []);

    return (
        <div>
            <h1>CSR com Next</h1>
            <table id="players">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Username</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((player) => (
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>{player.username}</td>
                            <td>{player.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CSR;
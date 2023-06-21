function SSR({lista}) {

    return (
        <div>
            <h1>SSR com Next</h1>
            <table id="players">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
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

export default SSR;

export async function getServerSideProps(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/players`);
    const lista = await res.json();
    return {
        props : {
            lista
        }
    }
}
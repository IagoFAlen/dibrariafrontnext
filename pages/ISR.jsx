function ISR({lista}) {

    return (
        <div>
            <h1>ISR com Next</h1>
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

export default ISR;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/players`);
    const lista = await res.json();
   
    return {
      props: {
        lista,
      },
      revalidate: 10,
    };
  }
   
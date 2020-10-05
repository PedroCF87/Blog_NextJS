import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>
          <Link href="/">
            <a>Voltar</a>
          </Link> 
          &nbsp; | Navegação do lado do cliente XX
      </h1>
      <p>
        O Linkcomponente permite a navegação do lado do cliente entre duas páginas no mesmo aplicativo Next.js.
      </p>
      <p>
        A navegação do lado do cliente significa que a transição da página acontece usando JavaScript , que é mais rápido do que a navegação padrão feita pelo navegador.
      </p>
      <p>
        Esta é uma maneira simples de verificar:
      </p>
      <ul>
          <li>
              Use as ferramentas de desenvolvedor do navegador para alterar, para yellow, a propriedade background da tag <strong>`body`</strong> no CSS.
          </li>
          <li>
            Clique nos links para ir e voltar entre as duas páginas.              
          </li>
          <li>
            Você verá que o fundo amarelo persiste entre as transições de página.
          </li>
      </ul>
      <p>
        Isso mostra que o navegador não carrega a página inteira e a navegação do lado do cliente está funcionando.
      </p>

      <img src="https://nextjs.org/static/images/learn/navigate-between-pages/client-side.gif" />
      
      <h2>
        <Link href="/">
          <a>Voltar para Home</a>
        </Link>
      </h2>
    </>
  )
}
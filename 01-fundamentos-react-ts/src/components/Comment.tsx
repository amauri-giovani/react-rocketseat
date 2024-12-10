import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    // function handleLikeComment() {
    //     setLikeCount(likeCount + 1)
    // }

    // E se quiséssemos atualizar de 2 em 2 simplesmente repetindo o código?
    // function handleLikeComment() {
    //     setLikeCount(likeCount + 1)
    //     setLikeCount(likeCount + 1)
    // }
    // Não incrementaria de 2 em 2 porque quando o React executa a função acima, 
    // ele cria um novo contexto (com valor 0) para armazenar o valor em likeCount
    // e a segunda linha executará o mesmo código com mesmo valor anterior zero (0)

    // Temos duas soluções para solucionar isso
    // A primeira é criando uma variável armazenando o valor mais atual
    // Daí quando atualizarmos com + 1, o valor será incrementado
    // function handleLikeComment() {
    //     const newLikeCount = likeCount + 1
    //     setLikeCount(newLikeCount)
    //     setLikeCount(newLikeCount + 1)
    // }

    // A segunda e melhor opção é pegar o estado mais atual da variável com 
    // arrow function "() => {}" e atualizar o estado
    // É como se utilizasse uma fila de atualizações
    function handleLikeComment() {
        setLikeCount((stateLikeCount) => {
            return stateLikeCount + 1
        })
    }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/amaurirg.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Amauri Rossetti Giovani</strong>
                            <time title="11 de maio às 08:33h" dateTime="2024-07-09 08:33:47">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    {/* Pode ser usado assim também mas é melhor criar uma função como abaixo */}
                    {/* <button onClick={() => setLikeCount(likeCount + 1)}> */}
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
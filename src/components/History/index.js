import { StyledHistory } from '../../Styles/index';

function History(props) {
    return (
        <StyledHistory>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <p>
                    <strong>Atribuições:</strong> {props.description}
                </p>

                <span>

                    {props.current_job ?
                    `Emprego atual`:
                    `Período trabalhado:  ${props.begening} / ${props.end}`}

                </span>
                <span>
                    Cargo: {props.cargo}
                </span>
            </div>
        </StyledHistory>
    );
}

export default History;